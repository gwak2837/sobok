import type { ReactElement, ReactNode } from 'react'
import PageHead from 'src/components/PageHead'
import SearchFormLayout from 'src/layouts/SearchFormLayout'
import styled from 'styled-components'

const description = ''

const HistoryContainer = styled.div`
  padding: 1rem;
  height: 15rem;
`
const PopularContainer = styled.div`
  padding: 1rem;
`

const HorizontalLine = styled.div`
  height: 8px;
  background-color: #eaeaea;
  opacity: 0.58;
`

export default function SearchPage() {
  return (
    <PageHead title=" - 소복" description={description}>
      <HistoryContainer>
        <h3>최근검색어</h3>
      </HistoryContainer>
      <HorizontalLine />
      <PopularContainer>
        <h3>인기검색어</h3>
      </PopularContainer>
    </PageHead>
  )
}

SearchPage.getLayout = function getLayout(page: ReactElement) {
  return <SearchFormLayout>{page}</SearchFormLayout>
}
