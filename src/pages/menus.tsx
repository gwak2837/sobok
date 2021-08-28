import { ReactElement, useContext } from 'react'
import PageHead from 'src/components/PageHead'
import HomeLayout, { HomeContext } from 'src/layouts/HomeLayout'
import NavigationLayout from 'src/layouts/NavigationLayout'

const description = ''

export default function MenusPage() {
  const { townName } = useContext(HomeContext)

  return (
    <PageHead title={`${townName} 메뉴 - 소복`} description={description}>
      <div>메뉴 페이지</div>
    </PageHead>
  )
}

MenusPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <NavigationLayout>
      <HomeLayout>{page}</HomeLayout>
    </NavigationLayout>
  )
}
