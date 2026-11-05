import { useCallback, useEffect, useState } from 'react'

// A tiny persistent-state hook backed by localStorage.
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue
    try {
      const raw = window.localStorage.getItem(key)
      return raw !== null ? JSON.parse(raw) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* storage unavailable — ignore */
    }
  }, [key, value])

  return [value, setValue]
}

// Track which chapters of a book the learner has marked as finished.
export function useProgress(bookId, totalChapters) {
  const [done, setDone] = useLocalStorage(`virgil:progress:${bookId}`, [])

  const toggle = useCallback(
    (chapterNumber) => {
      setDone((prev) =>
        prev.includes(chapterNumber)
          ? prev.filter((n) => n !== chapterNumber)
          : [...prev, chapterNumber].sort((a, b) => a - b),
      )
    },
    [setDone],
  )

  const isDone = useCallback((chapterNumber) => done.includes(chapterNumber), [done])

  const count = done.length
  const percent = totalChapters ? Math.round((count / totalChapters) * 100) : 0

  return { done, toggle, isDone, count, percent }
}
