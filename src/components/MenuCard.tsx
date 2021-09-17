import Image from 'next/image'
import { useRouter } from 'next/router'
import type { MouseEvent } from 'react'
import { MenuCardFragment, MenusQuery } from 'src/graphql/generated/types-and-hooks'
import { ArrayElement } from 'src/utils/types'
import styled from 'styled-components'

const FlexContainerLi = styled.li`
  display: grid;
  grid-template-columns: 1.1fr 2fr;
  width: 100%;
  height: 8.5rem;
  border-radius: 10px;
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
  display: flex;
  flex-direction: column;
  //grid-template-rows: 1fr 1fr 1fr 2fr;
  align-content: center;
  width: 100%;
  padding: 0.8rem 1rem;
`

const MenuCardLocateAndHeart = styled.div`
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
`

const MenuCardName = styled.div`
  font-size: 1.1rem;
`
const MenuCardHashTags = styled.div`
  color: #5d5d5d;
  font-size: 0.8rem;
`
const Tag = styled.span`
  flex-wrap: nowrap;
`
const MenuCardPrice = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
`

type Props = {
  menu: MenuCardFragment
}

export default function MenuCard({ menu }: Props) {
  const store = (menu as ArrayElement<MenusQuery['menusByTownAndCategory']>).store

  const router = useRouter()
  const storeId = (router.query.id ?? '') as string

  function goToStoreMenusPage(e: MouseEvent) {
    e.stopPropagation()

    if (store) {
      sessionStorage.setItem('urlBeforeStorePage', router.asPath)
      sessionStorage.setItem('pageYOffsetBeforeStorePage', `${window.pageYOffset}`)
      router.push(`/stores/${store.id}/menus`)
    }
  }

  function goToStoreMenuPage() {
    if (store) {
      router.push(`/stores/${store.id}/${menu.name}`)
    } else if (storeId) {
      router.push(`/stores/${storeId}/${menu.name}`)
    } else {
      console.warn('경로를 새로 추가해야 합니다.')
    }
  }

  return (
    <FlexContainerLi onClick={goToStoreMenuPage}>
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
        <MenuCardLocateAndHeart>
          {store && (
            <div onClick={goToStoreMenusPage} role="button" tabIndex={0}>
              {store.name}
            </div>
          )}
          <Image
            src="/images/heart.min.svg"
            alt="heart"
            width="15"
            height="13"
            objectFit="contain"
          />
        </MenuCardLocateAndHeart>
        <MenuCardName>{menu.name}</MenuCardName>
        <MenuCardHashTags>
          {menu.hashtags?.map((hashtags, i) => (
            <Tag key={i}>#{hashtags} </Tag>
          ))}
        </MenuCardHashTags>
        <MenuCardPrice>{menu.price}원</MenuCardPrice>
      </MenuCardTextContainer>
    </FlexContainerLi>
  )
}
