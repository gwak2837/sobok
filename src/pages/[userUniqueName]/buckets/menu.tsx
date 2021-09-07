import { ReactElement } from 'react'
import PageHead from 'src/components/PageHead'
import BucketLayout from 'src/layouts/BucketLayout'
import NavigationLayout from 'src/layouts/NavigationLayout'

const description = ''

export default function UserMenuBucketsPage() {
  return (
    <PageHead title=" - 소복" description={description}>
      사용자 메뉴 버킷 목록 페이지. Query string으로 버킷 종류 구별
    </PageHead>
  )
}

UserMenuBucketsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <NavigationLayout>
      <BucketLayout>{page}</BucketLayout>
    </NavigationLayout>
  )
}
