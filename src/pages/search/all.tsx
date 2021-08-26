import type { ReactElement, ReactNode } from 'react'
import PageHead from 'src/components/PageHead'

export function SearchResultLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>검색 결과 레이아웃</div>
      {children}
    </div>
  )
}

const description = ''

export default function AllSearchPage() {
  return (
    <PageHead title="전체 검색 결과 - 소복" description={description}>
      {}
    </PageHead>
  )
}

AllSearchPage.getLayout = function getLayout(page: ReactElement) {
  return <SearchResultLayout>{page}</SearchResultLayout>
}
