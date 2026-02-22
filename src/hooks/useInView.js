import { useEffect, useState, useRef } from 'react'

export default function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            // optionally unobserve to run only once
            observer.unobserve(entry.target)
          }
        })
      },
      options
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, options])

  return [ref, inView]
}
