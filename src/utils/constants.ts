export const MOBILE_MIN_WIDTH = '280px'
export const TABLET_MIN_WIDTH = '560px'
export const DESKTOP_MIN_WIDTH = '1024px'

export const TOP_HEADER_HEIGHT = '3.5rem'
export const HEADER_HEIGHT = '4rem'

export const PRIMARY_BACKGROUND_COLOR = '#FF9F74' // manifest.json 파일의 theme_color 필드랑 일치
export const PRIMARY_TEXT_COLOR = '#FF5E3D'
export const PRIMARY_ACHROMATIC_BACKGROUND_COLOR = '#B5B5B5'

export const SECONDARY_BACKGROUND_COLOR = '#2fccba'
export const SECONDARY_TEXT_COLOR = '#2fccba'
export const SECONDARY_ACHROMATIC_COLOR = '#2fccba'

export const APPLICATION_SHORT_NAME = '소복'
export const APPLICATION_NAME = '소복 (Sobok)'
export const CANONICAL_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_VERCEL_URL
    : 'http://localhost:3000'
