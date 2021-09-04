import { HeartOutlined, HeartTwoTone } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo, createContext, ReactElement, ReactNode, useContext } from 'react'
import PageHead from 'src/components/PageHead'
import StoreMenuCard from 'src/components/StoreMenuCard'
import { useStoreMenusQuery, useStoreQuery } from 'src/graphql/generated/types-and-hooks'

type TStoreContext = {
  id: string
  name: string
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const StoreContext = createContext<TStoreContext>(undefined!)

export function StoreLayout({ children }: { children: ReactNode }) {
  const router = useRouter()

  const storeId = (router.query.id ?? '') as string

  const { data, loading } = useStoreQuery({ skip: !storeId, variables: { storeId } })

  const store = data?.store
  const storeName = store?.name ?? '매장'

  const storeContext = useMemo(
    () => ({
      id: storeId,
      name: storeName,
    }),
    [storeId, storeName]
  )

  return (
    <div>
      <Image
        src={store?.imageUrls?.[0] ?? '/images/default-store-cover.png'}
        alt="store-cover"
        width="200"
        height="200"
        objectFit="cover"
      />
      {loading || !store ? (
        'loading...'
      ) : (
        <>
          <h2>{storeName}</h2>
          <div>{store.description}</div>
          <div>{store.isLiked ? <HeartTwoTone twoToneColor="#ff9f74" /> : <HeartOutlined />}</div>
        </>
      )}
      <div>
        <Link href={`/stores/${storeId}/info`}>정보</Link>{' '}
        <Link href={`/stores/${storeId}/news`}>소식</Link>{' '}
        <Link href={`/stores/${storeId}/feed`}>피드</Link>{' '}
        <Link href={`/stores/${storeId}/menus`}>메뉴</Link>{' '}
      </div>
      <StoreContext.Provider value={storeContext}>{children}</StoreContext.Provider>
    </div>
  )
}

const description = ''

export default function StoreMenuPage() {
  const storeContext = useContext(StoreContext)
  const storeId = storeContext.id
  const storeName = storeContext.name

  const { data, loading, error } = useStoreMenusQuery({ skip: !storeId, variables: { storeId } })

  return (
    <PageHead title={`${storeName} 메뉴 - 소복`} description={description}>
      <div>매장 페이지</div>
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
