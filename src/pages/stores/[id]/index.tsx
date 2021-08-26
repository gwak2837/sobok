import type { ReactElement, ReactNode } from 'react'
import PageHead from 'src/components/PageHead'

export function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>매장 레이아웃</div>
      {children}
    </div>
  )
}

const description = ''

export default function StorePage() {
  return (
    <PageHead title="{매장이름} 메뉴 - 소복" description={description}>
      매장 페이지
    </PageHead>
  )
}

StorePage.getLayout = function getLayout(page: ReactElement) {
  return <StoreLayout>{page}</StoreLayout>
}
