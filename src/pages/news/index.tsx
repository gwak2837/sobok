import { ReactElement, useState } from 'react'
import { useRecoilValue } from 'recoil'
import NewsCard from 'src/components/NewsCard'
import PageHead from 'src/components/PageHead'
import { NewsOptions, useNewsListQuery } from 'src/graphql/generated/types-and-hooks'
import NavigationLayout from 'src/layouts/NavigationLayout'
import NewsLayout from 'src/layouts/NewsLayout'
import { currentTown } from 'src/models/recoil'

const description = ''

export default function LikedStoreNewsPage() {
  const townName = useRecoilValue(currentTown)

  const [categories, setCategories] = useState('')

  const { data, loading } = useNewsListQuery({
    variables: {
      ...(townName && { town: townName }),
      option: NewsOptions.LikedStore,
      ...(categories && { categories }),
    },
  })

  const newsList = data?.newsListByTown

  return (
    <PageHead title="찜한 매장 소식 - 소복" description={description}>
      <div>소식 페이지</div>
      {loading
        ? 'loading...'
        : newsList
        ? newsList.map((news) => <NewsCard key={news.id} news={news} />)
        : '결과 없음'}
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
