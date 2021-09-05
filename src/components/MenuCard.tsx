import Image from 'next/image'
import styled from 'styled-components'

const FlexContainerLi = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  height: 8.5rem;
  border-radius: 0.4rem;
  border: solid 1px #f0f0f0;
  background-color: white;
  margin-bottom: 1rem;
  overflow: hidden;
`

const MenuCardImageContainer = styled.div`
  grid-column: 1;
  height: 100%;
  //padding-bottom: 100%;
  overflow: hidden;
`

const MenuCardTextContainer = styled.div`
  grid-column: 2;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 2fr;
  align-content: center;
  width: 100%;
  padding: 0.8rem 1rem;
`

const MenuCardLocateAndHeart = styled.div`
  grid-row: 1;
  font-size: 0.9rem;
`
const MenuCardName = styled.div`
  grid-row: 2;
  font-size: 1.1rem;
`
const MenuCardHashTags = styled.div`
  grid-row: 3;
`
const Tag = styled.span`
  flex-wrap: nowrap;
  color: #5d5d5d;
  font-size: 0.8rem;
`

const MenuCardPrice = styled.div`
  grid-row: 4;
  font-size: 1.2rem;
  align-self: center;
`

type Props = {
  menu: any
}

export default function MenuCard({ menu }: Props) {
  return (
    <FlexContainerLi>
      <MenuCardImageContainer>
        <Image
          src={menu.imageUrls?.[0] ?? '/images/default-store-cover.png'}
          alt={menu.name ?? 'menu-cover'}
          width="200"
          height="200"
          objectFit="cover"
        />
      </MenuCardImageContainer>
      <MenuCardTextContainer>
        <MenuCardLocateAndHeart>뚜스뚜스</MenuCardLocateAndHeart>
        <MenuCardName>{menu.name}</MenuCardName>
        <MenuCardHashTags>
          {menu.hashtags?.map((hashtags: any, i: any) => (
            <Tag key={i}>#{hashtags} </Tag>
          ))}
        </MenuCardHashTags>
        <MenuCardPrice>{menu.price}원</MenuCardPrice>
      </MenuCardTextContainer>
    </FlexContainerLi>
  )
}
