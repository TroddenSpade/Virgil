import { useEffect, useState } from 'react'

/**
 * Track which of the given element ids is currently in view.
 * Returns the id of the section whose heading is nearest the top of the
 * viewport (just below the sticky header), falling back to the last one at
 * the bottom of the page.
 */
export function useScrollSpy(ids) {
  const key = ids.join(',')
  const [active, setActive] = useState(ids[0] ?? null)

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return

    let raf = 0
    const update = () => {
      const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) || 64
      const offset = headerH + 140
      let current = sections[0].id
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= offset) current = el.id
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = sections[sections.length - 1].id
      }
      setActive(current)
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return active
}
