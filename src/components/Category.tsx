import Image from 'next/image'
import styled from 'styled-components'

const CategrotyContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  flex-wrap: nowrap;
  background-color: dodgerblue;
`
const CategoryItem = styled.div`
  display: grid;
  flex: 0 0 auto;
  grid-template-rows: 4.43rem 1.43rem;
  width: 4.43rem;
  gap: 3px;
  text-align: center;
  margin: 0 9px;
  background-color: skyblue;
`
const CategoryImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 25%;
  background-color: yellow;
`

const CategoryText = styled.div`
  color: black;
  background-color: lightyellow;
`

function Category() {
  return (
    <CategrotyContainer>
      <CategoryItem>
        <CategoryImage>이미지</CategoryImage>
        <CategoryText>전체</CategoryText>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage>이미지</CategoryImage>
        <CategoryText>전체</CategoryText>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage>이미지</CategoryImage>
        <CategoryText>전체</CategoryText>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage>이미지</CategoryImage>
        <CategoryText>전체</CategoryText>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage>이미지</CategoryImage>
        <CategoryText>전체</CategoryText>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage>이미지</CategoryImage>
        <CategoryText>전체</CategoryText>
      </CategoryItem>
      <CategoryItem>
        <CategoryImage>이미지</CategoryImage>
        <CategoryText>전체</CategoryText>
      </CategoryItem>
    </CategrotyContainer>
  )
}

export default Category
