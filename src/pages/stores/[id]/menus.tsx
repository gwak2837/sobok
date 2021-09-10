import { ReactElement, useContext } from 'react'
import { useRecoilValue } from 'recoil'
import PageHead from 'src/components/PageHead'
import MenuCard from 'src/components/MenuCard'
import { useStoreMenusQuery } from 'src/graphql/generated/types-and-hooks'
import StoreLayout from 'src/layouts/StoreLayout'
import { currentStore } from 'src/models/recoil'
import styled from 'styled-components'

const description = '매장 메뉴 페이지'

const StoreMenuCardContainer = styled.div`
  padding: 1rem;
`
export default function StoreMenuPage() {
  const { id: storeId, name: storeName } = useRecoilValue(currentStore)

  const { data, loading, error } = useStoreMenusQuery({ skip: !storeId, variables: { storeId } })

  const storeMenus = data?.menusByStore

  return (
    <PageHead title={`${storeName} 메뉴 - 소복`} description={description}>
      <StoreMenuCardContainer>
        {loading
          ? 'loading...'
          : storeMenus
          ? storeMenus.map((menu) => <MenuCard key={menu.id} menu={menu} />)
          : '결과 없음'}
      </StoreMenuCardContainer>
    </PageHead>
  )
}

StoreMenuPage.getLayout = function getLayout(page: ReactElement) {
  return <StoreLayout>{page}</StoreLayout>
}
