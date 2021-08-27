import Image from 'next/image'
import mapIcon from '../../public/images/598@3x.png'
import searchIcon from '../../public/images/search@3x.png'
import bottomArrowIcon from '../../public/images/bottom_arrow@3x.png'
import Link from 'next/link'
import PageHead from 'src/components/PageHead'
import TopHeader from 'src/components/TopHeader'
import BottomHeader from 'src/components/BottomHeader'
import NavigationLayout from 'src/layouts/NavigationLayout'
import styled from 'styled-components'
import { Tabs } from 'antd'
import type { ReactElement } from 'react'

const LocalNav = styled(TopHeader)`
  justify-content: space-between;
  align-items: center;
  //padding: 0 1rem;
`
const LocationDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 4.5rem;
`
const BottomArrowIcon = styled.div`
  width: 0.8rem;
  height: 0.4rem;
`
const TopIconDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 3.5rem;
  height: 1.3rem;
  margin: 0;
`
const TopIcon = styled.div`
  width: 1.3rem;
  height: 1.3rem;
`
const LocationText = styled.div`
  font-size: 1.22rem;
  font-weight: 700;
`

const { TabPane } = Tabs

const tabBarStyle = {
  width: '256px',
}

function callback(key: string) {
  console.log(key)
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 0.5rem;
`

const SquareFrame = styled.div`
  padding-top: 100%;
  position: relative;

  img {
    transition: transform 1s;
  }

  img:hover {
    transform: rotateY(180deg);
  }
`

export default function HomePage() {
  return (
    <>
      <LocalNav>
        <LocationDiv>
          <LocationText>흑석동</LocationText>
          <Link href="/location">
            <BottomArrowIcon>
              <Image src={bottomArrowIcon} alt="location" />
            </BottomArrowIcon>
          </Link>
        </LocationDiv>
        <TopIconDiv>
          <Link href="/map">
            <TopIcon>
              <Image src={mapIcon} alt="map" width={200} height={200} />
            </TopIcon>
          </Link>
          <Link href="/search">
            <TopIcon>
              <Image src={searchIcon} alt="search" width={200} height={200} />
            </TopIcon>
          </Link>
        </TopIconDiv>
      </LocalNav>
      <Tabs
        defaultActiveKey="1"
        tabBarStyle={{ marginTop: '140px', width: '375px' }}
        tabBarGutter={30}
        onChange={callback}
      >
        <TabPane tab="카페" key="1">
          카페
        </TabPane>
        <TabPane tab="메뉴" key="2">
          메뉴
        </TabPane>
        <TabPane tab="피드" key="3">
          피드
        </TabPane>
      </Tabs>
      <div>
        <Link href="/@userId1">사용자 페이지</Link>
      </div>
      <div>
        <Link href="/@userId2">사용자2 페이지</Link>
      </div>
      <div>
        <Link href="/register">회원가입 페이지</Link>
      </div>
      <div>
        <Link href="/login">로그인 페이지</Link>
      </div>
      <div>
        <Link href="/stores/1">매장 페이지</Link>
      </div>
    </>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageHead>
      <TopHeader>
        <BottomHeader>{page}</BottomHeader>
      </TopHeader>
    </PageHead>
  )
}
