import { useEffect, useRef } from 'react'

type Options = {
  onIntersecting: () => void
  hasMoreData: boolean
}

function useInfiniteScroll({ onIntersecting, hasMoreData }: Options) {
  const loadingRef = useRef(null)
  const observer = useRef<IntersectionObserver>()

  useEffect(() => {
    if (loadingRef.current) {
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

      observer.current.observe(loadingRef.current as any)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingRef.current])

  useEffect(() => {
    if (!hasMoreData && loadingRef.current) {
      observer.current?.unobserve(loadingRef.current as any)
    }
  }, [hasMoreData])

  return loadingRef
}

export default useInfiniteScroll
