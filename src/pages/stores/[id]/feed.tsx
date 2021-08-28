import { ReactElement, useContext } from 'react'
import PageHead from 'src/components/PageHead'
import StoreFeedCard from 'src/components/StoreFeedCard'
import { useStoreFeedQuery } from 'src/graphql/generated/types-and-hooks'
import { StoreContext, StoreLayout } from '.'

const description = ''

export default function StoreFeedPage() {
  const storeContext = useContext(StoreContext)
  const storeId = storeContext.id
  const storeName = storeContext.name

  const { data, loading, error } = useStoreFeedQuery({ variables: { storeId } })

  return (
    <PageHead title={`${storeName} 피드 - 소복`} description={description}>
      {loading && 'loading...'}
      {data?.feed2?.map((feed) => (
        <StoreFeedCard key={feed.id} storeFeed={feed} />
      ))}
    </PageHead>
  )
}

StoreFeedPage.getLayout = function getLayout(page: ReactElement) {
  return <StoreLayout>{page}</StoreLayout>
}
