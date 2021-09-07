import { HeartOutlined, HeartTwoTone } from '@ant-design/icons'
import { SignalWifi1BarLock } from '@material-ui/icons'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode, useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { useStoreQuery } from 'src/graphql/generated/types-and-hooks'
import { store as storeRecoil } from 'src/models/recoil'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

const StoreContainer = styled.div`
  background-color: #fcfcfc;
`
const TabsContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  background-color: white;
  border: solid 1px #f0f0f0;
`

const Tab = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  width: 49px;
  height: 100%;
  padding: auto;
  cursor: pointer;
  transition: ease 0.5s;
  &:hover {
    color: black;
    border-bottom: 'solid 5px #5d5d5d';
  }
`

const SelectedTabStyle = { color: '#000000', borderBottom: 'solid 5px #5d5d5d' }
const UnSelectedTabStyle = { color: '#8e8e8e', borderBottom: 'solid 5px white' }

export default function StoreLayout({ children }: Props) {
  const setStore = useSetRecoilState(storeRecoil)

  const router = useRouter()

  const { asPath } = useRouter()

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
    <StoreContainer>
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
      <TabsContainer>
        <Link href={`/stores/${storeId}`} passHref>
          <Tab style={asPath === `/stores/${storeId}` ? SelectedTabStyle : UnSelectedTabStyle}>
            정보
          </Tab>
        </Link>{' '}
        <Link href={`/stores/${storeId}/news`} passHref>
          <Tab style={asPath === `/stores/${storeId}/news` ? SelectedTabStyle : UnSelectedTabStyle}>
            소식
          </Tab>
        </Link>{' '}
        <Link href={`/stores/${storeId}/menus`} passHref>
          <Tab
            style={asPath === `/stores/${storeId}/menus` ? SelectedTabStyle : UnSelectedTabStyle}
          >
            메뉴
          </Tab>
        </Link>{' '}
        <Link href={`/stores/${storeId}/feed`} passHref>
          <Tab style={asPath === `/stores/${storeId}/feed` ? SelectedTabStyle : UnSelectedTabStyle}>
            피드
          </Tab>
        </Link>{' '}
      </TabsContainer>
      {children}
    </StoreContainer>
  )
}
