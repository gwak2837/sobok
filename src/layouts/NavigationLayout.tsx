import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function NavigationLayout({ children }: Props) {
  return <>{children}</>
}

export default NavigationLayout
