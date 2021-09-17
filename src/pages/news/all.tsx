import { ReactElement, useState, MouseEvent } from 'react'
import { useRecoilValue } from 'recoil'
import NewsCard from 'src/components/NewsCard'
import PageHead from 'src/components/PageHead'
import { useNewsListQuery } from 'src/graphql/generated/types-and-hooks'
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

const ActiveStoreCategoryButton = styled.button`
  padding: 0.6rem 1.2rem;
  margin-right: 8px;
  border: none;
  border-radius: 19px;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: #ff9f74;
  color: white;
  white-space: nowrap;
  cursor: pointer;
`

const UnActiveStoreCategoryButton = styled(ActiveStoreCategoryButton)`
  color: black;
  background-color: white;
  border: solid 1px #f0f0f0;
`

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

  function categoriesHandler(e: MouseEvent) {
    const category = (e.target as HTMLElement).textContent
    console.log(category)
  }

  return (
    <PageHead title="전체 매장 소식 - 소복" description={description}>
      <NewsCategoryContainer>
        <ActiveStoreCategoryButton onClick={categoriesHandler}>전체</ActiveStoreCategoryButton>
        <UnActiveStoreCategoryButton onClick={categoriesHandler}>
          신메뉴소식
        </UnActiveStoreCategoryButton>
        <UnActiveStoreCategoryButton onClick={categoriesHandler}>
          오늘의 라인업
        </UnActiveStoreCategoryButton>
        <UnActiveStoreCategoryButton>할인/이벤트</UnActiveStoreCategoryButton>
        <UnActiveStoreCategoryButton>품절</UnActiveStoreCategoryButton>
        <UnActiveStoreCategoryButton>공지사항</UnActiveStoreCategoryButton>
      </NewsCategoryContainer>
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
