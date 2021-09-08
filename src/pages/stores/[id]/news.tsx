import { ReactElement, useContext } from 'react'
import { useRecoilValue } from 'recoil'
import PageHead from 'src/components/PageHead'
import NewsCard from 'src/components/NewsCard'
import { useStoreNewsQuery } from 'src/graphql/generated/types-and-hooks'
import StoreLayout from 'src/layouts/StoreLayout'
import { store } from 'src/models/recoil'
import styled from 'styled-components'

const description = '매장 소식 페이지'

const NewsCategoryContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  overflow: scroll hidden;
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
`

const UnActiveStoreCategoryButton = styled(ActiveStoreCategoryButton)`
  color: black;
  background-color: white;
  border: solid 1px #f0f0f0;
`
export default function StoreNewsPage() {
  const { id: storeId, name: storeName } = useRecoilValue(store)

  const { data, loading, error } = useStoreNewsQuery({ skip: !storeId, variables: { storeId } })

  const storeNews = data?.newsListByStore

  return (
    <PageHead title={`${storeName} 소식 - 소복`} description={description}>
      <NewsCategoryContainer>
        <ActiveStoreCategoryButton>신메뉴소식</ActiveStoreCategoryButton>
        <UnActiveStoreCategoryButton>오늘의 라인업</UnActiveStoreCategoryButton>
        <UnActiveStoreCategoryButton>할인/이벤트</UnActiveStoreCategoryButton>
        <UnActiveStoreCategoryButton>일상</UnActiveStoreCategoryButton>
        <UnActiveStoreCategoryButton>일상</UnActiveStoreCategoryButton>
      </NewsCategoryContainer>
      {loading
        ? 'loading...'
        : storeNews
        ? storeNews.map((news) => <NewsCard key={news.id} news={news} />)
        : '결과 없음'}
    </PageHead>
  )
}

StoreNewsPage.getLayout = function getLayout(page: ReactElement) {
  return <StoreLayout>{page}</StoreLayout>
}
