import type { ReactElement } from 'react'
import PageHead from 'src/components/PageHead'
import { SearchResultLayout } from './all'
import SearchFormLayout from 'src/layouts/SearchFormLayout'

const description = ''

export default function MenusSearchPage() {
  return (
    <PageHead title="메뉴 검색 결과 - 소복" description={description}>
      {}
    </PageHead>
  )
}

MenusSearchPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <SearchFormLayout>
      <SearchResultLayout>{page}</SearchResultLayout>
    </SearchFormLayout>
  )
}
