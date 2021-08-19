import { useRouter } from 'next/router'
import { useCallback, MouseEvent } from 'react'

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
