import { useEffect, useState } from 'react'

// Fetch one chapter of a reference source. The heavy text is kept as static
// JSON in public/sources/ so it never has to be part of the JS bundle.
export function useSourceChapter(sourceSlug, chapterId) {
  const [state, setState] = useState({ status: 'idle', data: null, error: null })

  useEffect(() => {
    if (!sourceSlug || !chapterId) return
    let cancelled = false
    setState({ status: 'loading', data: null, error: null })

    const url = `${import.meta.env.BASE_URL}sources/${sourceSlug}/${chapterId}.json`
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Could not load this chapter (${res.status}).`)
        return res.json()
      })
      .then((data) => {
        if (!cancelled) setState({ status: 'ready', data, error: null })
      })
      .catch((error) => {
        if (!cancelled) setState({ status: 'error', data: null, error })
      })

    return () => {
      cancelled = true
    }
  }, [sourceSlug, chapterId])

  return state
}

export default useSourceChapter