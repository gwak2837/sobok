import { ReactElement, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { handleApolloError } from 'src/apollo/error'
import MenuCard from 'src/components/MenuCard'
import MenuCategory from 'src/components/MenuCategory'
import PageHead from 'src/components/PageHead'
import { useMenusByTownAndCategoryQuery } from 'src/graphql/generated/types-and-hooks'
import useInfiniteScroll from 'src/hooks/useInfiniteScroll'
import HomeLayout from 'src/layouts/HomeLayout'
import NavigationLayout from 'src/layouts/NavigationLayout'
import { currentTown } from 'src/models/recoil'
import { sleep } from 'src/utils'
import styled from 'styled-components'

import stores from './search/stores'

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

const limit = 4

export default function MenusPage() {
  const townName = useRecoilValue(currentTown)

  const { data, loading, fetchMore } = useMenusByTownAndCategoryQuery({
    notifyOnNetworkStatusChange: true,
    onError: handleApolloError,
    skip: !townName,
    variables: { town: townName, pagination: { limit } },
  })

  const menus = data?.menusByTownAndCategory

  const [hasMoreData, setHasMoreData] = useState(true)

  async function fetchMoreMenus() {
    await sleep(2000) //

    if (menus && menus.length > 0) {
      const { data } = await fetchMore({
        variables: {
          pagination: {
            lastId: menus[menus.length - 1].id,
            limit,
          },
        },
      })

      if (data.menusByTownAndCategory?.length !== limit) setHasMoreData(false)
    }
  }

  const sentryRef = useInfiniteScroll({ hasMoreData, onIntersecting: fetchMoreMenus })

  return (
    <PageHead title={`${townName} 메뉴 - 소복`} description={description}>
      <MenuCategory />
      <MenuContainer>
        <FilterButton>거리순</FilterButton>

        {menus ? (
          <ul>
            {menus.map((menu) => (
              <MenuCard key={menu.id} menu={menu} />
            ))}
          </ul>
        ) : (
          <div>메뉴가 없어요</div>
        )}

        {loading && <div>loading...</div>}
        {!loading && hasMoreData && <div ref={sentryRef}>무한 스크롤</div>}
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
