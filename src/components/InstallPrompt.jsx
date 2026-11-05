import { useEffect, useState } from 'react'
import { usePwaInstall } from '../hooks/usePwaInstall.js'
import Logo from './Logo.jsx'

// Remember a dismissal so we don't ask again straight away, but do ask again
// eventually in case the user changes their mind.
const DISMISS_KEY = 'virgil:install-dismissed'
const DISMISS_DAYS = 14

function dismissedRecently() {
  try {
    const at = Number(window.localStorage.getItem(DISMISS_KEY))
    if (!Number.isFinite(at) || at <= 0) return false
    return Date.now() - at < DISMISS_DAYS * 24 * 60 * 60 * 1000
  } catch {
    return false
  }
}

// iOS never fires `beforeinstallprompt`, so there we show a short hint instead
// of an Install button.
function isIosSafari() {
  if (typeof window === 'undefined') return false
  const ua = window.navigator.userAgent
  const iOS =
    /iphone|ipad|ipod/i.test(ua) ||
    (window.navigator.platform === 'MacIntel' && 'ontouchend' in document)
  return iOS
}

function isStandalone() {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true
  )
}

/*
 * A small card in the bottom-left corner. When the app is not installed it asks
 * whether the user would like to install it: on Chromium we trigger the native
 * install prompt, on iOS we explain how to add it to the Home Screen.
 */
export default function InstallPrompt() {
  const { canInstall, installed, promptInstall } = usePwaInstall()
  const [dismissed, setDismissed] = useState(dismissedRecently)
  const [ios, setIos] = useState(false)

  useEffect(() => {
    setIos(isIosSafari() && !isStandalone())
  }, [])

  const dismiss = () => {
    setDismissed(true)
    try {
      window.localStorage.setItem(DISMISS_KEY, String(Date.now()))
    } catch {
      /* storage unavailable — the card simply stays dismissed for this session */
    }
  }

  const install = async () => {
    await promptInstall()
  }

  if (installed || dismissed) return null
  if (!canInstall && !ios) return null

  return (
    <aside className="install-prompt" role="dialog" aria-label="Install Virgil">
      <span className="install-prompt__mark" aria-hidden="true">
        <Logo size={40} />
      </span>

      <div className="install-prompt__body">
        <p className="install-prompt__title">Install Virgil</p>
        <p className="install-prompt__text">
          {canInstall
            ? 'Add it to your device to read offline, like a native app.'
            : 'Tap the Share button, then “Add to Home Screen”.'}
        </p>
        <div className="install-prompt__actions">
          {canInstall && (
            <button type="button" className="install-prompt__install" onClick={install}>
              Install
            </button>
          )}
          <button type="button" className="install-prompt__later" onClick={dismiss}>
            {canInstall ? 'Not now' : 'Got it'}
          </button>
        </div>
      </div>

      <button type="button" className="install-prompt__close" aria-label="Dismiss" onClick={dismiss}>
        ×
      </button>
    </aside>
  )
}
