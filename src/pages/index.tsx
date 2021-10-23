import { Carousel } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement, useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { useRecoilState, useRecoilValue } from 'recoil'
import { handleApolloError } from 'src/apollo/error'
import Category from 'src/components/Category'
import PageHead from 'src/components/PageHead'
import StoreCard from 'src/components/StoreCard'
import {
  StoreOrder,
  useStoresByTownAndCategoriesQuery,
} from 'src/graphql/generated/types-and-hooks'
import useInfiniteScroll from 'src/hooks/useInfiniteScroll'
import HomeLayout from 'src/layouts/HomeLayout'
import NavigationLayout from 'src/layouts/NavigationLayout'
import { currentCoordinates, currentTown } from 'src/models/recoil'
import { sleep } from 'src/utils'
import { getCurrentPositionFromGeolocationAPI } from 'src/utils/web-api'
import styled from 'styled-components'

import stores from './search/stores'

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

const limit = 4

export default function HomePage() {
  const townName = useRecoilValue(currentTown)

  const [coordinates, setCoordinates] = useRecoilState(currentCoordinates)

  useEffect(() => {
    if (!coordinates) {
      getCurrentPositionFromGeolocationAPI()
        .then((position) => setCoordinates(position.coords))
        .catch((error) => toast.warn(error))
    }
  }, [coordinates, setCoordinates])

  const [lastId, setLastId] = useState('')
  const [lastValue, setLastValue] = useState('')
  const [order, setOrder] = useState<StoreOrder>({})

  const { data, loading, fetchMore, refetch } = useStoresByTownAndCategoriesQuery({
    notifyOnNetworkStatusChange: true,
    onError: handleApolloError,
    skip: !townName,
    variables: { town: townName, pagination: { limit } },
  })

  const stores = data?.storesByTownAndCategories

  const [hasMoreData, setHasMoreData] = useState(true)

  async function fetchMoreStores() {
    await sleep(2000) //

    if (stores && stores.length > 0) {
      const { data } = await fetchMore({
        variables: {
          pagination: {
            lastId: stores[stores.length - 1].id,
            limit,
          },
        },
      })

      if (data.storesByTownAndCategories?.length !== limit) setHasMoreData(false)
    }
  }

  const sentryRef = useInfiniteScroll({ hasMoreData, onIntersecting: fetchMoreStores })

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

      {stores ? (
        <GridContainerUl>
          {stores.map((store) => (
            <StoreCard key={store.id} store={store} coordinates={coordinates} />
          ))}
        </GridContainerUl>
      ) : (
        <div>매장이 없어요</div>
      )}

      {loading && <div>loading...</div>}
      {!loading && hasMoreData && <div ref={sentryRef}>무한 스크롤</div>}
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
