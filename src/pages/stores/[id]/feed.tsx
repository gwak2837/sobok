import { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'
import FeedCard from 'src/components/FeedCard'
import PageHead from 'src/components/PageHead'
import { useStoreFeedQuery } from 'src/graphql/generated/types-and-hooks'
import StoreLayout from 'src/layouts/StoreLayout'
import { currentStore } from 'src/models/recoil'
import styled from 'styled-components'

const description = ''

const GridContainerUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-auto-rows: 210px; */
  grid-auto-rows: minmax(200px, auto);
  gap: 1rem;
  padding: 1rem;
`

export default function StoreFeedPage() {
  const { id: storeId, name: storeName } = useRecoilValue(currentStore)

  const { data, loading, error } = useStoreFeedQuery({ variables: { storeId } })

  const storeFeed = data?.feedListByStore

  return (
    <PageHead title={`${storeName} 피드 - 소복`} description={description}>
      {loading ? (
        'loading...'
      ) : storeFeed ? (
        <GridContainerUl>
          {storeFeed.map((feed) => (
            <FeedCard key={feed.id} feed={feed} />
          ))}
        </GridContainerUl>
      ) : (
        '결과 없음'
      )}
    </PageHead>
  )
}

StoreFeedPage.getLayout = function getLayout(page: ReactElement) {
  return <StoreLayout>{page}</StoreLayout>
}
