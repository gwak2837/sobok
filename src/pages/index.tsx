import Image from 'next/image'
import Link from 'next/link'
import PageHead from 'src/components/PageHead'
import TopHeader from 'src/components/TopHeader'
import NavigationLayout from 'src/layouts/NavigationLayout'
import styled from 'styled-components'
import { IconImg } from 'src/components/atoms/Styles'

const LocalNav = styled(TopHeader)`
  justify-content: space-between;
  //padding: 0 1rem;
`
const LocationDiv = styled.div`
  display: flex;
  background-color: antiquewhite;
  //margin-right: auto;
`
const TopIconDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 2.6rem;
  height: 1.3rem;
  margin: 0;
  background-color: #e2caab;
`
const TopIcon = styled.div`
  width: 1.3rem;
  height: 1.3rem;
`

const LocationText = styled.div`
  font-size: 1.22rem;
  font-weight: 700;
`
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
    <PageHead>
      <NavigationLayout>
        <LocalNav>
          <LocationDiv>
            <LocationText>흑석동</LocationText>
            <Link href="/location">
              <LocationText>{'>'}</LocationText>
            </Link>
          </LocationDiv>
          <TopIconDiv>
            <Link href="/map">
              <TopIcon>
                <Image src="/598@3x.png" alt="map" width={200} height={200} />
              </TopIcon>
            </Link>
            <Link href="/search">
              <TopIcon>
                <Image src="/search@3x.png" alt="map" width={200} height={200} />
              </TopIcon>
            </Link>
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
