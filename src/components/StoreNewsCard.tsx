import Image from 'next/image'
import { StoreNewsQuery } from 'src/graphql/generated/types-and-hooks'
import { ArrayElement } from 'src/utils/types'
import styled from 'styled-components'

type Props = {
  storeNews: ArrayElement<StoreNewsQuery['newsListByStore']>
}

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

const StoreInfoContainer = styled.div`

`
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
function StoreNewsCard({ storeNews }: Props) {
  return (
    <StoreNewsCardContainer>
      <StoreHeader>
        <StoreNewsCardImage>
          {storeNews.imageUrls && (
            <Image
              src={storeNews.imageUrls[0]}
              alt="store-menu"
              width="30"
              height="30"
              objectFit="cover"
            />
          )}
        </StoreNewsCardImage>
        <StoreInfoContainer>
          <StoreName>디저트정</StoreName>
          <StoreInfo>
            <div>{storeNews.category}</div>
            <div>{storeNews.creationTime.slice(0, 10)}</div>
          </StoreInfo>
        </StoreInfoContainer>
      </StoreHeader>
      {storeNews.contents.map((content, i) => (
        <StoreNewsContent key={i}>{content}</StoreNewsContent>
      ))}
    </StoreNewsCardContainer>
  )
}

export default StoreNewsCard
