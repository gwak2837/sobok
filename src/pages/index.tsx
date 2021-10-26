import { Carousel } from 'antd'
import Image from 'next/image'
import React, { ReactElement, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useRecoilState, useRecoilValue } from 'recoil'
import { toastApolloError } from 'src/apollo/error'
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
import AllStoresIcon from 'src/svgs/AllStoresIcon'
import NoKidsIcon from 'src/svgs/NoKidsIcon'
import OutletIcon from 'src/svgs/OutletIcon'
import ParkingIcon from 'src/svgs/ParkingIcon'
import PetIcon from 'src/svgs/PetIcon'
import RooftopIcon from 'src/svgs/RooftopIcon'
import SmokeIcon from 'src/svgs/SmokeIcon'
import WholeGlassIcon from 'src/svgs/WholeGlassIcon'
import WideSofaIcon from 'src/svgs/WideSofaIcon'
import WideTableIcon from 'src/svgs/WideTableIcon'
import { getCurrentPositionFromGeolocationAPI } from 'src/utils/web-api'
import styled, { css } from 'styled-components'

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
  background: #fcfcfc;
`

const FlexContainerScroll = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;

  height: 9rem;
  padding: 1rem;
  background: #fff;
  overflow: scroll hidden;
`

const FlexContainerColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  gap: 0.3rem;

  width: 5rem;
  cursor: pointer;
`

const NotSelected = css`
  font-weight: normal;
  color: #8e8e8e;
`

const SelectableH4 = styled.h4<{ selected?: boolean }>`
  ${(p) => !p.selected && NotSelected}
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
    onError: toastApolloError,
    skip: !townName,
    variables: { town: townName, pagination: { limit } },
  })

  const stores = data?.storesByTownAndCategories

  const [hasMoreData, setHasMoreData] = useState(true)

  const infiniteScrollRef = useInfiniteScroll({
    hasMoreData,
    onIntersecting: async () => {
      if (stores && stores.length > 0) {
        const lastStore = stores[stores.length - 1]
        const response = await fetchMore({
          variables: {
            pagination: {
              lastId: lastStore.id,
              limit,
            },
          },
        }).catch(() => setHasMoreData(false))

        if (response?.data.storesByTownAndCategories?.length !== limit) setHasMoreData(false)
      }
    },
  })

  const [categories, setCategories] = useState<string[]>([])

  function updateCategories(e: any) {
    const clickedCategory = e.currentTarget.children[1].textContent

    if (clickedCategory === '전체') {
      setCategories([])
    } else {
      if (categories.includes(clickedCategory)) {
        setCategories((prev) => prev.filter((category) => category !== clickedCategory))
      } else {
        setCategories((prev) => [...prev, clickedCategory])
      }
    }
  }

  console.log('👀 - categories', categories)

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

      <FlexContainerScroll>
        <FlexContainerColumn onClick={updateCategories}>
          <AllStoresIcon selected={categories.length === 0} />
          <SelectableH4 selected={categories.length === 0}>전체</SelectableH4>
        </FlexContainerColumn>
        <FlexContainerColumn onClick={updateCategories}>
          <WideSofaIcon selected={categories.includes('편한 의자')} />
          <SelectableH4 selected={categories.includes('편한 의자')}>편한 의자</SelectableH4>
        </FlexContainerColumn>
        <FlexContainerColumn onClick={updateCategories}>
          <WideTableIcon selected={categories.includes('큰 테이블')} />
          <SelectableH4 selected={categories.includes('큰 테이블')}>큰 테이블</SelectableH4>
        </FlexContainerColumn>
        <FlexContainerColumn onClick={updateCategories}>
          <OutletIcon selected={categories.includes('콘센트')} />
          <SelectableH4 selected={categories.includes('콘센트')}>콘센트</SelectableH4>
        </FlexContainerColumn>
        <FlexContainerColumn onClick={updateCategories}>
          <RooftopIcon selected={categories.includes('야외석')} />
          <SelectableH4 selected={categories.includes('야외석')}>야외석</SelectableH4>
        </FlexContainerColumn>
        <FlexContainerColumn onClick={updateCategories}>
          <WholeGlassIcon selected={categories.includes('통유리')} />
          <SelectableH4 selected={categories.includes('통유리')}>통유리</SelectableH4>
        </FlexContainerColumn>
        <FlexContainerColumn onClick={updateCategories}>
          <ParkingIcon selected={categories.includes('주차장')} />
          <SelectableH4 selected={categories.includes('주차장')}>주차장</SelectableH4>
        </FlexContainerColumn>
        <FlexContainerColumn onClick={updateCategories}>
          <PetIcon selected={categories.includes('애견동반')} />
          <SelectableH4 selected={categories.includes('애견동반')}>애견동반</SelectableH4>
        </FlexContainerColumn>
        <FlexContainerColumn onClick={updateCategories}>
          <NoKidsIcon selected={categories.includes('노키즈')} />
          <SelectableH4 selected={categories.includes('노키즈')}>노키즈</SelectableH4>
        </FlexContainerColumn>
        <FlexContainerColumn onClick={updateCategories}>
          <SmokeIcon selected={categories.includes('흡연')} />
          <SelectableH4 selected={categories.includes('흡연')}>흡연</SelectableH4>
        </FlexContainerColumn>
      </FlexContainerScroll>

      {stores ? (
        <GridContainerUl>
          {stores.map((store) => (
            <StoreCard key={store.id} store={store} coordinates={coordinates} />
          ))}
        </GridContainerUl>
      ) : loading ? (
        <div>loading...</div>
      ) : (
        <div>매장이 없어요</div>
      )}

      {!loading && hasMoreData && <div ref={infiniteScrollRef}>무한 스크롤</div>}
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
