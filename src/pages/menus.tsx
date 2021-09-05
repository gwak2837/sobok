import { ReactElement } from 'react'
import PageHead from 'src/components/PageHead'
import HomeLayout from 'src/layouts/HomeLayout'
import NavigationLayout from 'src/layouts/NavigationLayout'
import MenuCategory from 'src/components/MenuCategory'
import { useMenusQuery } from 'src/graphql/generated/types-and-hooks'
import MenuCard from 'src/components/MenuCard'
import { useRecoilValue } from 'recoil'
import { currentTown } from 'src/models/recoil'

const description = ''

export default function MenusPage() {
  const townName = useRecoilValue(currentTown)

  const { data, loading } = useMenusQuery({ skip: !townName, variables: { town: townName } })

  const menus = data?.menusByTownAndCategory

  return (
    <PageHead title={`${townName} 메뉴 - 소복`} description={description}>
      <MenuCategory />
      {loading ? (
        'loading'
      ) : menus ? (
        <ul>
          {menus.map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </ul>
      ) : (
        '결과 없음'
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
