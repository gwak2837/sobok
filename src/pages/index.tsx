import styled from 'styled-components'
import Link from 'next/link'
import PageHead from 'src/components/PageHead'
import NavigationLayout from 'src/layouts/NavigationLayout'
import type { ReactElement } from 'react'
import HomeLayout from 'src/layouts/HomeLayout'
import { Carousel } from 'antd'
import Category from 'src/components/Category'

const CarouselDiv = styled.div`
  height: 9.7rem;
  line-height: 160px;
  text-align: center;
`

export default function HomePage() {
  return (
    <PageHead>
      <Carousel autoplay>
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
      <Category />
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
    </PageHead>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <NavigationLayout>
      <HomeLayout>{page}</HomeLayout>
    </NavigationLayout>
  )
}
