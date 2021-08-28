import { ReactElement } from 'react'
import PageHead from 'src/components/PageHead'
import NavigationLayout from 'src/layouts/NavigationLayout'

const description = ''

export default function LikedStoreNewsPage() {
  return (
    <PageHead title="찜한 매장 소식 - 소복" description={description}>
      <div>소식 페이지</div>
    </PageHead>
  )
}

LikedStoreNewsPage.getLayout = function getLayout(page: ReactElement) {
  return <NavigationLayout>{page}</NavigationLayout>
}
