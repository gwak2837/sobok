import { useRouter } from 'next/router'
import { MouseEvent, useCallback } from 'react'

export default function useGoToPage(url: string) {
  const router = useRouter()

  const goToPage = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation()
      router.push(url)
    },
    [router, url]
  )

  return goToPage
}
