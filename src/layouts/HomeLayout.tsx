import { Tabs, Carousel } from 'antd'
import Image from 'next/image'
import router from 'next/router'
import { createContext, ReactNode, useMemo } from 'react'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { TOP_HEADER_HEIGHT, TABLET_MIN_WIDTH } from 'src/utils/constants'
import styled from 'styled-components'

const { TabPane } = Tabs

const PaddingTop = styled.div`
  padding-top: ${TOP_HEADER_HEIGHT};
`

const FixedPosition = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;
  width: 100%;
  max-width: ${TABLET_MIN_WIDTH};
  height: ${TOP_HEADER_HEIGHT};
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08); //구분을 위해 우선 넣음

  transform: translateX(-50%);
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

const CarouselDiv = styled.div`
  height: 9.7rem;
  line-height: 160px;
  text-align: center;
`

const townName = '흑석동'

function onChange(a: any, b: any, c: any) {
  console.log(a, b, c)
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const HomeContext = createContext<THomeContext>(undefined!)

export default function HomeLayout({ children }: { children: ReactNode }) {
  const homeContext = useMemo(() => ({ townName }), [])

  function goToTabPage(activeKey: string) {
    router.push(activeKey)
  }

  type THomeContext = {
    townName: string
  }

  return (
    <>
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
      <PaddingTop />
      <Tabs defaultActiveKey="/" onTabClick={goToTabPage}>
        <TabPane tab="공간" key="/">
          <Carousel autoplay afterChange={onChange}>
            <CarouselDiv>
              <h2>1</h2>
            </CarouselDiv>
            <CarouselDiv>
              <h2>2</h2>
            </CarouselDiv>
            <CarouselDiv>
              <h2>3</h2>
            </CarouselDiv>
            <CarouselDiv>
              <h2>4</h2>
            </CarouselDiv>
          </Carousel>
        </TabPane>
        <TabPane tab="메뉴" key="/menus" />
        <TabPane tab="피드" key="/feed" />
      </Tabs>

      <HomeContext.Provider value={homeContext}>{children}</HomeContext.Provider>
    </>
  )
}
