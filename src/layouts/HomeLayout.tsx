import { Tabs } from 'antd'
import Image from 'next/image'
import router from 'next/router'
import { createContext, ReactNode, useMemo } from 'react'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import TopHeader from 'src/components/TopHeader'
import styled from 'styled-components'

const { TabPane } = Tabs

const LocalNav = styled(TopHeader)`
  justify-content: space-between;
  align-items: center;
  //padding: 0 1rem;
`
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: antiquewhite;
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

const tabBarStyle = {
  width: '256px',
}

const townName = '흑석동'

type THomeContext = {
  townName: string
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const HomeContext = createContext<THomeContext>(undefined!)

export default function HomeLayout({ children }: { children: ReactNode }) {
  const homeContext = useMemo(() => ({ townName }), [])

  function goToTabPage(activeKey: string) {
    router.push(activeKey)
  }

  return (
    <>
      <LocalNav>
        <ClientSideLink href="/location">
          <FlexContainer>
            <LocationH3>{townName}</LocationH3>
            <Image src="/images/arrow-down.svg" alt="location" width={11} height={6} />
          </FlexContainer>
        </ClientSideLink>
        <TopIconDiv>
          <ClientSideLink href="/map">
            <Image src="/images/map.svg" alt="map" width={19} height={21} />
          </ClientSideLink>
          <ClientSideLink href="/search">
            <Image src="/images/search.svg" alt="search" width={20} height={22} />
          </ClientSideLink>
        </TopIconDiv>
      </LocalNav>
      <Tabs defaultActiveKey="/" onTabClick={goToTabPage}>
        <TabPane tab="공간" key="/" />
        <TabPane tab="메뉴" key="/menus" />
        <TabPane tab="피드" key="/feed" />
      </Tabs>
      <HomeContext.Provider value={homeContext}>{children}</HomeContext.Provider>
    </>
  )
}
