import Image from 'next/image'
import styled from 'styled-components'

const StoreContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(calc(200px + 10vw), auto);
  padding: 1rem;
  gap: 0.8rem;
`

const StoreCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
  overflow: hidden;
  background-color: #c4c4c4;
`
const CardImage = styled.div`
  position: relative;
  height: 7.5em;
  padding-bottom: 15.63%;
  border-radius: 0.4rem;
  overflow: hidden;
  background-color: #cee7f5;
`

const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
  background-color: #eaf7e7;
`
const CardCategory = styled.div`
  flex-wrap: wrap;
  padding: 0.2rem;
`
const CategoryButton = styled.button`
  padding: 0.2rem;
  text-align: center;
  color: white;
  font-size: 0.9rem;
  border-radius: 3rem;
  background-color: #ff9f74;
`

const CardTags = styled.div`
  padding: 0.2rem;
  background-color: #eaf7e7;
`
const Tag = styled.span`
  flex-wrap: nowrap;
  color: grey;
  font-size: 0.8rem;
`
function StorePlaceCard() {
  return (
    <StoreContainer>
      <StoreCard>
        <CardImage>
          <Image src="/images/stores/store1@3x.webp" alt="흑석커피" layout="fill" />
        </CardImage>
        <CardInfo>
          <div>흑석커피</div>
          <div>30m</div>
        </CardInfo>
        <CardCategory>
          <CategoryButton>콘센트</CategoryButton>
          <CategoryButton>콘센트</CategoryButton>
          <CategoryButton>콘센트</CategoryButton>
          <CategoryButton>콘센트</CategoryButton>
          <CategoryButton>콘센트</CategoryButton>
        </CardCategory>
        <CardTags>
          <Tag>#분위기좋은</Tag>
          <Tag>#분위기좋은</Tag>
          <Tag>#분위기좋은</Tag>
          <Tag>#분위기좋은</Tag>
          <Tag>#분위기좋은</Tag>
        </CardTags>
      </StoreCard>
      <StoreCard>
        <CardImage>
          <Image src="/images/stores/store1@3x.webp" alt="흑석커피" layout="fill" />
        </CardImage>
        <CardInfo>
          <div>흑석커피</div>
          <div>30m</div>
        </CardInfo>
        <CardCategory>
          <CategoryButton>콘센트</CategoryButton>
          <CategoryButton>콘센트</CategoryButton>
          <CategoryButton>콘센트</CategoryButton>
          <CategoryButton>콘센트</CategoryButton>
          <CategoryButton>콘센트</CategoryButton>
        </CardCategory>
        <CardTags>
          <Tag>#분위기좋은</Tag>
          <Tag>#분위기좋은</Tag>
          <Tag>#분위기좋은</Tag>
          <Tag>#분위기좋은</Tag>
          <Tag>#분위기좋은</Tag>
        </CardTags>
      </StoreCard>
      <StoreCard>
        <CardImage>
          <Image src="/images/stores/store1@3x.webp" alt="흑석커피" layout="fill" />
        </CardImage>
        <CardInfo>
          <div>흑석커피</div>
          <div>30m</div>
        </CardInfo>
        <CardCategory>
          <CategoryButton>콘센트</CategoryButton>
          <CategoryButton>콘센트</CategoryButton>
          <CategoryButton>콘센트</CategoryButton>
          <CategoryButton>콘센트</CategoryButton>
          <CategoryButton>콘센트</CategoryButton>
        </CardCategory>
        <CardTags>
          <Tag>#분위기좋은</Tag>
          <Tag>#분위기좋은</Tag>
          <Tag>#분위기좋은</Tag>
          <Tag>#분위기좋은</Tag>
          <Tag>#분위기좋은</Tag>
        </CardTags>
      </StoreCard>
      <StoreCard>
        <CardImage>
          <Image src="/images/stores/store1@3x.webp" alt="흑석커피" layout="fill" />
        </CardImage>
        <CardInfo>
          <div>흑석커피</div>
          <div>30m</div>
        </CardInfo>
        <CardCategory>
          <CategoryButton>콘센트</CategoryButton>
          <CategoryButton>콘센트</CategoryButton>
          <CategoryButton>콘센트</CategoryButton>
          <CategoryButton>콘센트</CategoryButton>
          <CategoryButton>콘센트</CategoryButton>
        </CardCategory>
        <CardTags>
          <Tag>#분위기좋은</Tag>
          <Tag>#분위기좋은</Tag>
          <Tag>#분위기좋은</Tag>
          <Tag>#분위기좋은</Tag>
          <Tag>#분위기좋은</Tag>
        </CardTags>
      </StoreCard>
      <StoreCard>
        <CardImage>
          <Image src="/images/stores/store1@3x.webp" alt="흑석커피" layout="fill" />
        </CardImage>
        <CardInfo>
          <div>흑석커피</div>
          <div>30m</div>
        </CardInfo>
        <CardCategory>
          <CategoryButton>콘센트</CategoryButton>
          <CategoryButton>콘센트</CategoryButton>
          <CategoryButton>콘센트</CategoryButton>
          <CategoryButton>콘센트</CategoryButton>
          <CategoryButton>콘센트</CategoryButton>
        </CardCategory>
        <CardTags>
          <Tag>#분위기좋은</Tag>
          <Tag>#분위기좋은</Tag>
          <Tag>#분위기좋은</Tag>
          <Tag>#분위기좋은</Tag>
          <Tag>#분위기좋은</Tag>
        </CardTags>
      </StoreCard>
    </StoreContainer>
  )
}

export default StorePlaceCard
