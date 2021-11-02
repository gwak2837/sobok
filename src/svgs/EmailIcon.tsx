import styled from 'styled-components'

type Props = {
  colored?: boolean
}

const Rect = styled.rect`
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
`

const Path = styled.path`
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
`

function EmailIcon({ colored }: Props) {
  return (
    <svg viewBox="0 0 19.106 14.111">
      <g transform="translate(-785.477 -134.604)">
        <Rect
          width={18}
          height={13}
          rx={0.52}
          transform="translate(786.031 135.162)"
          stroke={colored ? '#ff9f74' : '#ccc'}
        />
        <Path
          d="M786.194 135.31l6.765 6.005 1.557 1.383a.775.775 0 001.028 0l1.557-1.383 6.766-6.005M792.867 141.387l-6.682 6.621M803.876 148.008l-6.682-6.621"
          stroke={colored ? '#ff9f74' : '#ccc'}
        />
      </g>
    </svg>
  )
}

export default EmailIcon
