/* eslint-disable @next/next/link-passhref */
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode, useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { useStoreQuery } from 'src/graphql/generated/types-and-hooks'
import { currentStore as storeRecoil } from 'src/models/recoil'
import { FlexContainerCenterCenter } from 'src/styles'
import BackArrowIcon from 'src/svgs/BackArrowIcon'
import HeartFilledIcon from 'src/svgs/HeartFilledIcon'
import styled from 'styled-components'

const Relative = styled.div`
  position: relative;
  background-color: #fcfcfc;
`

const AbsoluteTopLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;

  width: 2.5rem;
  height: 3rem;
`

const AbsoluteTopRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;

  width: 3.5rem;
  height: 3.5rem;
`

const TabsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
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

const StoreHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`

const StoreName = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  margin-right: 3px;
`

const StoreDescription = styled.div`
  font-size: 1.1rem;
  color: #5d5d5d;
  padding: 0.5rem 0;
`

type Props = {
  children: ReactNode
}

export default function StoreLayout({ children }: Props) {
  const router = useRouter()
  const { asPath } = router
  const storeId = (router.query.id ?? '') as string

  const { data, loading } = useStoreQuery({ skip: !storeId, variables: { storeId } })

  const store = data?.store
  const storeName = store?.name ?? '매장'

  const setStore = useSetRecoilState(storeRecoil)

  useEffect(() => {
    if (storeId) {
      setStore({ id: storeId, name: storeName })
    }
  }, [setStore, storeId, storeName])

  function goBackFromStorePage() {
    router.push(sessionStorage.getItem('urlBeforeStorePage') ?? '/')
    sessionStorage.removeItem('urlBeforeStorePage')
  }

  function toggleLikedStore() {
    console.log('toggleLikedStore')
  }

  return (
    <Relative>
      <Image
        src={store?.imageUrls?.[0] ?? '/images/default-store-cover.png'}
        alt="store-cover"
        width="1600"
        height="900"
        objectFit="cover"
      />
      <AbsoluteTopLeft onClick={goBackFromStorePage}>
        <BackArrowIcon color="#fff" />
      </AbsoluteTopLeft>
      <AbsoluteTopRight onClick={toggleLikedStore}>
        <HeartFilledIcon filled={store?.isLiked} />
      </AbsoluteTopRight>

      {loading ? (
        'loading...'
      ) : store ? (
        <StoreHeaderContainer>
          <FlexContainerCenterCenter>
            <StoreName>{storeName}</StoreName>
            <Image src="/images/edit.min.svg" alt="수정요청" width="14" height="14" />
          </FlexContainerCenterCenter>
          <StoreDescription>{store.description}</StoreDescription>
        </StoreHeaderContainer>
      ) : (
        '결과 없음'
      )}

      <TabsContainer>
        <Link href={`/stores/${storeId}`}>
          <Tab style={asPath === `/stores/${storeId}` ? SelectedTabStyle : UnSelectedTabStyle}>
            정보
          </Tab>
        </Link>
        <Link href={`/stores/${storeId}/news`}>
          <Tab style={asPath === `/stores/${storeId}/news` ? SelectedTabStyle : UnSelectedTabStyle}>
            소식
          </Tab>
        </Link>
        <Link href={`/stores/${storeId}/menus`}>
          <Tab
            style={asPath === `/stores/${storeId}/menus` ? SelectedTabStyle : UnSelectedTabStyle}
          >
            메뉴
          </Tab>
        </Link>
        <Link href={`/stores/${storeId}/feed`}>
          <Tab style={asPath === `/stores/${storeId}/feed` ? SelectedTabStyle : UnSelectedTabStyle}>
            피드
          </Tab>
        </Link>
      </TabsContainer>
      {children}
    </Relative>
  )
}
