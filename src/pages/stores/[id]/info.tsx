import type { ReactElement } from 'react'
import PageHead from 'src/components/PageHead'
import { StoreLayout } from '.'

const description = ''

export default function StoreInfoPage() {
  return (
    <PageHead title="{매장이름} 정보 - 소복" description={description}>
      {}
    </PageHead>
  )
}

StoreInfoPage.getLayout = function getLayout(page: ReactElement) {
  return <StoreLayout>{page}</StoreLayout>
}
