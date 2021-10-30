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
  stroke-width: .8px;

  transition: stroke 0.5s ease;
`

type Props = {
  colored?: boolean
  loading?: boolean
}

function HeartFilledIcon({ colored, loading }: Props) {
  const fillingColor = loading
    ? 'rgba(255, 255, 255, .9)'
    : colored
    ? 'rgba(255, 159, 116, .9)'
    : 'rgba(255, 255, 255, .5)'

  return (
    <Svg width="100%" height="100%" viewBox="0 0 15.813 13.8">
      <Path
        d="M89.149 214.415c7.587-4.086 7.528-8.483 7.491-9.012 0-.018.006-.035.006-.053a3.886 3.886 0 0 0-7.5-1.474 3.885 3.885 0 0 0-7.5 1.474c0 .022.006.041.007.062-.036.562-.054 4.936 7.5 9z"
        fill={fillingColor}
        stroke={colored ? '#ff9f74' : '#e8e8e8'}
        transform="translate(-81.241 -201.015)"
      />
    </Svg>
  )
}

export default HeartFilledIcon
