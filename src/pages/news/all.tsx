import { MouseEvent, ReactElement, useState } from 'react'
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

export default function AllStoreNewsPage() {
  const CategoryList = ['전체', '신메뉴소식', '오늘의 라인업', '할인/이벤트', '품절', '공지사항']

  const townName = useRecoilValue(currentTown)

  const [categories, setCategories] = useState('')
  const [clicked, setClicked] = useState(false)

  const { data, loading } = useNewsListQuery({
    variables: {
      ...(townName && { town: townName }),
      ...(categories && { categories }),
    },
  })

  const newsList = data?.newsListByTown

  function categoriesHandler(e: MouseEvent) {
    const category = (e.target as HTMLElement).textContent
    console.log(category, clicked)
    setClicked(true)
  }

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
        {/* <ActiveStoreCategoryButton onClick={categoriesHandler}>전체</ActiveStoreCategoryButton>
        <UnActiveStoreCategoryButton onClick={categoriesHandler}>
          신메뉴소식s
        </UnActiveStoreCategoryButton>
        <UnActiveStoreCategoryButton onClick={categoriesHandler}>
          오늘의 라인업
        </UnActiveStoreCategoryButton>
        <UnActiveStoreCategoryButton>할인/이벤트</UnActiveStoreCategoryButton>
        <UnActiveStoreCategoryButton>품절</UnActiveStoreCategoryButton>
        <UnActiveStoreCategoryButton>공지사항</UnActiveStoreCategoryButton> */}
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
