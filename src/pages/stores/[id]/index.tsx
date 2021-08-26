import { useRouter } from 'next/router'
import type { ReactElement, ReactNode } from 'react'
import PageHead from 'src/components/PageHead'
import StoreMenuCard from 'src/components/StoreMenuCard'
import { useStoreMenusQuery } from 'src/graphql/generated/types-and-hooks'

export function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>매장 레이아웃</div>
      {children}
    </div>
  )
}

const description = ''

export default function StorePage() {
  const router = useRouter()

  const storeId = (router.query.id ?? '') as string

  const { data, loading, error } = useStoreMenusQuery({ skip: !storeId, variables: { storeId } })

  const storeName = data?.store?.name ?? '매장'

  return (
    <PageHead title={`${storeName} 메뉴 - 소복`} description={description}>
      매장 페이지
      {loading && 'loading...'}
      {data?.menus2?.map((menu) => (
        <StoreMenuCard key={menu.id} storeMenu={menu} />
      ))}
    </PageHead>
  )
}

StorePage.getLayout = function getLayout(page: ReactElement) {
  return <StoreLayout>{page}</StoreLayout>
}
