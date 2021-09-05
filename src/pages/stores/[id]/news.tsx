import { ReactElement, useContext } from 'react'
import { useRecoilValue } from 'recoil'
import PageHead from 'src/components/PageHead'
import StoreNewsCard from 'src/components/StoreNewsCard'
import { useStoreNewsQuery } from 'src/graphql/generated/types-and-hooks'
import StoreLayout from 'src/layouts/StoreLayout'
import { store } from 'src/models/recoil'

const description = ''

export default function StoreNewsPage() {
  const { id: storeId, name: storeName } = useRecoilValue(store)

  const { data, loading, error } = useStoreNewsQuery({ skip: !storeId, variables: { storeId } })

  const storeNews = data?.newsListByStore

  return (
    <PageHead title={`${storeName} 소식 - 소복`} description={description}>
      <div>매장 소식 페이지</div>
      {loading || !storeNews
        ? 'loading...'
        : storeNews.map((news) => <StoreNewsCard key={news.id} storeNews={news} />)}
    </PageHead>
  )
}

StoreNewsPage.getLayout = function getLayout(page: ReactElement) {
  return <StoreLayout>{page}</StoreLayout>
}
