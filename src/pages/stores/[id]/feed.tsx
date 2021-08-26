import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import PageHead from 'src/components/PageHead'
import StoreFeedCard from 'src/components/StoreFeedCard'
import { useStoreFeedQuery } from 'src/graphql/generated/types-and-hooks'
import { StoreLayout } from '.'

const description = ''

export default function StoreFeedPage() {
  const router = useRouter()

  const storeId = (router.query.id ?? '') as string

  const { data, loading, error } = useStoreFeedQuery({ variables: { storeId } })

  const storeName = data?.store?.name ?? '매장'

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
