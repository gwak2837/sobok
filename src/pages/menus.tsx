import { ReactElement, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { toastApolloError } from 'src/apollo/error'
import MenuCard from 'src/components/MenuCard'
import PageHead from 'src/components/PageHead'
import { useMenusByTownAndCategoryQuery } from 'src/graphql/generated/types-and-hooks'
import useInfiniteScroll from 'src/hooks/useInfiniteScroll'
import HomeLayout from 'src/layouts/HomeLayout'
import NavigationLayout from 'src/layouts/NavigationLayout'
import { currentTown } from 'src/models/recoil'
import AllMenusIcon from 'src/svgs/AllMenusIcon'
import BeverageIcon from 'src/svgs/BeverageIcon'
import BreadIcon from 'src/svgs/BreadIcon'
import BrunchIcon from 'src/svgs/BrunchIcon'
import CakeIcon from 'src/svgs/CakeIcon'
import CoffeeIcon from 'src/svgs/CoffeeIcon'
import CookieIcon from 'src/svgs/CookieIcon'
import MacaronIcon from 'src/svgs/MacaronIcon'
import styled, { css } from 'styled-components'

const description = ''

const MenuContainer = styled.div`
  background-color: #fcfcfc;
  width: 100%;
  height: 100%;
  padding: 1rem;
`

const FilterButton = styled.button`
  width: 5rem;
  height: 2.2rem;
  border-radius: 0.3em;
  border: solid 1px #e8e8e8;
  background-color: white;
  margin-bottom: 1rem;
`

const GridContainerUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
  place-items: center center;
  gap: 1rem;
  padding: 1rem;

  background: #fff;

  @media (max-width: 349px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const FlexContainerColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;

  height: 7rem; // for safari
  cursor: pointer;
`

const NotSelected = css`
  font-weight: normal;
  color: #8e8e8e;
`

const SelectableH4 = styled.h4<{ selected?: boolean }>`
  ${(p) => !p.selected && NotSelected}
`

const limit = 4

export default function MenusPage() {
  const townName = useRecoilValue(currentTown)

  const { data, loading, fetchMore } = useMenusByTownAndCategoryQuery({
    notifyOnNetworkStatusChange: true,
    onError: toastApolloError,
    skip: !townName,
    variables: { town: townName, pagination: { limit } },
  })

  const menus = data?.menusByTownAndCategory

  const [hasMoreData, setHasMoreData] = useState(true)

  const infiniteScrollRef = useInfiniteScroll({
    hasMoreData,
    onIntersecting: async () => {
      if (menus && menus.length > 0) {
        const lastMenu = menus[menus.length - 1]
        const response = await fetchMore({
          variables: {
            pagination: {
              lastId: lastMenu.id,
              limit,
            },
          },
        }).catch(() => setHasMoreData(false))

        if (response?.data.menusByTownAndCategory?.length !== limit) setHasMoreData(false)
      }
    },
  })

  const [categories, setCategories] = useState<string[]>([])

  function updateCategories(e: any) {
    const clickedCategory = e.currentTarget.children[1].textContent

    if (clickedCategory === '전체') {
      setCategories([])
    } else {
      if (categories.includes(clickedCategory)) {
        setCategories((prev) => prev.filter((category) => category !== clickedCategory))
      } else {
        setCategories((prev) => [...prev, clickedCategory])
      }
    }
  }

  return (
    <PageHead title={`${townName} 메뉴 - 소복`} description={description}>
      <GridContainerUl>
        <FlexContainerColumn onClick={updateCategories}>
          <AllMenusIcon selected={categories.length === 0} />
          <SelectableH4 selected={categories.length === 0}>전체</SelectableH4>
        </FlexContainerColumn>
        <FlexContainerColumn onClick={updateCategories}>
          <BeverageIcon selected={categories.includes('음료')} />
          <SelectableH4 selected={categories.includes('음료')}>음료</SelectableH4>
        </FlexContainerColumn>
        <FlexContainerColumn onClick={updateCategories}>
          <BreadIcon selected={categories.includes('베이커리')} />
          <SelectableH4 selected={categories.includes('베이커리')}>베이커리</SelectableH4>
        </FlexContainerColumn>
        <FlexContainerColumn onClick={updateCategories}>
          <BrunchIcon selected={categories.includes('브런치')} />
          <SelectableH4 selected={categories.includes('브런치')}>브런치</SelectableH4>
        </FlexContainerColumn>
        <FlexContainerColumn onClick={updateCategories}>
          <CakeIcon selected={categories.includes('케이크')} />
          <SelectableH4 selected={categories.includes('케이크')}>케이크</SelectableH4>
        </FlexContainerColumn>
        <FlexContainerColumn onClick={updateCategories}>
          <CoffeeIcon selected={categories.includes('커피')} />
          <SelectableH4 selected={categories.includes('커피')}>커피</SelectableH4>
        </FlexContainerColumn>
        <FlexContainerColumn onClick={updateCategories}>
          <CookieIcon selected={categories.includes('구움과자')} />
          <SelectableH4 selected={categories.includes('구움과자')}>구움과자</SelectableH4>
        </FlexContainerColumn>
        <FlexContainerColumn onClick={updateCategories}>
          <MacaronIcon selected={categories.includes('마카롱')} />
          <SelectableH4 selected={categories.includes('마카롱')}>마카롱</SelectableH4>
        </FlexContainerColumn>
      </GridContainerUl>

      <MenuContainer>
        <FilterButton>거리순</FilterButton>

        {menus ? (
          <ul>
            {menus.map((menu) => (
              <MenuCard key={menu.id} menu={menu} />
            ))}
          </ul>
        ) : loading ? (
          <div>loading...</div>
        ) : (
          <div>메뉴가 없어요</div>
        )}

        {!loading && hasMoreData && <div ref={infiniteScrollRef}>무한 스크롤</div>}
      </MenuContainer>
    </PageHead>
  )
}

MenusPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <NavigationLayout>
      <HomeLayout>{page}</HomeLayout>
    </NavigationLayout>
  )
}
