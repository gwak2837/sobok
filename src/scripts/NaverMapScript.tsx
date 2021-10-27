import Script from 'next/script'

type Props = {
  onLoad?: (e: any) => void
}

function NaverMapScript({ onLoad }: Props) {
  return (
    <Script
      onLoad={onLoad}
      src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=uprwl7nxp3"
    />
  )
}

export default NaverMapScript
