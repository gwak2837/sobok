import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import PageHead from 'src/components/PageHead'
import MenuCard from 'src/components/MenuCard'
import { useBucketMenusQuery } from 'src/graphql/generated/types-and-hooks'
import NavigationLayout from 'src/layouts/NavigationLayout'
import { getUserUniqueName } from 'src/utils/commons'

const description = ''

export default function UserBucketPage() {
  const router = useRouter()
  const bucketId = (router.query.id ?? '') as string
  const userUniqueName = getUserUniqueName(router)

  console.log(bucketId, userUniqueName)

  const { data, loading, error } = useBucketMenusQuery({
    skip: !bucketId || !userUniqueName,
    variables: { bucketId, userUniqueName },
  })

  const menus = data?.menusInBucket

  return (
    <PageHead title=" - 소복" description={description}>
      {loading ? (
        <div>loading</div>
      ) : menus ? (
        menus.map((menu) => <MenuCard key={menu.id} menu={menu} />)
      ) : (
        '텅...'
      )}
    </PageHead>
  )
}

UserBucketPage.getLayout = function getLayout(page: ReactElement) {
  return <NavigationLayout>{page}</NavigationLayout>
}
