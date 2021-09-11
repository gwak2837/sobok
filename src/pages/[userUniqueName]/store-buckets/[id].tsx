import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import PageHead from 'src/components/PageHead'
import StoreCard from 'src/components/StoreCard'
import { useBucketStoresQuery } from 'src/graphql/generated/types-and-hooks'
import NavigationLayout from 'src/layouts/NavigationLayout'
import { getUserUniqueName } from 'src/utils/commons'

const description = ''

export default function UserBucketPage() {
  const router = useRouter()
  const bucketId = (router.query.id ?? '') as string
  const userUniqueName = getUserUniqueName(router)

  const { data, loading, error } = useBucketStoresQuery({
    skip: !bucketId || !userUniqueName,
    variables: { bucketId, userUniqueName },
  })

  const stores = data?.storesInBucket

  return (
    <PageHead title=" - 소복" description={description}>
      {loading ? (
        <div>loading</div>
      ) : stores ? (
        stores.map((store) => <StoreCard key={store.id} store={store} />)
      ) : (
        '텅...'
      )}
    </PageHead>
  )
}

UserBucketPage.getLayout = function getLayout(page: ReactElement) {
  return <NavigationLayout>{page}</NavigationLayout>
}
