import { useEffect, useState } from 'react'

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home')
  const [direction, setDirection] = useState('down')

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      const dir = y > lastY ? 'down' : 'up'
      setDirection(dir)
      // reflect scroll direction on root for CSS if needed
      try {
        document.documentElement.setAttribute('data-scroll-dir', dir)
      } catch (e) {}
      lastY = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    const sections = Array.from(document.querySelectorAll('[data-section]'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section')
            if (id) {
              setActiveSection(id)
              // update DOM classes: mark which section is active and whether it entered from top/bottom
              const entersFrom = direction === 'down' ? 'bottom' : 'top'
              document.querySelectorAll('[data-section]').forEach((el) => {
                el.classList.remove('active-section', 'enter-from-top', 'enter-from-bottom')
                if (el.getAttribute('data-section') === id) {
                  el.classList.add('active-section')
                  el.classList.add(`enter-from-${entersFrom}`)
                }
              })
            }
          }
        })
      },
      { threshold: 0.45 }
    )

    sections.forEach((s) => observer.observe(s))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return { activeSection, direction }
}
