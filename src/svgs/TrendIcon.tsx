import { SOBOK_ACHROMATIC_COLOR } from 'src/utils/constants'
import styled from 'styled-components'

const Svg = styled.svg`
  :hover {
    path {
      stroke: #ff9f74;
    }
  }
`

const Path = styled.path`
  fill: #fff;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.4px;

  transition: stroke 0.5s ease;
`

type Props = {
  color?: string
}

function TrendIcon({ color = SOBOK_ACHROMATIC_COLOR }: Props) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 18.455 20.859">
      <g transform="translate(-108.165 -199.597)">
        <Path d="M0 0h17.055v19.459H0z" stroke={color} transform="translate(108.865 200.297)" />
        <Path d="M0 0h10.073" stroke={color} transform="translate(112.356 205.872)" />
        <Path d="M0 0h10.073" stroke={color} transform="translate(112.356 210.069)" />
        <Path d="M0 0h10.073" stroke={color} transform="translate(112.356 214.266)" />
      </g>
    </Svg>
  )
}

export default TrendIcon
