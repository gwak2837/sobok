import { useEffect, useState } from 'react'

export function getJSONFromQueryString(queryString: string) {
  return JSON.parse(
    '{"' + queryString.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
    (key, value) => {
      return key === '' ? value : decodeURIComponent(value)
    }
  )
}

export default function useQueryString() {
  const [queryString, setQueryString] = useState<Record<string, any> | null>(null)

  useEffect(() => {
    setQueryString(getJSONFromQueryString(location.search.substr(1)))
  }, [])

  return queryString
}
