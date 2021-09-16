import Image from 'next/image'
import { NewsListQuery, StoreNewsQuery } from 'src/graphql/generated/types-and-hooks'
import { ArrayElement } from 'src/utils/types'
import styled from 'styled-components'

const StoreNewsCardContainer = styled.li`
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`
const StoreName = styled.div`
  font-size: 1.1rem;
  padding: 0 0.5rem;
  font-weight: 500;
`
const StoreInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 500;
  color: #5d5d5d;
  padding: 0 0.5rem 0.2rem 0.5rem;
`
const StoreNewsContent = styled.div`
  border-radius: 10px;
  border: solid 1px #f0f0f0;
  background-color: white;
  padding: 1rem;
`

type Props = {
  news:
    | ArrayElement<StoreNewsQuery['newsListByStore']>
    | ArrayElement<NewsListQuery['newsListByTown']>
}

export default function NewsCard({ news }: Props) {
  const store = (news as ArrayElement<NewsListQuery['newsListByTown']>).store

  return (
    <StoreNewsCardContainer>
      <StoreName>{store.name}</StoreName>
      <StoreInfo>
        <div>{news.category}</div>
        <div>{news.creationTime.slice(0, 10)}</div>
      </StoreInfo>
     
      {news.contents.map((content, i) => (
        <StoreNewsContent key={i}><b>{news.title}</b><br />{content}</StoreNewsContent>
      ))}
    </StoreNewsCardContainer>
  )
}
