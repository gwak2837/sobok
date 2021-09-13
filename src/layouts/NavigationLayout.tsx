import Image from 'next/image'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { useRecoilValue } from 'recoil'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { News, Trend } from 'src/components/atoms/SVGs'
import { useMeQuery } from 'src/graphql/generated/types-and-hooks'
import { SOBOK_COLOR, SOBOK_ACHROMATIC_COLOR } from 'src/models/constants'
import { currentUser } from 'src/models/recoil'
import { TABLET_MIN_WIDTH } from 'src/utils/constants'
import styled from 'styled-components'

const NAVIGATION_HEIGHT = '5rem'

const Padding = styled.div`
  padding: ${NAVIGATION_HEIGHT};
`

const FixedHeader = styled.div`
  position: fixed;
  bottom: 0;
  //left: 50%;
  z-index: 1;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: center;

  width: 100%;
  max-width: ${TABLET_MIN_WIDTH};
  height: ${NAVIGATION_HEIGHT};
  box-shadow: 0 -3px 3px 0 rgba(0, 0, 0, 0.06);
  background-color: #fff;
  //transform: translateX(-50%);
`

const NaigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`
const IconDiv = styled.div`
  text-align: center;
`

const TextDiv = styled.div`
  text-align: center;
`

const SelectedStyle = { color: SOBOK_COLOR }
const UnSelectedStyle = { color: SOBOK_ACHROMATIC_COLOR }

type Props = {
  children: ReactNode
}

export default function NavigationLayout({ children }: Props) {
  const { uniqueName: userUniqueName } = useRecoilValue(currentUser)

  const { data, loading } = useMeQuery({ skip: Boolean(userUniqueName) })

  const userUniqueName2 = data?.me?.uniqueName

  const { asPath } = useRouter()

  return (
    <>
      {children}
      <Padding />
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
          <ClientSideLink href={`/@${userUniqueName || userUniqueName2}/store-buckets`}>
            <Image src="/images/bucket.svg" alt="bucket" width={18} height={16} />
            <TextDiv>버킷 {loading && 'loading...'}</TextDiv>
          </ClientSideLink>
        </NaigationContainer>
        <NaigationContainer>
          <ClientSideLink href={`/@${userUniqueName || userUniqueName2}`}>
            <Image src="/images/my.svg" alt="my" width={16} height={19} />
            <TextDiv>MY {loading && 'loading...'}</TextDiv>
          </ClientSideLink>
        </NaigationContainer>
      </FixedHeader>
    </>
  )
}
