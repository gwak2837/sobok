import { HeartOutlined, HeartTwoTone } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode, useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { useStoreQuery } from 'src/graphql/generated/types-and-hooks'
import { store as storeRecoil } from 'src/models/recoil'

type Props = {
  children: ReactNode
}

export default function StoreLayout({ children }: Props) {
  const setStore = useSetRecoilState(storeRecoil)

  const router = useRouter()

  const storeId = (router.query.id ?? '') as string

  const { data, loading } = useStoreQuery({ skip: !storeId, variables: { storeId } })

  const store = data?.store
  const storeName = store?.name ?? '매장'

  useEffect(() => {
    if (storeId) {
      setStore({ id: storeId, name: storeName })
    }
  }, [setStore, storeId, storeName])

  return (
    <div>
      <Image
        src={store?.imageUrls?.[0] ?? '/images/default-store-cover.png'}
        alt="store-cover"
        width="200"
        height="200"
        objectFit="cover"
      />
      {loading ? (
        'loading...'
      ) : store ? (
        <>
          <h2>{storeName}</h2>
          <div>{store.description}</div>
          <div>{store.isLiked ? <HeartTwoTone twoToneColor="#ff9f74" /> : <HeartOutlined />}</div>
        </>
      ) : (
        '결과 없음'
      )}
      <div>
        <Link href={`/stores/${storeId}`}>정보</Link>{' '}
        <Link href={`/stores/${storeId}/news`}>소식</Link>{' '}
        <Link href={`/stores/${storeId}/feed`}>피드</Link>{' '}
        <Link href={`/stores/${storeId}/menus`}>메뉴</Link>{' '}
      </div>

      {children}
    </div>
  )
}
