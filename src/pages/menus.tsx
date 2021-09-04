import { ReactElement, useContext } from 'react'
import styled from 'styled-components'
import PageHead from 'src/components/PageHead'
import HomeLayout, { HomeContext } from 'src/layouts/HomeLayout'
import NavigationLayout from 'src/layouts/NavigationLayout'
import MenuCategory from 'src/components/MenuCategory'
import { useMenusQuery } from 'src/graphql/generated/types-and-hooks'
import MenuCard from 'src/components/MenuCard'

const description = ''

export default function MenusPage() {
  const { townName } = useContext(HomeContext)

  const { data, loading } = useMenusQuery({ skip: !townName, variables: { town: townName } })

  const menus = data?.menusByTownAndCategory

  return (
    <PageHead title={`${townName} 메뉴 - 소복`} description={description}>
      <MenuCategory />
      {loading || !menus ? (
        'loading'
      ) : (
        <ul>
          {menus.map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </ul>
      )}
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
