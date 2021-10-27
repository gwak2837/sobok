import { SOBOK_ACHROMATIC_COLOR } from 'src/utils/constants'
import styled from 'styled-components'

const Svg = styled.svg`
  :hover {
    path,
    rect {
      stroke: #ff9f74;
    }
  }
`

const Path = styled.path`
  fill: #fff;
  stroke-linejoin: round;
  stroke-width: 1.4px;

  transition: stroke 0.5s ease;
`

const Rect = styled.rect`
  fill: #fff;
  stroke-linejoin: round;
  stroke-width: 1.3px;

  transition: stroke 0.5s ease;
`

type Props = {
  color?: string
}

function HomeIcon({ color = SOBOK_ACHROMATIC_COLOR }: Props) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 25.08 22.767">
      <g transform="translate(-29.313 -199.701)">
        <g data-name="444">
          <Path d="M41.853 200.351l-11.89 11.592h3.6v9.875h16.581v-9.875h3.6z" stroke={color} />
        </g>
        <Rect
          width={6.316}
          height={6.316}
          rx={0.843}
          transform="translate(38.695 212.287)"
          stroke={color}
        />
      </g>
    </Svg>
  )
}

export default HomeIcon
