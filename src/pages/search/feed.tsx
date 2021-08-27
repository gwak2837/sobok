import type { ReactElement } from 'react'
import PageHead from 'src/components/PageHead'
import { SearchResultLayout } from './all'

const description = ''

export default function FeedSearchPage() {
  return (
    <PageHead title="피드 검색 결과 - 소복" description={description}>
      {}
    </PageHead>
  )
}

FeedSearchPage.getLayout = function getLayout(page: ReactElement) {
  return <SearchResultLayout>{page}</SearchResultLayout>
}
