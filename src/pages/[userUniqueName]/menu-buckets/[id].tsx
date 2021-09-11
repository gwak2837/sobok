import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import PageHead from 'src/components/PageHead'
import NavigationLayout from 'src/layouts/NavigationLayout'

const description = ''

export default function UserBucketPage() {
  const router = useRouter()

  const bucketId = (router.query.id ?? '') as string

  return (
    <PageHead title=" - 소복" description={description}>
      사용자 버킷 상세 페이지jkkjk
    </PageHead>
  )
}

UserBucketPage.getLayout = function getLayout(page: ReactElement) {
  return <NavigationLayout>{page}</NavigationLayout>
}
