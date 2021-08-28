import Image from 'next/image'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { News, Trend } from 'src/components/atoms/SVGs'
import { SOBOK_COLOR, SOBOK_ACHROMATIC_COLOR } from 'src/models/constants'
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
const UnSelectedStyle = { color: SOBOK_ACHROMATIC_COLOR }

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
            <News color={asPath === '/news' || asPath === '/news/all' ? SOBOK_COLOR : undefined} />
            <TextDiv>소식</TextDiv>
          </ClientSideLink>
        </NaigationContainer>
        <NaigationContainer>
          <ClientSideLink href="/trends">
            <Trend color={asPath === '/trends' ? SOBOK_COLOR : undefined} />
            <TextDiv>트렌드</TextDiv>
          </ClientSideLink>
        </NaigationContainer>
        <NaigationContainer>
          <ClientSideLink href="/">
            <Image src="/images/home.svg" alt="home" width={24} height={21} />
            <TextDiv>홈</TextDiv>
          </ClientSideLink>
        </NaigationContainer>
        <NaigationContainer>
          <ClientSideLink href={`/@${userId}/buckets`}>
            <Image src="/images/bucket.svg" alt="bucket" width={18} height={16} />
            <TextDiv>버킷</TextDiv>
          </ClientSideLink>
        </NaigationContainer>
        <NaigationContainer>
          <ClientSideLink href={`/@${userId}`}>
            <Image src="/images/my.svg" alt="my" width={16} height={19} />
            <TextDiv>MY</TextDiv>
          </ClientSideLink>
        </NaigationContainer>
      </FixedHeader>
    </>
  )
}
