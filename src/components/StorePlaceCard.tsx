import Image from 'next/image'
import styled from 'styled-components'

const StoreContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(calc(200px + 10vw), auto);
  padding: 1rem;
  gap: 0.8rem;
  background-color: #f7f7f7;
`

const StoreCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #c4c4c4;
`

function StorePlaceCard() {
  return (
    <StoreContainer>
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
