import { useRouter } from 'next/router'
import { MouseEvent, useCallback } from 'react'

export default function useGoBack() {
  const router = useRouter()

  const goBack = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation()
      router.back()
    },
    [router]
  )

  return goBack
}
