import { ReactElement, useContext } from 'react'
import PageHead from 'src/components/PageHead'
import HomeLayout, { HomeContext } from 'src/layouts/HomeLayout'
import NavigationLayout from 'src/layouts/NavigationLayout'

const description = ''

export default function FeedPage() {
  const { townName } = useContext(HomeContext)

  return (
    <PageHead title={`${townName} 피드 - 소복`} description={description}>
      <div>피드 페이지</div>
    </PageHead>
  )
}

FeedPage.getLayout = function getLayout(page: ReactElement) {
  return <NavigationLayout>{page}</NavigationLayout>
}
