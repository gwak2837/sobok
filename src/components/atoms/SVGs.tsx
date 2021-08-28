import { SOBOK_ACHROMATIC_COLOR } from 'src/models/constants'

type Props = {
  color?: string
}

export function Trend({ color = SOBOK_ACHROMATIC_COLOR }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18.455" height="20.859">
      <defs>
        <style>{`.prefix__cls-1{fill:none;stroke:${color};stroke-linecap:round;stroke-linejoin:round;stroke-width:1.4px}`}</style>
      </defs>
      <g id="prefix__그룹_454" data-name="그룹 454" transform="translate(-108.165 -199.597)">
        <path
          id="prefix__사각형_670"
          data-name="사각형 670"
          className="prefix__cls-1"
          transform="translate(108.865 200.297)"
          d="M0 0h17.055v19.459H0z"
        />
        <path
          id="prefix__선_38"
          data-name="선 38"
          className="prefix__cls-1"
          transform="translate(112.356 205.872)"
          d="M0 0h10.073"
        />
        <path
          id="prefix__선_39"
          data-name="선 39"
          className="prefix__cls-1"
          transform="translate(112.356 210.069)"
          d="M0 0h10.073"
        />
        <path
          id="prefix__선_40"
          data-name="선 40"
          className="prefix__cls-1"
          transform="translate(112.356 214.266)"
          d="M0 0h10.073"
        />
      </g>
    </svg>
  )
}

export function News({ color = SOBOK_ACHROMATIC_COLOR }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18.847" height="18.928">
      <defs>
        <style>{`.prefix__cls-1{fill:none;stroke:${color};stroke-linecap:round;stroke-linejoin:round;stroke-width:1.3px}`}</style>
      </defs>
      <g id="prefix__그룹_456" data-name="그룹 456" transform="translate(-168.131 -200.024)">
        <path
          id="prefix__사각형_671"
          data-name="사각형 671"
          className="prefix__cls-1"
          transform="translate(168.781 200.674)"
          d="M0 0h7.608v7.608H0z"
        />
        <path
          id="prefix__사각형_672"
          data-name="사각형 672"
          className="prefix__cls-1"
          transform="translate(178.72 200.674)"
          d="M0 0h7.608v7.608H0z"
        />
        <path
          id="prefix__사각형_673"
          data-name="사각형 673"
          className="prefix__cls-1"
          transform="translate(168.781 210.694)"
          d="M0 0h7.608v7.608H0z"
        />
        <path
          id="prefix__사각형_674"
          data-name="사각형 674"
          className="prefix__cls-1"
          transform="translate(178.72 210.694)"
          d="M0 0h7.608v7.608H0z"
        />
      </g>
    </svg>
  )
}
