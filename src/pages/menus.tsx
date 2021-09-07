import { ReactElement } from 'react'
import PageHead from 'src/components/PageHead'
import HomeLayout from 'src/layouts/HomeLayout'
import NavigationLayout from 'src/layouts/NavigationLayout'
import MenuCategory from 'src/components/MenuCategory'
import { useMenusQuery } from 'src/graphql/generated/types-and-hooks'
import MenuCard from 'src/components/MenuCard'
import { useRecoilValue } from 'recoil'
import { currentTown } from 'src/models/recoil'
import styled from 'styled-components'

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

export default function MenusPage() {
  const townName = useRecoilValue(currentTown)

  const { data, loading } = useMenusQuery({ skip: !townName, variables: { town: townName } })

  const menus = data?.menusByTownAndCategory

  return (
    <PageHead title={`${townName} 메뉴 - 소복`} description={description}>
      <MenuCategory />
      <MenuContainer>
        <FilterButton>거리순</FilterButton>

        {loading ? (
          <div>loading...</div>
        ) : menus ? (
          <ul>
            {menus.map((menu) => (
              <MenuCard key={menu.id} menu={menu} />
            ))}
          </ul>
        ) : (
          <div>결과 없음</div>
        )}
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
