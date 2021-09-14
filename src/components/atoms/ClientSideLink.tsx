import Link from 'next/link'
import { CSSProperties, ReactNode } from 'react'
import { stopPropagation } from 'src/utils/commons'

type Props = {
  children: ReactNode
  href: string
  className?: string
}

function ClientSideLink({ children, href, className }: Props) {
  return (
    <Link href={href}>
      <a className={className} href={href} onClick={stopPropagation}>
        {children}
      </a>
    </Link>
  )
}

export default ClientSideLink
