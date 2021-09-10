import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'
import BucketCard from 'src/components/BucketCard'
import PageHead from 'src/components/PageHead'
import { useStoreBucketsQuery } from 'src/graphql/generated/types-and-hooks'
import BucketLayout from 'src/layouts/BucketLayout'
import NavigationLayout from 'src/layouts/NavigationLayout'
import { currentUser } from 'src/models/recoil'
import { getUserUniqueName } from 'src/utils/commons'

const description = ''

export default function UserStoreBucketsPage() {
  const router = useRouter()
  const userUniqueName = getUserUniqueName(router)

  const { uniqueName: currentUserUniqueName } = useRecoilValue(currentUser)

  const { data, loading, error } = useStoreBucketsQuery({
    skip: !userUniqueName && !currentUserUniqueName,
    variables: { userUniqueName: userUniqueName || currentUserUniqueName },
  })

  const buckets = data?.buckets

  return (
    <PageHead title="매장 버킷 목록 - 소복" description={description}>
      {loading ? (
        <div>loading...</div>
      ) : buckets ? (
        <ul>
          {buckets.map((bucket) => (
            <BucketCard key={bucket.id} bucket={bucket} />
          ))}
        </ul>
      ) : (
        <div>매장 버킷이 텅...</div>
      )}
    </PageHead>
  )
}

UserStoreBucketsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <NavigationLayout>
      <BucketLayout>{page}</BucketLayout>
    </NavigationLayout>
  )
}
