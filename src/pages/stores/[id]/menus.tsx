import { ReactElement, useContext } from 'react'
import PageHead from 'src/components/PageHead'
import StoreMenuCard from 'src/components/StoreMenuCard'
import { useStoreMenusQuery } from 'src/graphql/generated/types-and-hooks'
import { StoreContext, StoreLayout } from '.'

const description = ''

export default function StoreMenuPage() {
  const storeContext = useContext(StoreContext)
  const storeId = storeContext.id
  const storeName = storeContext.name

  const { data, loading, error } = useStoreMenusQuery({ skip: !storeId, variables: { storeId } })

  const storeMenus = data?.menusByStore

  return (
    <PageHead title={`${storeName} 메뉴 - 소복`} description={description}>
      <div>매장 페이지</div>
      {loading || !storeMenus
        ? 'loading...'
        : storeMenus.map((menu) => <StoreMenuCard key={menu.id} storeMenu={menu} />)}
    </PageHead>
  )
}

StoreMenuPage.getLayout = function getLayout(page: ReactElement) {
  return <StoreLayout>{page}</StoreLayout>
}
