import Script from 'next/script'

function KakaoScript() {
  return (
    <Script
      onLoad={() => window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY)}
      src="https://developers.kakao.com/sdk/js/kakao.min.js"
    />
  )
}

export default KakaoScript
