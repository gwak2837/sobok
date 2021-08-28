import { ReactElement } from 'react'
import PageHead from 'src/components/PageHead'
import NavigationLayout from 'src/layouts/NavigationLayout'
import { NewsLayout } from '.'

const description = ''

export default function AllStoreNewsPage() {
  return (
    <PageHead title="전체 매장 소식 - 소복" description={description}>
      {}
    </PageHead>
  )
}

AllStoreNewsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <NavigationLayout>
      <NewsLayout>{page}</NewsLayout>
    </NavigationLayout>
  )
}
