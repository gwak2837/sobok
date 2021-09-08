import { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'
import PageHead from 'src/components/PageHead'
import { useStoreDetailQuery } from 'src/graphql/generated/types-and-hooks'
import StoreLayout from 'src/layouts/StoreLayout'
import { store } from 'src/models/recoil'
import styled from 'styled-components'
import Image from 'next/image'

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
  const { id: storeId, name: storeName } = useRecoilValue(store)

  const { data, loading, error } = useStoreDetailQuery({ skip: !storeId, variables: { storeId } })

  const storeDetail = data?.store

  return (
    <PageHead title={`${storeName} 정보 - 소복`} description={description}>
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
            <div>
              {storeDetail.hashtags?.map((hashtags, i) => (
                <span key={i}>#{hashtags} </span>
              ))}{' '}
            </div>
          </InfoContentContainer>
        </StoreInfoContainer>
      ) : (
        ''
      )}
    </PageHead>
  )
}

StoreInfoPage.getLayout = function getLayout(page: ReactElement) {
  return <StoreLayout>{page}</StoreLayout>
}
