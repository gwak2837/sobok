import Head from 'next/head'

function KakaoDeferScript() {
  return (
    <Head>
      <script defer src="https://developers.kakao.com/sdk/js/kakao.min.js" />
    </Head>
  )
}

export default KakaoDeferScript
