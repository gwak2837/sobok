import { useRef } from 'react'
import PageHead from 'src/components/PageHead'
import { useRecoilState } from 'recoil'
import { currentLocation } from 'src/models/recoil'
import { toast } from 'react-toastify'
import { getCurrentPositionFromGeolocationAPI } from 'src/utils/web-api'
import { createNaverMap } from 'src/utils/commons'
import NaverMapScript from 'src/scripts/NaverMapScript'

const description = ''

export default function LocationPage() {
  const naverMapRef = useRef<any>()

  const [, setCoordinates] = useRecoilState(currentLocation)

  async function initializeNaverMap() {
    const position = await getCurrentPositionFromGeolocationAPI().catch((error) => {
      toast.warn(error)
      return null
    })

    const coords = position?.coords

    if (coords) {
      setCoordinates(coords)
    }

    naverMapRef.current = createNaverMap(
      coords?.latitude ?? 37.3595704,
      coords?.longitude ?? 127.105399
    )
  }

  return (
    <PageHead title=" - 소복" description={description}>
      <NaverMapScript onLoad={initializeNaverMap} />

      <div id="map" ref={naverMapRef} style={{ width: '100vw', height: '100vh' }}></div>
    </PageHead>
  )
}
