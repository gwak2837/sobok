import Image from 'next/image'
import Link from 'next/link'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import PageHead from 'src/components/PageHead'
import TopHeader from 'src/components/TopHeader'
import NavigationLayout from 'src/layouts/NavigationLayout'
import styled from 'styled-components'

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
  background-color: #e2caab;
`

export default function HomePage() {
  return (
    <PageHead>
      <NavigationLayout>
        <LocalNav>
          <ClientSideLink href="/location">
            <FlexContainer>
              <LocationH3>흑석동</LocationH3>
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
      </NavigationLayout>
    </PageHead>
  )
}
