import { SOBOK_ACHROMATIC_COLOR } from 'src/utils/constants'
import styles from './SVG.module.css'

type HeartFilledIconProps = {
  filled?: boolean
}

export function HeartFilledIcon({ filled }: HeartFilledIconProps) {
  return (
    <svg
      className={`${styles.svg}`}
      width="100%"
      height="100%"
      viewBox="0 0 21.685 18.896"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.path}
        data-name="\uD328\uC2A4 442"
        d="M10.845 18.496C21.406 12.809 21.323 6.687 21.273 5.952c0-.025.008-.048.008-.074A5.409 5.409 0 0010.84 3.826 5.408 5.408 0 00.401 5.878c0 .03.008.057.009.086-.05.783-.076 6.871 10.435 12.532z"
        fill={`rgba(255,255,255,.${filled ? '9' : '5'})`}
        stroke="#e8e8e8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

type ColoredIconProps = {
  color?: string
}

export function BackArrow({ color = SOBOK_ACHROMATIC_COLOR }: ColoredIconProps) {
  return (
    <svg
      className={`${styles.svg}`}
      width="100%"
      height="100%"
      viewBox="0 0 7.87 14.242"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.path}
        d="M6.81 1.061L.75 7.121l6.06 6.06"
        data-name="120"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  )
}

export function NewsIcon({ color = SOBOK_ACHROMATIC_COLOR }: ColoredIconProps) {
  return (
    <svg
      className={`${styles.svg}`}
      width="100%"
      height="100%"
      viewBox="0 0 18.847 18.928"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="456" data-name="456" transform="translate(-168.131 -200.024)">
        <path
          id="671"
          className={`${styles.path} ${styles.newsPath}`}
          d="M0 0h7.608v7.608H0z"
          data-name="671"
          stroke={color}
          transform="translate(168.781 200.674)"
        />
        <path
          id="672"
          className={`${styles.path} ${styles.newsPath}`}
          d="M0 0h7.608v7.608H0z"
          data-name="672"
          stroke={color}
          transform="translate(178.72 200.674)"
        />
        <path
          id="673"
          className={`${styles.path} ${styles.newsPath}`}
          d="M0 0h7.608v7.608H0z"
          data-name="673"
          stroke={color}
          transform="translate(168.781 210.694)"
        />
        <path
          id="674"
          className={`${styles.path} ${styles.newsPath}`}
          d="M0 0h7.608v7.608H0z"
          data-name="674"
          stroke={color}
          transform="translate(178.72 210.694)"
        />
      </g>
    </svg>
  )
}

export function TrendIcon({ color = SOBOK_ACHROMATIC_COLOR }: ColoredIconProps) {
  return (
    <svg
      className={`${styles.svg}`}
      width="100%"
      height="100%"
      viewBox="0 0 18.455 20.859"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="454" data-name="454" transform="translate(-108.165 -199.597)">
        <path
          id="670"
          className={`${styles.path} ${styles.trendPath}`}
          d="M0 0h17.055v19.459H0z"
          data-name="670"
          stroke={color}
          transform="translate(108.865 200.297)"
        />
        <path
          id="38"
          className={`${styles.path} ${styles.trendPath}`}
          d="M0 0h10.073"
          data-name="38"
          stroke={color}
          transform="translate(112.356 205.872)"
        />
        <path
          id="39"
          className={`${styles.path} ${styles.trendPath}`}
          d="M0 0h10.073"
          data-name="39"
          stroke={color}
          transform="translate(112.356 210.069)"
        />
        <path
          id="40"
          className={`${styles.path} ${styles.trendPath}`}
          d="M0 0h10.073"
          data-name="40"
          stroke={color}
          transform="translate(112.356 214.266)"
        />
      </g>
    </svg>
  )
}

export function HomeIcon({ color = SOBOK_ACHROMATIC_COLOR }: ColoredIconProps) {
  return (
    <svg
      className={`${styles.svg}`}
      width="100%"
      height="100%"
      viewBox="0 0 25.08 22.767"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g data-name="452" transform="translate(-29.313 -199.701)">
        <g data-name="444">
          <path
            className={styles.path}
            data-name="168"
            d="M41.853 200.351l-11.89 11.592h3.6v9.875h16.581v-9.875h3.6z"
            stroke={color}
            strokeLinejoin="round"
            strokeWidth={1.3}
            fill="none"
          />
        </g>
        <rect
          className={styles.path}
          data-name="669"
          width={6.316}
          height={6.316}
          rx={0.843}
          transform="translate(38.695 212.287)"
          fill="#fff"
          stroke={color}
          strokeLinejoin="round"
          strokeWidth={1.3}
        />
      </g>
    </svg>
  )
}

export function HeartIcon({ color = SOBOK_ACHROMATIC_COLOR }: ColoredIconProps) {
  return (
    <svg
      className={`${styles.svg}`}
      width="100%"
      height="100%"
      viewBox="0 0 19.64 17.541"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.path}
        d="M9.822 16.841c9.223-5.073 9.151-10.533 9.107-11.189 0-.022.007-.043.007-.066A4.812 4.812 0 0014.202.7a4.735 4.735 0 00-4.384 3.056A4.733 4.733 0 005.435.7 4.812 4.812 0 00.701 5.586c0 .027.007.051.008.077-.044.7-.066 6.129 9.113 11.178z"
        data-name="173"
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth={1.4}
      />
    </svg>
  )
}

export function PersonIcon({ color = SOBOK_ACHROMATIC_COLOR }: ColoredIconProps) {
  return (
    <svg
      className={`${styles.svg}`}
      width="100%"
      height="100%"
      viewBox="0 0 17.747 20.859"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="455" data-name="455" transform="translate(-57.098 -199.597)">
        <circle
          id="325"
          className={`${styles.path} ${styles.personPath}`}
          cx={4.761}
          cy={4.761}
          data-name="325"
          r={4.761}
          stroke={color}
          transform="translate(61.21 200.297)"
        />
        <path
          id="172"
          className={`${styles.path} ${styles.personPath}`}
          d="M74.145 219.756H57.8v-.556c0-3.99 3.659-7.225 8.173-7.225s8.174 3.235 8.174 7.225z"
          data-name="172"
          stroke={color}
        />
      </g>
    </svg>
  )
}
