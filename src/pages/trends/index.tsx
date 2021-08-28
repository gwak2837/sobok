import { ReactElement } from 'react'
import PageHead from 'src/components/PageHead'
import NavigationLayout from 'src/layouts/NavigationLayout'

const description = ''

export default function TrendsPage() {
  return (
    <PageHead title=" - 소복" description={description}>
      <div>트렌드 페이지</div>
    </PageHead>
  )
}

TrendsPage.getLayout = function getLayout(page: ReactElement) {
  return <NavigationLayout>{page}</NavigationLayout>
}
