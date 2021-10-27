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
  stroke-linejoin: round;
  stroke-width: 1.3px;

  transition: stroke 0.5s ease;
`

type Props = {
  color?: string
}

function NewsIcon({ color = SOBOK_ACHROMATIC_COLOR }: Props) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 18.847 18.928">
      <g transform="translate(-168.131 -200.024)">
        <Path d="M0 0h7.608v7.608H0z" stroke={color} transform="translate(168.781 200.674)" />
        <Path d="M0 0h7.608v7.608H0z" stroke={color} transform="translate(178.72 200.674)" />
        <Path d="M0 0h7.608v7.608H0z" stroke={color} transform="translate(168.781 210.694)" />
        <Path d="M0 0h7.608v7.608H0z" stroke={color} transform="translate(178.72 210.694)" />
      </g>
    </Svg>
  )
}

export default NewsIcon
