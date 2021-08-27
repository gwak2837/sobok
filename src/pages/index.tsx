import Image from 'next/image'
import Link from 'next/link'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import PageHead from 'src/components/PageHead'
import TopHeader from 'src/components/TopHeader'
import NavigationLayout from 'src/layouts/NavigationLayout'
import styled from 'styled-components'
import { Tabs } from 'antd'
import type { ReactElement, ReactNode } from 'react'
import React from 'react'
import HomeLayout from 'src/layouts/HomeLayout'

export default function HomePage() {
  return (
    <PageHead>
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
