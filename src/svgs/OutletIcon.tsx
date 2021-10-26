type Props = {
  selected?: boolean
}

function OutletIcon({ selected }: Props) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 63 62">
      <g transform="translate(-99 -30)">
        <g
          transform="translate(99 30)"
          stroke="#ddd"
          strokeWidth={1.3}
          fill={selected ? '#eee' : '#fff'}
        >
          <rect width={63} height={62} rx={16} stroke="none" />
          <rect x={0.65} y={0.65} width={61.7} height={60.7} rx={15.35} fill="none" />
        </g>
        <path
          d="M612.8 63.9c3.624-.172 14.51-1.076 26.034-2.51a.94.94 0 011.105.88V95.1a.908.908 0 01-.845.888c-3.581.344-17.659 1.711-25.173 2.692a.926.926 0 01-1.072-.875c-.034-4.071-.207-19.611-.942-32.974a.9.9 0 01.893-.931z"
          transform="translate(-496.306 -17.842)"
          fill="#dedede"
        />
        <g transform="translate(127.723 43.538)" opacity={0.28}>
          <path
            fill="#fff"
            d="M636.294 61.389c-2.807.349-5.572.666-8.207.95l-6.593 35.169c6.342-.679 12.8-1.3 15.059-1.522a.908.908 0 00.846-.888V62.269a.94.94 0 00-1.105-.88z"
            transform="translate(-621.494 -61.38)"
          />
        </g>
        <g transform="translate(122.705 55.082)">
          <path
            fill="#fff"
            d="M626.925 70.9a7.061 7.061 0 00-9.4 6.671 6.987 6.987 0 003.146 5.74 7.288 7.288 0 007.381.417 6.093 6.093 0 003.272-5.2s.497-5.895-4.399-7.628z"
            transform="translate(-617.525 -70.51)"
          />
          <path
            d="M626.025 72a5.447 5.447 0 00-7.251 5.147 5.39 5.39 0 002.426 4.423 5.623 5.623 0 005.7.321 4.7 4.7 0 002.524-4.009s.376-4.552-3.399-5.882z"
            transform="translate(-617.195 -70.197)"
            fill="#c3c3c3"
          />
          <g transform="translate(4.808 5.563)">
            <path
              fill="#7c7c7c"
              d="M622.2 77.984a.547.547 0 01-.549-.446l-.315-2.029a.527.527 0 01.469-.59.549.549 0 01.63.44l.316 2.029a.529.529 0 01-.47.592.566.566 0 01-.081.004z"
              transform="translate(-621.327 -74.91)"
            />
          </g>
          <g transform="translate(7.581 5.364)">
            <path
              fill="#7c7c7c"
              d="M624.391 77.824a.544.544 0 01-.549-.445l-.316-2.029a.527.527 0 01.469-.59.552.552 0 01.631.44l.315 2.029a.527.527 0 01-.469.59.592.592 0 01-.081.005z"
              transform="translate(-623.521 -74.753)"
            />
          </g>
        </g>
        <path
          d="M612.788 63.938c3.624-.173 14.509-1.076 26.034-2.511a.941.941 0 011.1.881v32.827"
          transform="translate(-496.072 -17.832)"
          stroke="#b6bcbc"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  )
}

export default OutletIcon
