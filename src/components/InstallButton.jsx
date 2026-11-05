import { usePwaInstall } from '../hooks/usePwaInstall.js'

export default function InstallButton() {
  const { canInstall, installed, promptInstall } = usePwaInstall()

  if (installed || !canInstall) return null

  return (
    <button type="button" className="install-btn" onClick={promptInstall}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 3v12M7 10l5 5 5-5M5 20h14" />
      </svg>
      Install app
    </button>
  )
}
