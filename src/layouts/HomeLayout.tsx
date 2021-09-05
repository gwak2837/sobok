import { Tabs } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { useRecoilValue } from 'recoil'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { currentTown } from 'src/models/recoil'
import { TOP_HEADER_HEIGHT, TABLET_MIN_WIDTH } from 'src/utils/constants'
import styled from 'styled-components'

const { TabPane } = Tabs

const HomeContainer = styled.div`
  //position: relative;
  max-width: ${TABLET_MIN_WIDTH};
  left: 50%;
  padding-top: ${TOP_HEADER_HEIGHT};
  //transform: translateX(-50%);
`

const FixedPosition = styled.div`
  position: fixed;
  top: 0;
  //left: 50%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  max-width: ${TABLET_MIN_WIDTH};
  height: ${TOP_HEADER_HEIGHT};
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08); //구분을 위해 우선 넣음

  //transform: translateX(-50%);
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
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

export default function HomeLayout({ children }: { children: ReactNode }) {
  const townName = useRecoilValue(currentTown)

  const router = useRouter()

  function goToTabPage(activeKey: string) {
    router.push(activeKey)
  }

  return (
    <HomeContainer>
      <FixedPosition>
        <ClientSideLink href="/location">
          <FlexContainer>
            <LocationH3>{townName}</LocationH3>
            <Image src="/images/arrow-down.svg" alt="arrow-down.svg" width={11} height={6} />
          </FlexContainer>
        </ClientSideLink>
        <TopIconDiv>
          <ClientSideLink href="/map">
            <Image src="/images/map.svg" alt="map.svg" width={19} height={21} />
          </ClientSideLink>
          <ClientSideLink href="/search">
            <Image src="/images/search.svg" alt="search.svg" width={20} height={22} />
          </ClientSideLink>
        </TopIconDiv>
      </FixedPosition>
      <Tabs defaultActiveKey={router.asPath} onTabClick={goToTabPage}>
        <TabPane tab="공간" key="/"></TabPane>
        <TabPane tab="메뉴" key="/menus" />
        <TabPane tab="피드" key="/feed" />
      </Tabs>

      {children}
    </HomeContainer>
  )
}
