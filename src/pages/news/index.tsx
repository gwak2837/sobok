import { ReactNode, ReactElement } from 'react'
import PageHead from 'src/components/PageHead'
import NavigationLayout from 'src/layouts/NavigationLayout'

export function NewsLayout({ children }: { children: ReactNode }) {
  // 탭 동일하게
  return <div>{children}</div>
}

const description = ''

export default function LikedStoreNewsPage() {
  return (
    <PageHead title="찜한 매장 소식 - 소복" description={description}>
      <div>소식 페이지</div>
    </PageHead>
  )
}

LikedStoreNewsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <NavigationLayout>
      <NewsLayout>{page}</NewsLayout>
    </NavigationLayout>
  )
}
