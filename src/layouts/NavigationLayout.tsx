import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function NavigationLayout({ children }: Props) {
  return <>{children}</>
}
