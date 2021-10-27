import { SOBOK_ACHROMATIC_COLOR } from 'src/utils/constants'
import styled from 'styled-components'

const Svg = styled.svg`
  :hover {
    circle,
    path {
      stroke: #ff9f74;
    }
  }
`

const Path = styled.path`
  fill: none;
  stroke-linejoin: round;
  stroke-width: 1.4px;

  transition: stroke 0.5s ease;
`

type Props = {
  color?: string
}

function HeartIcon({ color = SOBOK_ACHROMATIC_COLOR }: Props) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 19.64 17.541">
      <Path
        d="M9.822 16.841c9.223-5.073 9.151-10.533 9.107-11.189 0-.022.007-.043.007-.066A4.812 4.812 0 0014.202.7a4.735 4.735 0 00-4.384 3.056A4.733 4.733 0 005.435.7 4.812 4.812 0 00.701 5.586c0 .027.007.051.008.077-.044.7-.066 6.129 9.113 11.178z"
        fill="none"
        stroke={color}
      />
    </Svg>
  )
}

export default HeartIcon
