import { SOBOK_ACHROMATIC_COLOR } from 'src/models/constants'
import styled from 'styled-components'

const Svg = styled.svg`
  :hover {
    path {
      stroke: #ff9f74;
    }
  }
`

const Path = styled.path`
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;

  transition: stroke 0.5s ease;
`

type Props = {
  color?: string
}

function BackArrowIcon({ color = SOBOK_ACHROMATIC_COLOR }: Props) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 7.87 14.242">
      <Path d="M6.81 1.061L.75 7.121l6.06 6.06" fill="none" stroke={color} />
    </Svg>
  )
}

export default BackArrowIcon
