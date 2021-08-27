import type { ReactElement } from 'react'
import PageHead from 'src/components/PageHead'
import { StoreLayout } from '.'

const description = ''

export default function StoreNewsPage() {
  return (
    <PageHead title="{매장이름} 소식 - 소복" description={description}>
      {}
    </PageHead>
  )
}

StoreNewsPage.getLayout = function getLayout(page: ReactElement) {
  return <StoreLayout>{page}</StoreLayout>
}
