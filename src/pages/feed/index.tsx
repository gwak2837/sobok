import { ReactElement, useContext } from 'react'
import FeedCard from 'src/components/FeedCard'
import PageHead from 'src/components/PageHead'
import { useFeedListQuery } from 'src/graphql/generated/types-and-hooks'
import HomeLayout, { HomeContext } from 'src/layouts/HomeLayout'
import NavigationLayout from 'src/layouts/NavigationLayout'

const description = ''

export default function FeedPage() {
  const { townName } = useContext(HomeContext)

  const { data, loading } = useFeedListQuery({ skip: !townName, variables: { town: townName } })

  const feedList = data?.feedListByTown

  return (
    <PageHead title={`${townName} 피드 - 소복`} description={description}>
      {loading || !feedList ? (
        'loading'
      ) : (
        <ul>
          {feedList.map((feed) => (
            <FeedCard key={feed.id} feed={feed} />
          ))}
        </ul>
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
