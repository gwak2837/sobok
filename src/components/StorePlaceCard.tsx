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
  text-align: center;
  background-color: #cee7f5;
`

function StorePlaceCard() {
  return (
    <StoreContainer>
      <StoreCard>
        <CardImage>
          <Image src="/images/stores/store1@3x.webp" alt="흑석커피" layout="fill" />
        </CardImage>
        <div>매장명</div>
        <div>카테고리</div>
        <div>태그</div>
      </StoreCard>
      <StoreCard>
        <div>이미지</div>
        <div>매장명</div>
        <div>카테고리</div>
        <div>태그</div>
      </StoreCard>
      <StoreCard>
        <div>이미지</div>
        <div>매장명</div>
        <div>카테고리</div>
        <div>태그</div>
      </StoreCard>
      <StoreCard>
        <div>이미지</div>
        <div>매장명</div>
        <div>카테고리</div>
        <div>태그</div>
      </StoreCard>
    </StoreContainer>
  )
}

export default StorePlaceCard
