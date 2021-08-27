import { memo } from 'react'
import {
  HEADER_HEIGHT,
  TABLET_MIN_WIDTH,
  BASIC_BACKGROUND_COLOR,
  SOBOK_COLOR,
  LIGHT_GREY,
} from 'src/models/constants'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

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

function BottomHeader() {
  const { asPath } = useRouter()

  const userId = 'userId'
  const homePageUrl = '/'
  const newsPageUrl = '/feed'
  const trendPageUrl = '/trend'
  const bucketPageUrl = '/{userId}/buckets' // TODO: bucket 페이지 만들고 경로 수정
  const myPageUrl = '/{userId}' // TODO: mypage 페이지 만들고 경로 수정

  return (
    <FixedHeader>
      <NaigationContainer>
        <Link href={homePageUrl}>
          <IconDiv style={asPath === homePageUrl ? SelectedStyle : UnSelectedStyle}>
            <Image src="/images/news.svg" alt="news" width={18} height={18} />
          </IconDiv>
          <TextDiv>소식</TextDiv>
        </Link>
      </NaigationContainer>
      <NaigationContainer>
        <Link href={trendPageUrl}>
          <IconDiv style={asPath === trendPageUrl ? SelectedStyle : UnSelectedStyle}>
            <Image src="/images/trend.svg" alt="trend" width={17} height={19} />
          </IconDiv>
          <TextDiv>트렌드</TextDiv>
        </Link>
      </NaigationContainer>
      <NaigationContainer>
        <Link href={homePageUrl}>
          <IconDiv style={asPath === homePageUrl ? SelectedStyle : UnSelectedStyle}>
            <Image src="/images/home.svg" alt="home" width={24} height={21} />
          </IconDiv>
          <TextDiv>홈</TextDiv>
        </Link>
      </NaigationContainer>
      <NaigationContainer>
        <Link href={bucketPageUrl}>
          <IconDiv style={asPath === bucketPageUrl ? SelectedStyle : UnSelectedStyle}>
            <Image src="/images/bucket.svg" alt="bucket" width={18} height={16} />
          </IconDiv>
          <TextDiv>버킷</TextDiv>
        </Link>
      </NaigationContainer>
      <NaigationContainer>
        <Link href={myPageUrl}>
          <IconDiv style={asPath === myPageUrl ? SelectedStyle : UnSelectedStyle}>
            <Image src="/images/my.svg" alt="my" width={16} height={19} />
          </IconDiv>
          <TextDiv>MY</TextDiv>
        </Link>
      </NaigationContainer>
    </FixedHeader>
  )
}

export default memo(BottomHeader)
