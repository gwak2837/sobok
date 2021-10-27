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

const Circle = styled.circle`
  fill: #fff;
  stroke-linejoin: round;
  stroke-width: 1.3px;

  transition: stroke 0.5s ease;
`

const Path = styled.path`
  fill: #fff;
  stroke-linejoin: round;
  stroke-width: 1.3px;

  transition: stroke 0.5s ease;
`

type Props = {
  color?: string
}

function PersonIcon({ color = SOBOK_ACHROMATIC_COLOR }: Props) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 17.747 20.859">
      <g transform="translate(-57.098 -199.597)">
        <Circle
          cx={4.761}
          cy={4.761}
          r={4.761}
          stroke={color}
          transform="translate(61.21 200.297)"
        />
        <Path
          d="M74.145 219.756H57.8v-.556c0-3.99 3.659-7.225 8.173-7.225s8.174 3.235 8.174 7.225z"
          stroke={color}
        />
      </g>
    </Svg>
  )
}

export default PersonIcon
