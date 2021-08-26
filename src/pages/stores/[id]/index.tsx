import Link from 'next/link'
import { useRouter } from 'next/router'
import type { ReactElement, ReactNode } from 'react'
import PageHead from 'src/components/PageHead'
import StoreMenuCard from 'src/components/StoreMenuCard'
import { useStoreMenusQuery } from 'src/graphql/generated/types-and-hooks'

export function StoreLayout({ children }: { children: ReactNode }) {
  const router = useRouter()

  const storeId = (router.query.id ?? '') as string

  return (
    <div>
      <div>매장 레이아웃</div>
      <div>
        <Link href={`/stores/${storeId}/feed`}>피드</Link>{' '}
        <Link href={`/stores/${storeId}`}>메뉴</Link>{' '}
        <Link href={`/stores/${storeId}/news`}>소식</Link>{' '}
        <Link href={`/stores/${storeId}/info`}>정보</Link>
      </div>
      {children}
    </div>
  )
}

const description = ''

export default function StoreMenuPage() {
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

StoreMenuPage.getLayout = function getLayout(page: ReactElement) {
  return <StoreLayout>{page}</StoreLayout>
}
