import { ReactElement } from 'react'
import PageHead from 'src/components/PageHead'
import NavigationLayout from 'src/layouts/NavigationLayout'

const description = ''

export default function UserBucketPage() {
  return (
    <PageHead title=" - 소복" description={description}>
      사용자 버킷 상세 페이지
    </PageHead>
  )
}

UserBucketPage.getLayout = function getLayout(page: ReactElement) {
  return <NavigationLayout>{page}</NavigationLayout>
}
