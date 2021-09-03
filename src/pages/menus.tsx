import { ReactElement, useContext } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import PageHead from 'src/components/PageHead'
import HomeLayout, { HomeContext } from 'src/layouts/HomeLayout'
import NavigationLayout from 'src/layouts/NavigationLayout'
import MenuCategory from 'src/components/MenuCategory'
import StoreMenuCard from 'src/components/StoreMenuCard'

const description = ''

export default function MenusPage() {
  const { townName } = useContext(HomeContext)

  return (
    <PageHead title={`${townName} 메뉴 - 소복`} description={description}>
      <MenuCategory />
      <StoreMenuCard />
      <div>메뉴 페이지</div>
    </PageHead>
  )
}

MenusPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <NavigationLayout>
      <HomeLayout>{page}</HomeLayout>
    </NavigationLayout>
  )
}
