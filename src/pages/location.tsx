import Script from 'next/script'
import { useRef } from 'react'
import PageHead from 'src/components/PageHead'
import { useRecoilState } from 'recoil'
import { currentLocation } from 'src/models/recoil'
import { toast } from 'react-toastify'
import { getCurrentPositionFromGeolocationAPI } from 'src/utils/web-api'
import { createNaverMap } from 'src/utils/commons'

const description = ''

export default function LocationPage() {
  const mapRef = useRef<any>()

  const [coordinates, setCoordinates] = useRecoilState(currentLocation)

  async function initializeNaverMap() {
    const position = await getCurrentPositionFromGeolocationAPI().catch((error) => {
      toast.warn(error)
      return null
    })

    const coords = position?.coords

    mapRef.current = createNaverMap(coords?.latitude ?? 37.3595704, coords?.longitude ?? 127.105399)
  }

  return (
    <PageHead title=" - 소복" description={description}>
      <Script
        onLoad={initializeNaverMap}
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=uprwl7nxp3"
      />

      <div id="map" ref={mapRef} style={{ width: '100vw', height: '100vh' }}></div>
    </PageHead>
  )
}
