import { ReactElement, useState } from 'react'
import { useRecoilValue } from 'recoil'
import NewsCard from 'src/components/NewsCard'
import PageHead from 'src/components/PageHead'
import { useNewsListQuery } from 'src/graphql/generated/types-and-hooks'
import NavigationLayout from 'src/layouts/NavigationLayout'
import NewsLayout from 'src/layouts/NewsLayout'
import { currentTown } from 'src/models/recoil'

const description = ''

export default function AllStoreNewsPage() {
  const townName = useRecoilValue(currentTown)

  const [categories, setCategories] = useState('')

  const { data, loading } = useNewsListQuery({
    variables: {
      ...(townName && { town: townName }),
      ...(categories && { categories }),
    },
  })

  const newsList = data?.newsListByTown

  return (
    <PageHead title="전체 매장 소식 - 소복" description={description}>
      {loading
        ? 'loading...'
        : newsList
        ? newsList.map((news) => <NewsCard key={news.id} news={news} />)
        : '결과 없음'}
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
