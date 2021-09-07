import { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'
import FeedCard from 'src/components/FeedCard'
import PageHead from 'src/components/PageHead'
import { useFeedListQuery } from 'src/graphql/generated/types-and-hooks'
import HomeLayout from 'src/layouts/HomeLayout'
import NavigationLayout from 'src/layouts/NavigationLayout'
import styled from 'styled-components'
import Image from 'next/image'
import { currentTown } from 'src/models/recoil'

const description = ''

const FeedContainer = styled.div`
  background-color: #fcfcfc;
  width: 100%;
  height: 100%;
  padding: 1rem;
`

const FeedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const FilterButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 9.8rem;
`
const FilterButtonActive = styled.button`
  background-color: #ff9f74;
  border: none;
  border-radius: 13px;
  text-align: center;
  font-size: 0.9rem;
  color: white;
  padding: 0.25rem 0.8rem;
`
const FilterButtonUnActive = styled.button`
  background-color: #fcfcfc;
  border: none;
  border-radius: 13px;
  text-align: center;
  font-size: 0.9rem;
  color: #5d5d5d;
  padding: 0.25rem 0.8rem;
`
const AddButtonWrapper = styled.button`
  height: 100%;
  background: none;
  border: none;
`
const GridContainerUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 200px;
  gap: 1rem;
`

export default function FeedPage() {
  const townName = useRecoilValue(currentTown)

  const { data, loading } = useFeedListQuery({ skip: !townName, variables: { town: townName } })

  const feedList = data?.feedListByTown

  return (
    <PageHead title={`${townName} 피드 - 소복`} description={description}>
      <FeedContainer>
        <FeedHeader>
          <FilterButtons>
            <FilterButtonActive>Star</FilterButtonActive>
            <FilterButtonUnActive>Followers</FilterButtonUnActive>
            <FilterButtonUnActive>All</FilterButtonUnActive>
          </FilterButtons>
          <AddButtonWrapper>
            <Image src="/images/add-button.min.svg" alt="add-button" width="24" height="24px" />
          </AddButtonWrapper>
        </FeedHeader>

        {loading ? (
          <div>loading...</div>
        ) : feedList ? (
          <GridContainerUl>
            {feedList.map((feed) => (
              <FeedCard key={feed.id} feed={feed} />
            ))}
          </GridContainerUl>
        ) : (
          <div>결과 없음</div>
        )}
      </FeedContainer>
    </PageHead>
  )
}

FeedPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <NavigationLayout>
      <HomeLayout>{page}</HomeLayout>
    </NavigationLayout>
  )
}
