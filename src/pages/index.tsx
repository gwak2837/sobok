import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import PageHead from 'src/components/PageHead'
import NavigationLayout from 'src/layouts/NavigationLayout'
import { ReactElement, useEffect } from 'react'
import HomeLayout from 'src/layouts/HomeLayout'
import { Carousel } from 'antd'
import Category from 'src/components/Category'
import { useStoresQuery } from 'src/graphql/generated/types-and-hooks'
import StoreCard from 'src/components/StoreCard'
import { useRecoilState, useRecoilValue } from 'recoil'
import { currentLocation, currentTown } from 'src/models/recoil'
import { toast } from 'react-toastify'
import { getCurrentPositionFromGeolocationAPI } from 'src/utils/web-api'

const CarouselDiv = styled.div`
  position: relative;
  height: 9.7rem;
  line-height: 160px;
  text-align: center;
  background: #f6f6f6;
`

const GridContainerUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(calc(180px + 10vw), auto);
  padding: 1rem;
  gap: 1rem;
  background-color: #fcfcfc;
`

export default function HomePage() {
  const townName = useRecoilValue(currentTown)
  const [coordinates, setCoordinates] = useRecoilState(currentLocation)

  const { data, loading } = useStoresQuery({ skip: !townName, variables: { town: townName } })

  const stores = data?.storesByTownAndCategory

  useEffect(() => {
    if (!coordinates) {
      getCurrentPositionFromGeolocationAPI()
        .then((position) => setCoordinates(position.coords))
        .catch((error) => toast.warn(error))
    }
  }, [coordinates, setCoordinates])

  return (
    <PageHead>
      <Carousel autoplay>
        <CarouselDiv>
          <Image src="/images/carousel@3x.webp" alt="carousel" layout="fill" />
        </CarouselDiv>
        <CarouselDiv>
          <Image src="/images/carousel@3x.webp" alt="carousel" layout="fill" />
        </CarouselDiv>
        <CarouselDiv>
          <Image src="/images/carousel@3x.webp" alt="carousel" layout="fill" />
        </CarouselDiv>
        <CarouselDiv>
          <Image src="/images/carousel@3x.webp" alt="carousel" layout="fill" />
        </CarouselDiv>
      </Carousel>

      <Category />

      {loading ? (
        <div>loading</div>
      ) : stores ? (
        <GridContainerUl>
          {stores.map((store) => (
            <StoreCard key={store.id} store={store} coordinates={coordinates} />
          ))}
        </GridContainerUl>
      ) : (
        <div>매장 목록이 없어요</div>
      )}

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
