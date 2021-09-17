import { ReactElement, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import PageHead from 'src/components/PageHead'
import { useStoreDetailQuery } from 'src/graphql/generated/types-and-hooks'
import StoreLayout from 'src/layouts/StoreLayout'
import { currentStore } from 'src/models/recoil'
import styled from 'styled-components'
import Image from 'next/image'
import Script from 'next/script'
import { createNaverMap } from 'src/utils/commons'

const description = '매장 정보 페이지'

const StoreInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const InfoTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.13rem;
  padding: 0 1rem;
  background-color: white;
  font-size: 1.2rem;
  font-weight: 500;
  border: solid 1px #f0f0f0;

  span {
    display: inline-block;
    font-size: 0.9rem;
    color: #5d5d5d;
    margin-left: 2px;
  }
  button {
    border: none;
    background: none;
  }
`
const InfoContentContainer = styled.div`
  padding: 1rem;
  font-size: 1.1rem;
`
export default function StoreInfoPage() {
  const isNaverMapInitialized = useRef(false)
  const mapRef = useRef<any>()

  function initializeNaverMap(latitude: number, longitude: number) {
    mapRef.current = createNaverMap(latitude, longitude)
    isNaverMapInitialized.current = true

    new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude, longitude),
      map: mapRef.current,
    })
  }

  const { id: storeId, name: storeName } = useRecoilValue(currentStore)

  const { data, loading, error } = useStoreDetailQuery({
    onCompleted: (data) => {
      if (data.store && naver.maps.Map && !isNaverMapInitialized.current) {
        initializeNaverMap(data.store.latitude, data.store.longitude)
      }
    },
    skip: !storeId,
    variables: { storeId },
  })

  const storeDetail = data?.store

  function handleLoad() {
    if (storeDetail && !isNaverMapInitialized.current) {
      initializeNaverMap(storeDetail.latitude, storeDetail.longitude)
    }
  }

  return (
    <PageHead title={`${storeName} 정보 - 소복`} description={description}>
      <Script
        onLoad={handleLoad}
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=uprwl7nxp3"
      />
      {loading ? (
        'loading...'
      ) : storeDetail ? (
        <StoreInfoContainer>
          <InfoContentContainer>
            <div>{storeDetail.tel}</div>
            <div>{storeDetail.address}</div>
            <div>
              {storeDetail.businessHours?.map((businessHour, i) => (
                <p key={i}>{businessHour}</p>
              ))}
            </div>
            <div>{storeDetail.holidays}</div>
          </InfoContentContainer>

          <InfoTitleContainer>
            <div>상세정보</div>
            <div>
              <Image src="/images/edit.min.svg" alt="수정요청" width="14" height="14" />
              <span>수정요청</span>
            </div>
          </InfoTitleContainer>
          <InfoContentContainer>
            <div>
              {storeDetail.categories.map((categories, i) => (
                <span key={i}>{categories} </span>
              ))}
            </div>
          </InfoContentContainer>
          <InfoTitleContainer>
            <div>해시태그</div>
            <button>
              <Image src="/images/add-button.min.svg" alt="add" width="24" height="24" />
            </button>
          </InfoTitleContainer>
          <InfoContentContainer>
            {storeDetail.hashtags?.map((hashtags, i) => (
              <span key={i}>#{hashtags} </span>
            ))}
          </InfoContentContainer>
          <InfoTitleContainer>
            <div>위치</div>
          </InfoTitleContainer>
          <InfoContentContainer>
            <div id="map" ref={mapRef} style={{ width: '100%', height: '300px' }}></div>
          </InfoContentContainer>
        </StoreInfoContainer>
      ) : (
        '매장 정보가 없어요...'
      )}
    </PageHead>
  )
}

StoreInfoPage.getLayout = function getLayout(page: ReactElement) {
  return <StoreLayout>{page}</StoreLayout>
}
