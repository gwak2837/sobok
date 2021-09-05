import { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'
import PageHead from 'src/components/PageHead'
import StoreFeedCard from 'src/components/StoreFeedCard'
import { useStoreFeedQuery } from 'src/graphql/generated/types-and-hooks'
import StoreLayout from 'src/layouts/StoreLayout'
import { store } from 'src/models/recoil'

const description = ''

export default function StoreFeedPage() {
  const { id: storeId, name: storeName } = useRecoilValue(store)

  const { data, loading, error } = useStoreFeedQuery({ variables: { storeId } })

  const storeFeed = data?.feedListByStore

  return (
    <PageHead title={`${storeName} 피드 - 소복`} description={description}>
      {loading || !storeFeed
        ? 'loading...'
        : storeFeed.map((feed) => <StoreFeedCard key={feed.id} storeFeed={feed} />)}
    </PageHead>
  )
}

StoreFeedPage.getLayout = function getLayout(page: ReactElement) {
  return <StoreLayout>{page}</StoreLayout>
}
