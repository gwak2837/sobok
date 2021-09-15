import Image from 'next/image'
import styled from 'styled-components'
import { TABLET_MIN_WIDTH } from 'src/utils/constants'

const CategrotyContainer = styled.div`
  display: flex;
  align-items: center;
  //max-width: ${TABLET_MIN_WIDTH};
  padding: 1rem;
  height: 7rem;
  overflow: scroll hidden;
  flex-wrap: nowrap;
  border-bottom: solid 1px #e5e5e5;
`
const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  flex: 0 0 auto;
  height: 100%;
  width: 4.43rem;
  margin-right: 0.7rem;
`
const CategoryImage = styled.div`
  position: relative;
  height: 0;
  padding-top: 100%;
  border-radius: 25%;
  cursor: pointer;
`

const CategoryText = styled.div`
  color: black;
  cursor: pointer;
`

function Category() {
  return (
    <CategrotyContainer>
      <CategoryItem>
        <CategoryImage>
          <Image src="/images/categories/all.min.svg" alt="all" layout="fill" />
        </CategoryImage>
        <CategoryText>전체</CategoryText>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage>
          <Image src="/images/categories/outlet.min.svg" alt="outlet" layout="fill" />
        </CategoryImage>
        <CategoryText>콘센트</CategoryText>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage>
          <Image src="/images/categories/table.min.svg" alt="table" layout="fill" />
        </CategoryImage>
        <CategoryText>넓은테이블</CategoryText>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage>
          <Image src="/images/categories/park.min.svg" alt="park" layout="fill" />
        </CategoryImage>
        <CategoryText>주차장</CategoryText>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage>
          <Image src="/images/categories/pet.min.svg" alt="pet" layout="fill" />
        </CategoryImage>
        <CategoryText>애견동반</CategoryText>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage>
          <Image src="/images/categories/all.min.svg" alt="all" layout="fill" />
        </CategoryImage>
        <CategoryText>통유리</CategoryText>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage>
          <Image src="/images/categories/all.min.svg" alt="all" layout="fill" />
        </CategoryImage>
        <CategoryText>흡연실</CategoryText>
      </CategoryItem>
    </CategrotyContainer>
  )
}

export default Category
