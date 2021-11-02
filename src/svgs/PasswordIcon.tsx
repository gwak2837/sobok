import styled, { css } from 'styled-components'

type Props = {
  colored?: boolean
}

const style = css`
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.1px;
`

const Rect = styled.rect`
  ${style}
`

const Path = styled.path`
  ${style}
`

const Circle = styled.circle`
  ${style}
`

function PasswordIcon({ colored }: Props) {
  return (
    <svg viewBox="0 0 14 19">
      <g transform="translate(-810.784 -128.935)">
        <Rect
          width={13}
          height={10.45}
          rx={0.426}
          stroke={colored ? '#ff9f74' : '#ccc'}
          transform="translate(811.284 136.985)"
        />
        <Path
          d="M812.811 136.435v-2.305a4.856 4.856 0 015-4.695 5.163 5.163 0 013.537 1.374 4.55 4.55 0 011.463 3.321v2.305"
          stroke={colored ? '#ff9f74' : '#ccc'}
        />
        <Circle
          cx={1.554}
          cy={1.554}
          r={1.554}
          stroke={colored ? '#ff9f74' : '#ccc'}
          transform="translate(816.23 139.938)"
        />
        <Path d="M817.784 144.791v-1.263" stroke={colored ? '#ff9f74' : '#ccc'} />
      </g>
    </svg>
  )
}

export default PasswordIcon
