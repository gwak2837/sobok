import { MouseEvent, ReactElement, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { toastApolloError } from 'src/apollo/error'
import NewsCard from 'src/components/NewsCard'
import PageHead from 'src/components/PageHead'
import { useNewsListByTownQuery } from 'src/graphql/generated/types-and-hooks'
import useInfiniteScroll from 'src/hooks/useInfiniteScroll'
import NavigationLayout from 'src/layouts/NavigationLayout'
import NewsLayout from 'src/layouts/NewsLayout'
import { currentTown } from 'src/models/recoil'
import styled from 'styled-components'

const description = ''

const NewsCategoryContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  overflow: scroll hidden;
  background-color: #fcfcfc;
`

const UnActiveStoreCategoryButton = styled.button`
  padding: 0.6rem 1.2rem;
  margin-right: 8px;
  border: none;
  border-radius: 19px;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: #fcfcfc;
  color: #8e8e8e;
  white-space: nowrap;
  cursor: pointer;
`

const ActiveStoreCategoryButton = styled(UnActiveStoreCategoryButton)`
  color: black;
  background-color: #ff9f74;
  border: solid 1px #f0f0f0;
`
const ActiveStoreCategoryButtonStyle = {
  color: 'white',
  backgroundColor: '#ff9f74',
  border: 'solid 1px #f0f0f0',
}

const limit = 4

const CategoryList = ['전체', '신메뉴소식', '오늘의 라인업', '할인/이벤트', '품절', '공지사항']

export default function AllStoreNewsPage() {
  const townName = useRecoilValue(currentTown)

  const [categories, setCategories] = useState('')
  const [clicked, setClicked] = useState(false)

  const { data, loading, fetchMore } = useNewsListByTownQuery({
    onError: toastApolloError,
    notifyOnNetworkStatusChange: true,
    variables: {
      ...(categories && { categories }),
      pagination: { limit },
      ...(townName && { town: townName }),
    },
  })

  const newsList = data?.newsListByTown

  function categoriesHandler(e: MouseEvent) {
    const category = (e.target as HTMLElement).textContent
    console.log(category, clicked)
    setClicked(true)
  }

  const [hasMoreData, setHasMoreData] = useState(true)

  async function fetchMoreNews() {
    if (newsList && newsList.length > 0) {
      const lastNews = newsList[newsList.length - 1]
      const response = await fetchMore({
        variables: {
          pagination: {
            lastId: lastNews.id,
            limit,
          },
        },
      }).catch(() => setHasMoreData(false))

      if (response?.data.newsListByTown?.length !== limit) setHasMoreData(false)
    }
  }

  const infiniteScrollRef = useInfiniteScroll({
    hasMoreData,
    onIntersecting: fetchMoreNews,
  })

  return (
    <PageHead title="전체 매장 소식 - 소복" description={description}>
      <NewsCategoryContainer>
        {CategoryList.map((category) => (
          <UnActiveStoreCategoryButton
            key={category}
            onClick={categoriesHandler}
            onChange={() => setClicked(true)}
            style={clicked ? ActiveStoreCategoryButtonStyle : {}}
          >
            {category}
          </UnActiveStoreCategoryButton>
        ))}
      </NewsCategoryContainer>

      {newsList ? (
        <ul>
          {newsList.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </ul>
      ) : loading ? (
        <div>loading...</div>
      ) : (
        <div>소식이 없어요</div>
      )}

      {!loading && hasMoreData && <div ref={infiniteScrollRef}>무한 스크롤</div>}
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
