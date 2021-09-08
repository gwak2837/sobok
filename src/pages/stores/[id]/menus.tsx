import { ReactElement, useContext } from 'react'
import { useRecoilValue } from 'recoil'
import PageHead from 'src/components/PageHead'
import MenuCard from 'src/components/MenuCard'
import { useStoreMenusQuery } from 'src/graphql/generated/types-and-hooks'
import StoreLayout from 'src/layouts/StoreLayout'
import { store } from 'src/models/recoil'

const description = ''

export default function StoreMenuPage() {
  const { id: storeId, name: storeName } = useRecoilValue(store)

  const { data, loading, error } = useStoreMenusQuery({ skip: !storeId, variables: { storeId } })

  const storeMenus = data?.menusByStore

  return (
    <PageHead title={`${storeName} 메뉴 - 소복`} description={description}>
      <div>매장 페이지</div>
      {loading
        ? 'loading...'
        : storeMenus
        ? storeMenus.map((menu) => <MenuCard key={menu.id} menu={menu} />)
        : '결과 없음'}
    </PageHead>
  )
}

StoreMenuPage.getLayout = function getLayout(page: ReactElement) {
  return <StoreLayout>{page}</StoreLayout>
}
