import { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { useRecoilState } from 'recoil'
import PageHead from 'src/components/PageHead'
import { currentCoordinates } from 'src/models/recoil'
import NaverMapScript from 'src/scripts/NaverMapScript'
import { createNaverMap } from 'src/utils'
import { getCurrentPositionFromGeolocationAPI } from 'src/utils/web-api'

const description = ''

export default function LocationPage() {
  const [naverMapLoading, setNaverMapLoading] = useState(true)
  const naverMapRef = useRef<any>()

  const [, setCoordinates] = useRecoilState(currentCoordinates)

  async function initializeNaverMap() {
    setNaverMapLoading(false)

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

      {naverMapLoading && <div>loading</div>}

      <div id="map" ref={naverMapRef} style={{ width: '100%', height: '100vh' }} />
    </PageHead>
  )
}
