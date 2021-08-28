import Image from 'next/image'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { SOBOK_COLOR, LIGHT_GREY } from 'src/models/constants'
import { TABLET_MIN_WIDTH } from 'src/utils/constants'
import styled from 'styled-components'

const FixedHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  max-width: ${TABLET_MIN_WIDTH};
  height: 5rem;
  box-shadow: 0 -3px 3px 0 rgba(0, 0, 0, 0.06);
  background-color: #fff;
`

const NaigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 40px;
`
const IconDiv = styled.div`
  width: 30px;
  height: 20px;
`

const TextDiv = styled.div`
  width: 30px;
  height: 20px;
`

const SelectedStyle = { color: SOBOK_COLOR }
const UnSelectedStyle = { color: LIGHT_GREY }

type Props = {
  children: ReactNode
}

export default function NavigationLayout({ children }: Props) {
  const { asPath } = useRouter()

  const userId = 'userId1'

  return (
    <>
      {children}
      <FixedHeader>
        <NaigationContainer>
          <ClientSideLink href="/news">
            <IconDiv
              style={asPath === '/news' || asPath === '/news/all' ? SelectedStyle : UnSelectedStyle}
            >
              <Image src="/images/news.svg" alt="news.svg" width={18} height={18} />
            </IconDiv>
            <TextDiv>소식</TextDiv>
          </ClientSideLink>
        </NaigationContainer>
        <NaigationContainer>
          <ClientSideLink href="/trends">
            <IconDiv style={asPath === '/trends' ? SelectedStyle : UnSelectedStyle}>
              <Image src="/images/trend.svg" alt="trend.svg" width={17} height={19} />
            </IconDiv>
            <TextDiv>트렌드</TextDiv>
          </ClientSideLink>
        </NaigationContainer>
        <NaigationContainer>
          <ClientSideLink href="/">
            <IconDiv style={asPath === '/' ? SelectedStyle : UnSelectedStyle}>
              <Image src="/images/home.svg" alt="home.svg" width={24} height={21} />
            </IconDiv>
            <TextDiv>홈</TextDiv>
          </ClientSideLink>
        </NaigationContainer>
        <NaigationContainer>
          <ClientSideLink href={`/@${userId}/buckets`}>
            <IconDiv
              style={asPath.startsWith(`/@${userId}/buckets`) ? SelectedStyle : UnSelectedStyle}
            >
              <Image src="/images/bucket.svg" alt="bucket.svg" width={18} height={16} />
            </IconDiv>
            <TextDiv>버킷</TextDiv>
          </ClientSideLink>
        </NaigationContainer>
        <NaigationContainer>
          <ClientSideLink href={`/@${userId}`}>
            <IconDiv style={asPath === `/@${userId}` ? SelectedStyle : UnSelectedStyle}>
              <Image src="/images/my.svg" alt="my.svg" width={16} height={19} />
            </IconDiv>
            <TextDiv>MY</TextDiv>
          </ClientSideLink>
        </NaigationContainer>
      </FixedHeader>
    </>
  )
}
