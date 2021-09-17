import Inko from 'inko'
import { NextRouter } from 'next/router'
import { MouseEvent } from 'react'

export function stopPropagation(e: MouseEvent<HTMLElement>) {
  e.stopPropagation()
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const textEncoder = new TextEncoder()

export async function digestMessageWithSHA256(message: string) {
  const msgUint8 = textEncoder.encode(message) // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8) // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)) // convert buffer to byte array
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('') // convert bytes to hex string
  return hashHex
}

export const { ko2en } = new Inko()

export function getUserUniqueName(router: NextRouter) {
  return ((router.query.userUniqueName ?? '') as string).slice(1)
}

const urlPattern = new RegExp(
  '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', // fragment locator
  'i'
)

export function isValidUrl(url: string) {
  return !!urlPattern.test(url)
}

export function distanceBetween(lat1: number, lon1: number, lat2: number, lon2: number) {
  const pi = 0.017453292519943295 // Math.PI / 180
  const cos = Math.cos
  const a =
    0.5 -
    cos((lat2 - lat1) * pi) / 2 +
    (cos(lat1 * pi) * cos(lat2 * pi) * (1 - cos((lon2 - lon1) * pi))) / 2

  return 12742 * Math.asin(Math.sqrt(a)) // 2 * 6371 km
}

export function formatDistance(distance: number) {
  if (!distance) return null

  return distance >= 0.995 ? `${distance.toFixed(1)}km` : `${Math.round(distance * 100) * 10}m`
}

export const naverMapBasicConfiguration = {
  disableKineticPan: false,
  mapDataControl: false,
  minZoom: 11,
  maxZoom: 19,
  zoomControl: true,
  zoom: 16,
}
