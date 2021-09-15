import { useEffect, useRef } from 'react'
import NaverMapDeferScript from 'src/scripts/NaverMapDeferScript'
import PageHead from 'src/components/PageHead'

const description = ''

export default function LocationPage() {
  const mapRef: any = useRef()

  useEffect(() => {
    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 16,
    })

    mapRef.current = map
  })

  return (
    <PageHead title=" - 소복" description={description}>
      <NaverMapDeferScript />
      <div id="map" ref={mapRef} style={{ width: '100%', height: '400px' }}></div>
    </PageHead>
  )
}
