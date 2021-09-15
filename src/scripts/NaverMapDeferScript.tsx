import Head from 'next/head'

function NaverMapDeferScript() {
  return (
    <Head>
      <script
        defer
        type="text/javascript"
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=uprwl7nxp3"
      />
    </Head>
  )
}

export default NaverMapDeferScript
