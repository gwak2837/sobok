import { Tabs } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { useRecoilValue } from 'recoil'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { currentTown } from 'src/models/recoil'
import ArrowDownIcon from 'src/svgs/arrow-down.svg'
import MapIcon from 'src/svgs/map.svg'
import SearchIcon from 'src/svgs/search.svg'
import { TABLET_MIN_WIDTH } from 'src/utils/constants'
import styled from 'styled-components'

import { FlexContainerBetweenCenter } from '../styles/styles'

const { TabPane } = Tabs

const PaddingTop = styled.div`
  padding-top: 93px;
`

const FixedPosition = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  max-width: ${TABLET_MIN_WIDTH};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  background: #fff;

  padding: 1rem 1rem 0;
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;
`

const LocationH3 = styled.h3`
  display: inline-block;
  color: black;
`

const TopIconDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 3.5rem;
  height: 1.3rem;
  margin: 0;
`

const ArrowDownIconWrapper = styled.div`
  width: 11px;
`

function getActiveKey(asPath: string) {
  switch (asPath) {
    case '/':
    case '/menus':
    case '/feed':
      return asPath
    default:
      return '/'
  }
}

type Props = {
  children: ReactNode
}

export default function HomeLayout({ children }: Props) {
  const townName = useRecoilValue(currentTown)

  const router = useRouter()

  function goToTabPage(activeKey: string) {
    router.push(activeKey)
  }

  // useEffect(() => {
  //   getCoordinates()
  //   setTown()
  // }, [])

  return (
    <>
      <FixedPosition>
        <FlexContainerBetweenCenter>
          <ClientSideLink href="/location">
            <FlexContainer>
              <LocationH3>{townName}</LocationH3>
              <ArrowDownIconWrapper>
                <ArrowDownIcon />
              </ArrowDownIconWrapper>
            </FlexContainer>
          </ClientSideLink>
          <TopIconDiv>
            <ClientSideLink href="/map">
              <MapIcon />
              {/* <Image src="/images/map.svg" alt="map.svg" width={19} height={21} /> */}
            </ClientSideLink>
            <ClientSideLink href="/search">
              <SearchIcon />
              {/* <Image src="/images/search.svg" alt="search.svg" width={20} height={22} /> */}
            </ClientSideLink>
          </TopIconDiv>
        </FlexContainerBetweenCenter>
        <Tabs activeKey={getActiveKey(router.asPath)} onTabClick={goToTabPage}>
          <TabPane tab="공간" key="/"></TabPane>
          <TabPane tab="메뉴" key="/menus" />
          <TabPane tab="피드" key="/feed" />
        </Tabs>
      </FixedPosition>

      <PaddingTop />
      {children}
    </>
  )
}
