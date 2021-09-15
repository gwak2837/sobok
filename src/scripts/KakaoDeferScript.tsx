import Head from 'next/head'
import { useEffect } from 'react'

function KakaoDeferScript() {
  // Kakao API 초기화
  useEffect(() => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY)
  }, [])

  return (
    <Head>
      <script defer src="https://developers.kakao.com/sdk/js/kakao.min.js" />
    </Head>
  )
}

export default KakaoDeferScript
