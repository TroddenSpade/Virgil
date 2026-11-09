import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAccount } from '../lib/account.jsx'
import {
  progressFingerprint,
  readLocalProgress,
  summarizeProgress,
} from '../lib/progress.js'

function formatDate(value) {
  if (!value) return null
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return null
  return date.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })
}

function ProgressStats({ summary }) {
  return (
    <dl className="profile-stats">
      {summary.books.map((book) => (
        <div key={book.id}>
          <dt>{book.shortTitle}</dt>
          <dd>
            {book.learned} / {book.chapterCount}
            <span className="profile-stats__percent"> · {book.percent}%</span>
          </dd>
        </div>
      ))}
      <div className="profile-stats__total">
        <dt>Total</dt>
        <dd>
          {summary.total} / {summary.totalChapters}
          <span className="profile-stats__percent"> · {summary.percent}%</span>
        </dd>
      </div>
    </dl>
  )
}

export default function Profile() {
  const {
    configured,
    authState,
    email,
    error,
    operation,
    remote,
    remoteLoading,
    lastSyncedAt,
    signIn,
    signOut,
    saveProgress,
    fetchProgress,
    deleteRemote,
  } = useAccount()

  const [address, setAddress] = useState('')
  const [busy, setBusy] = useState(false)
  const [notice, setNotice] = useState(null)
  const [revision, setRevision] = useState(0)
  const [confirmLoad, setConfirmLoad] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const local = useMemo(() => readLocalProgress(), [revision])
  const localSummary = useMemo(() => summarizeProgress(local), [local])
  const remoteSummary = useMemo(
    () => (remote ? summarizeProgress(remote.progress) : null),
    [remote],
  )
  const inSync = Boolean(remote) && progressFingerprint(local) === progressFingerprint(remote.progress)
  const signedIn = authState === 'signed-in'
  const remoteDate = formatDate(remote?.updatedAt)
  const syncedDate = formatDate(lastSyncedAt)

  useEffect(() => {
    const refresh = () => setRevision((value) => value + 1)
    const onStorage = (event) => {
      if (event.type === 'storage' || event.detail?.key?.startsWith('virgil:progress:')) refresh()
    }
    window.addEventListener('virgil:storage', onStorage)
    window.addEventListener('storage', onStorage)
    window.addEventListener('focus', refresh)
    return () => {
      window.removeEventListener('virgil:storage', onStorage)
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('focus', refresh)
    }
  }, [])

  const status = (() => {
    if (!configured) return { tone: 'muted', label: 'Local only' }
    if (authState === 'loading') return { tone: 'busy', label: 'Checking session' }
    if (!signedIn) return { tone: 'muted', label: 'Local only' }
    if (operation === 'saving') return { tone: 'busy', label: 'Saving' }
    if (operation === 'fetching') return { tone: 'busy', label: 'Loading account copy' }
    if (operation === 'deleting') return { tone: 'busy', label: 'Deleting account copy' }
    if (error) return { tone: 'error', label: 'Connection issue' }
    if (remoteLoading) return { tone: 'busy', label: 'Checking account' }
    if (!remote) return { tone: 'warn', label: 'Not saved yet' }
    if (inSync) return { tone: 'ok', label: 'In sync' }
    return { tone: 'warn', label: 'Local changes' }
  })()

  const handleSignIn = async (event) => {
    event.preventDefault()
    if (!address.trim()) return
    setBusy(true)
    setNotice(null)
    const result = await signIn(address)
    setBusy(false)
    setNotice(
      result.ok
        ? {
            tone: 'ok',
            text: `Check ${address.trim()} for a sign-in link. It may take a minute to arrive.`,
          }
        : { tone: 'error', text: result.error || 'Could not send the sign-in link.' },
    )
  }

  const handleSave = async () => {
    const result = await saveProgress()
    if (result.ok) {
      setRevision((value) => value + 1)
      setNotice({ tone: 'ok', text: 'Progress saved to your account.' })
    } else {
      setNotice({ tone: 'error', text: result.error || 'Could not save to the account.' })
    }
  }

  const handleFetch = async () => {
    const result = await fetchProgress()
    setConfirmLoad(false)
    if (result.ok) {
      setRevision((value) => value + 1)
      setNotice({ tone: 'ok', text: 'Account copy loaded onto this device.' })
    } else {
      setNotice({ tone: 'error', text: result.error || 'Could not load the account copy.' })
    }
  }

  const handleDelete = async () => {
    const result = await deleteRemote()
    setConfirmDelete(false)
    if (result.ok) {
      setNotice({ tone: 'ok', text: 'Saved copy deleted. This device still has your progress.' })
    } else {
      setNotice({ tone: 'error', text: result.error || 'Could not delete the saved copy.' })
    }
  }

  const handleSignOut = async () => {
    await signOut()
    setConfirmLoad(false)
    setConfirmDelete(false)
    setNotice({ tone: 'ok', text: 'Signed out. Your progress stays on this device.' })
  }

  return (
    <section className="section profile-page">
      <div className="container">
        <div className="profile-head">
          <div>
            <p className="eyebrow">Profile</p>
            <h1>My Profile</h1>
            <p className="lead profile-head__lead">
              Virgil is local-first: every chapter, exercise and mark travels with this browser. Sign
              in with an email link to keep a copy of your learned chapters in Supabase, then load it
              on another device.
            </p>
          </div>
          <span className={`profile-pill profile-pill--${status.tone}`}>
            <span className="profile-pill__dot" />
            {status.label}
          </span>
        </div>

        <div className="profile-layout">
          <div className="profile-main">
            {!configured ? (
              <section className="profile-panel card">
                <p className="eyebrow">Sync is off in this build</p>
                <h2>Local-first by default.</h2>
                <p>
                  Your progress still lives on this device, and the whole course works offline. To
                  enable email sign-in, set <code>VITE_SUPABASE_URL</code> and{' '}
                  <code>VITE_SUPABASE_ANON_KEY</code> before building. The README has the exact
                  Supabase setup steps.
                </p>
                <p className="small muted">
                  Nothing is lost by waiting: your learned chapters are already saved in this browser.
                </p>
              </section>
            ) : authState === 'loading' ? (
              <section className="profile-panel card">
                <p className="eyebrow">Profile</p>
                <h2>Checking your session…</h2>
                <p className="small muted">This will only take a moment.</p>
              </section>
            ) : !signedIn ? (
              <section className="profile-panel card">
                <div className="profile-panel__head">
                  <div>
                    <p className="eyebrow">Email sign-in</p>
                    <h2>No password. Just a link.</h2>
                  </div>
                  <span className="profile-panel__mark" aria-hidden="true">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.3 9.2 4 4 0 0 0 6.5 17h11Z" />
                      <path d="M9 14h6" />
                    </svg>
                  </span>
                </div>
                <p>
                  Enter the email you want to use. Supabase sends a one-time sign-in link; opening it
                  brings you back here, signed in. There is no password to remember.
                </p>
                <form className="profile-form" onSubmit={handleSignIn}>
                  <label className="profile-field" htmlFor="profile-email">
                    <span>Email address</span>
                    <input
                      id="profile-email"
                      type="email"
                      required
                      autoComplete="email"
                      inputMode="email"
                      placeholder="you@example.com"
                      value={address}
                      onChange={(event) => setAddress(event.target.value)}
                    />
                  </label>
                  <button className="btn btn--primary" type="submit" disabled={busy}>
                    {busy ? 'Sending…' : 'Email me a sign-in link'}
                  </button>
                </form>
                {notice && (
                  <p className={`profile-message profile-message--${notice.tone}`} role={notice.tone === 'error' ? 'alert' : 'status'}>
                    {notice.text}
                  </p>
                )}
                <p className="profile-note muted">
                  The link returns to this site. If it does not arrive, check spam or ask for another
                  one in a minute.
                </p>
              </section>
            ) : (
              <section className="profile-panel card">
                <div className="profile-identity">
                  <span className="profile-avatar" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <circle cx="12" cy="8" r="3.5" />
                      <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
                    </svg>
                  </span>
                  <div>
                    <p className="eyebrow">Signed in</p>
                    <h2>{email}</h2>
                    <p className="small muted">
                      {syncedDate
                        ? `Last synced ${syncedDate}.`
                        : remoteDate
                          ? `Account copy last saved ${remoteDate}.`
                          : 'No copy saved to the account yet.'}
                    </p>
                  </div>
                  <span className={`profile-pill profile-pill--${status.tone}`}>
                    <span className="profile-pill__dot" />
                    {status.label}
                  </span>
                </div>

                <div className="profile-actions">
                  <button
                    className="btn btn--primary"
                    type="button"
                    onClick={handleSave}
                    disabled={operation === 'saving'}
                  >
                    {operation === 'saving' ? 'Saving…' : 'Save to account'}
                  </button>
                  <button
                    className="btn btn--ghost"
                    type="button"
                    onClick={() => setConfirmLoad(true)}
                    disabled={!remote || inSync || operation === 'fetching'}
                  >
                    {operation === 'fetching' ? 'Loading…' : 'Load account copy'}
                  </button>
                  <button className="btn btn--ghost" type="button" onClick={handleSignOut}>
                    Sign out
                  </button>
                </div>

                {confirmLoad && remote && (
                  <div className="profile-confirm" role="alert">
                    <p>
                      <strong>Replace this device’s progress?</strong> The learned chapters here will
                      be overwritten by the account copy from {remoteDate || 'your account'}.
                    </p>
                    <div className="profile-actions">
                      <button className="btn btn--primary btn--sm" type="button" onClick={handleFetch} disabled={operation === 'fetching'}>
                        {operation === 'fetching' ? 'Loading…' : 'Replace with account copy'}
                      </button>
                      <button className="btn btn--ghost btn--sm" type="button" onClick={() => setConfirmLoad(false)}>
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {error && (
                  <p className="profile-message profile-message--error" role="alert">
                    {error}
                  </p>
                )}
              </section>
            )}

            {notice && configured && signedIn && (
              <p className={`profile-message profile-message--${notice.tone}`} role={notice.tone === 'error' ? 'alert' : 'status'}>
                {notice.text}
              </p>
            )}

            <div className="profile-snapshots">
              <article className="profile-snapshot card">
                <div className="profile-snapshot__head">
                  <div>
                    <p className="eyebrow">This device</p>
                    <h2 className="profile-snapshot__title">
                      {localSummary.total ? `${localSummary.total} chapters learned` : 'No progress yet'}
                    </h2>
                  </div>
                  <span className="tag">Local</span>
                </div>
                <ProgressStats summary={localSummary} />
                <p className="profile-snapshot__stamp">
                  {localSummary.total
                    ? 'Saved in this browser’s local storage.'
                    : 'Mark a chapter as learned to begin.'}
                </p>
              </article>

              <article className="profile-snapshot card">
                <div className="profile-snapshot__head">
                  <div>
                    <p className="eyebrow">Your account</p>
                    <h2 className="profile-snapshot__title">
                      {remoteSummary
                        ? remoteSummary.total
                          ? `${remoteSummary.total} chapters learned`
                          : 'The saved copy is empty'
                        : 'No saved copy'}
                    </h2>
                  </div>
                  <span className={`tag ${remote ? 'tag--gold' : ''}`}>
                    {remoteLoading ? 'Checking' : remote ? 'Saved' : 'Empty'}
                  </span>
                </div>
                {remote && remoteSummary ? (
                  <>
                    <ProgressStats summary={remoteSummary} />
                    <p className="profile-snapshot__stamp">
                      {remoteDate ? `Saved ${remoteDate}.` : 'Saved to the account.'}
                      {inSync ? ' This device matches it.' : ''}
                    </p>
                  </>
                ) : (
                  <p className="profile-snapshot__stamp">
                    {signedIn
                      ? 'Use “Save to account” to start a copy.'
                      : 'Sign in to see the copy saved to your account.'}
                  </p>
                )}
              </article>
            </div>

            {signedIn && remote && (
              <section className="profile-danger card">
                <div>
                  <p className="eyebrow">Saved copy</p>
                  <h3>Delete the account copy</h3>
                  <p className="small muted">
                    This removes the copy in Supabase. The progress on this device stays exactly
                    where it is.
                  </p>
                </div>
                {confirmDelete ? (
                  <div className="profile-actions">
                    <button className="btn btn--danger btn--sm" type="button" onClick={handleDelete} disabled={operation === 'deleting'}>
                      {operation === 'deleting' ? 'Deleting…' : 'Yes, delete it'}
                    </button>
                    <button className="btn btn--ghost btn--sm" type="button" onClick={() => setConfirmDelete(false)}>
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button className="btn btn--ghost btn--sm" type="button" onClick={() => setConfirmDelete(true)}>
                    Delete saved copy
                  </button>
                )}
              </section>
            )}

            <p className="profile-back">
              <Link className="back-link" to="/library">
                ← Return to the library
              </Link>
            </p>
          </div>

          <aside className="profile-aside">
            <article className="profile-side-card card">
              <p className="eyebrow">What travels</p>
              <ul className="profile-list">
                <li>
                  <strong>Learned chapters.</strong> The chapters you mark as learned in Familia
                  Romana and Roma Aeterna.
                </li>
                <li>
                  <strong>Not your preferences.</strong> Theme and install settings stay on this
                  device.
                </li>
              </ul>
            </article>
            <article className="profile-side-card card">
              <p className="eyebrow">Local first</p>
              <p>
                The reader never waits for the network. Saving to your account is a deliberate copy,
                and loading the account copy asks before it replaces this device’s progress.
              </p>
              <p className="small muted">
                The public Supabase key can only reach the signed-in user’s own row; row-level
                security protects the table.
              </p>
            </article>
          </aside>
        </div>
      </div>
    </section>
  )
}
