import { useEffect, useState } from 'react'

export default function useQueryString() {
  const [queryString, setQueryString] = useState('')

  useEffect(() => {
    setQueryString(window.location.search.substr(1))
  }, [])

  return queryString
}
