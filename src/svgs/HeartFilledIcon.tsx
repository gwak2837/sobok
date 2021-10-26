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
  stroke-linejoin: round;
  stroke-width: 1.3px;

  transition: stroke 0.5s ease;
`

type Props = {
  filled?: boolean
}

function HeartFilledIcon({ filled }: Props) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 21.685 18.896">
      <Path
        d="M10.845 18.496C21.406 12.809 21.323 6.687 21.273 5.952c0-.025.008-.048.008-.074A5.409 5.409 0 0010.84 3.826 5.408 5.408 0 00.401 5.878c0 .03.008.057.009.086-.05.783-.076 6.871 10.435 12.532z"
        fill={`rgba(255,255,255,.${filled ? '9' : '5'})`}
        stroke="#e8e8e8"
      />
    </Svg>
  )
}

export default HeartFilledIcon
