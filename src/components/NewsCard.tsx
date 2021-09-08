import Image from 'next/image'
import { NewsListQuery, StoreNewsQuery } from 'src/graphql/generated/types-and-hooks'
import { ArrayElement } from 'src/utils/types'
import styled from 'styled-components'

const StoreNewsCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`
const StoreNewsCardImage = styled.div`
  border-radius: 50%;
  overflow: hidden;
  margin-right: 5px;
`

const StoreInfoContainer = styled.div``
const StoreName = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`
const StoreInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
  color: #5d5d5d;
  width: 100%;
`

const StoreHeader = styled.div`
  display: flex;
  flex-direction: row;
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

function NewsCard({ news }: Props) {
  const store = (news as ArrayElement<NewsListQuery['newsListByTown']>).store

  return (
    <StoreNewsCardContainer>
      <StoreHeader>
        {store && (
          <>
            <Image
              src={store?.imageUrls?.[0] ?? '/images/default-store-cover.png'}
              alt={store?.name ?? 'store-cover'}
              width="200"
              height="200"
              objectFit="cover"
            />
            <StoreName>디저트정</StoreName>
          </>
        )}

        <StoreInfoContainer>
          <StoreInfo>
            <div>{news.category}</div>
            <div>{news.creationTime.slice(0, 10)}</div>
          </StoreInfo>
        </StoreInfoContainer>
      </StoreHeader>
      {news.contents.map((content, i) => (
        <StoreNewsContent key={i}>{content}</StoreNewsContent>
      ))}
    </StoreNewsCardContainer>
  )
}

export default NewsCard
