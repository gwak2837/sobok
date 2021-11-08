import { useEffect, useRef } from 'react'

type Options = {
  onIntersecting: () => void
  hasMoreData: boolean
}

function useInfiniteScroll({ onIntersecting, hasMoreData }: Options) {
  const infiniteScrollRef = useRef(null)
  const observer = useRef<IntersectionObserver>()

  useEffect(() => {
    if (infiniteScrollRef.current) {
      const intersectionObserverOption = {
        // root: null
        // rootMargin: '0',
        threshold: 0.5,
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          onIntersecting()
        }
      }, intersectionObserverOption)

      observer.current.observe(infiniteScrollRef.current as any)
    }

    return () => {
      observer.current?.disconnect()
    }
  }, [onIntersecting])

  useEffect(() => {
    if (!hasMoreData) {
      observer.current?.disconnect()
    }
  }, [hasMoreData])

  return infiniteScrollRef
}

export default useInfiniteScroll
