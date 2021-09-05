import { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'
import FeedCard from 'src/components/FeedCard'
import PageHead from 'src/components/PageHead'
import { useFeedListQuery } from 'src/graphql/generated/types-and-hooks'
import HomeLayout from 'src/layouts/HomeLayout'
import NavigationLayout from 'src/layouts/NavigationLayout'
import { currentTown } from 'src/models/recoil'

const description = ''

export default function FeedPage() {
  const townName = useRecoilValue(currentTown)

  const { data, loading } = useFeedListQuery({ skip: !townName, variables: { town: townName } })

  const feedList = data?.feedListByTown

  return (
    <PageHead title={`${townName} 피드 - 소복`} description={description}>
      {loading ? (
        'loading'
      ) : feedList ? (
        <ul>
          {feedList.map((feed) => (
            <FeedCard key={feed.id} feed={feed} />
          ))}
        </ul>
      ) : (
        ''
      )}
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
