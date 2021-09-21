export function getCurrentPositionFromGeolocationAPI() {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => {
          if (error.code === error.TIMEOUT) {
            reject('GPS 위치 정보를 가져오는데 시간이 오래 걸립니다.')
          } else if (error.code === error.PERMISSION_DENIED) {
            reject('GPS 위치 접근 권한이 거부되었습니다.')
          } else if (error.code === error.POSITION_UNAVAILABLE) {
            reject('GPS 위치 정보를 가져올 수 없습니다.')
          }
        },
        {
          timeout: 10000,
          maximumAge: 1000,
        }
      )
    } else {
      reject('GPS 기능을 사용할 수 없습니다.')
    }
  })
}
