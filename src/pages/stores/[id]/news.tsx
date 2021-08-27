import { ReactElement, useContext } from 'react'
import PageHead from 'src/components/PageHead'
import StoreNewsCard from 'src/components/StoreNewsCard'
import { useStoreNewsQuery } from 'src/graphql/generated/types-and-hooks'
import { StoreContext, StoreLayout } from '.'

const description = ''

export default function StoreNewsPage() {
  const storeContext = useContext(StoreContext)
  const storeId = storeContext.id
  const storeName = storeContext.name

  const { data, loading, error } = useStoreNewsQuery({ skip: !storeId, variables: { storeId } })

  return (
    <PageHead title={`${storeName} 소식 - 소복`} description={description}>
      매장 소식 페이지
      {loading && 'loading...'}
      {data?.news3?.map((news) => (
        <StoreNewsCard key={news.id} storeNews={news} />
      ))}
    </PageHead>
  )
}

StoreNewsPage.getLayout = function getLayout(page: ReactElement) {
  return <StoreLayout>{page}</StoreLayout>
}
