import Image from 'next/image'
import styled from 'styled-components'
import { TABLET_MIN_WIDTH } from 'src/utils/constants'

const CategrotyContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: ${TABLET_MIN_WIDTH};
  height: 100px;
  overflow: scroll;
  flex-wrap: nowrap;
  border-bottom: solid 1px #e5e5e5;
  //background-color: dodgerblue;
`
const CategoryItem = styled.div`
  display: grid;
  flex: 0 0 auto;
  grid-template-rows: 4.43rem 1.43rem;
  width: 4.43rem;
  gap: 3px;
  text-align: center;
  margin: 0 9px;
`
const CategoryImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 25%;
`

const CategoryText = styled.div`
  color: black;
`

function Category() {
  return (
    <CategrotyContainer>
      <CategoryItem>
        <CategoryImage>
          <Image src="/images/category-all.svg" alt="category-all" layout="fill" />
        </CategoryImage>
        <CategoryText>전체</CategoryText>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage>
          <Image src="/images/category-consent.svg" alt="category-consent" layout="fill" />
        </CategoryImage>
        <CategoryText>콘센트</CategoryText>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage>
          <Image src="/images/category-table.svg" alt="category-table" layout="fill" />
        </CategoryImage>
        <CategoryText>넓은테이블</CategoryText>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage>
          <Image src="/images/category-park.svg" alt="category-park" layout="fill" />
        </CategoryImage>
        <CategoryText>주차장</CategoryText>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage>
          <Image src="/images/category-pet.svg" alt="category-pet" layout="fill" />
        </CategoryImage>
        <CategoryText>애견동반</CategoryText>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage>
          <Image src="/images/category-all.svg" alt="category-all" layout="fill" />
        </CategoryImage>
        <CategoryText>통유리</CategoryText>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage>
          <Image src="/images/category-all.svg" alt="category-all" layout="fill" />
        </CategoryImage>
        <CategoryText>흡연실</CategoryText>
      </CategoryItem>
    </CategrotyContainer>
  )
}

export default Category
