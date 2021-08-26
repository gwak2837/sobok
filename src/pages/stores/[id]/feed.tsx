import type { ReactElement } from 'react'
import PageHead from 'src/components/PageHead'
import { StoreLayout } from '.'

const description = ''

export default function StoreFeedPage() {
  return (
    <PageHead title="{매장이름} 피드 - 소복" description={description}>
      {}
    </PageHead>
  )
}

StoreFeedPage.getLayout = function getLayout(page: ReactElement) {
  return <StoreLayout>{page}</StoreLayout>
}
