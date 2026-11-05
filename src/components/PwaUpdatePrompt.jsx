import { useCallback, useEffect, useState } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'

// How often an open tab re-checks for a newer deployed version.
const UPDATE_INTERVAL = 30 * 60 * 1000 // 30 minutes

// The service worker registration is wired up once, no matter how many times
// the component mounts (e.g. React StrictMode double-invokes effects in dev).
let wired = false

/*
 * A top-of-page notice shown when a newer version of the app has been deployed
 * (a new service worker is installed but waiting) or when the app has just
 * become available offline.
 *
 * Clicking "Refresh" activates the waiting worker and then reloads the page, so
 * the browser fetches and serves the freshly deployed version. We reload
 * ourselves rather than trusting vite-plugin-pwa's helper: its
 * `updateServiceWorker(reloadPage)` ignores the reload flag and only posts
 * SKIP_WAITING, relying on the workbox `controlling` event to reload — which
 * never fires if the current page isn't yet controlled by a service worker.
 */
export default function PwaUpdatePrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    // We handle the reload explicitly in applyUpdate, so suppress the library's
    // automatic reload to avoid reloading twice.
    onNeedReload: () => {},
    onRegisteredSW(_swUrl, registration) {
      if (!registration || wired) return
      wired = true

      const check = () => registration.update().catch(() => {})
      window.setInterval(check, UPDATE_INTERVAL)
      // Also re-check whenever the user returns to the tab.
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') check()
      })
    },
  })

  const [refreshing, setRefreshing] = useState(false)

  const applyUpdate = useCallback(async () => {
    setRefreshing(true)
    try {
      const registration = await navigator.serviceWorker.getRegistration()
      const waiting = registration?.waiting

      // Wait until the new worker has taken over (or give up after a moment),
      // listening before we ask it to skip waiting so we never miss the event.
      const activated = new Promise((resolve) => {
        if (!waiting) return resolve()
        waiting.addEventListener('statechange', () => {
          if (waiting.state === 'activated') resolve()
        })
        if (navigator.serviceWorker.controller) {
          navigator.serviceWorker.addEventListener('controllerchange', resolve, { once: true })
        }
        window.setTimeout(resolve, 4000)
      })

      await updateServiceWorker(false) // posts SKIP_WAITING to the waiting worker
      await activated
    } catch {
      /* fall through to the reload below */
    }
    window.location.reload()
  }, [updateServiceWorker])

  // Let the "ready offline" note fade on its own; the update notice stays.
  useEffect(() => {
    if (!offlineReady) return
    const timer = window.setTimeout(() => setOfflineReady(false), 6000)
    return () => window.clearTimeout(timer)
  }, [offlineReady, setOfflineReady])

  if (!needRefresh && !offlineReady) return null

  return (
    <div className="pwa-update" role="status" aria-live="polite">
      <span className="pwa-update__icon" aria-hidden="true">
        {needRefresh ? (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12a9 9 0 1 1-2.6-6.4" />
            <path d="M21 3v6h-6" />
          </svg>
        ) : (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        )}
      </span>

      <p className="pwa-update__text">
        {needRefresh ? (
          <>
            <strong>A new version is ready.</strong> Refresh to read the latest.
          </>
        ) : (
          <>
            <strong>Saved for offline.</strong> Virgil is now on this device.
          </>
        )}
      </p>

      {needRefresh && (
        <button
          type="button"
          className="pwa-update__action"
          onClick={applyUpdate}
          disabled={refreshing}
        >
          {refreshing ? 'Refreshing…' : 'Refresh'}
        </button>
      )}

      <button
        type="button"
        className="pwa-update__dismiss"
        aria-label="Dismiss"
        onClick={() => (needRefresh ? setNeedRefresh(false) : setOfflineReady(false))}
      >
        ×
      </button>
    </div>
  )
}
