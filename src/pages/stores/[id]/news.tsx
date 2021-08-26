import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import PageHead from 'src/components/PageHead'
import StoreNewsCard from 'src/components/StoreNewsCard'
import { useStoreNewsQuery } from 'src/graphql/generated/types-and-hooks'
import { StoreLayout } from '.'

const description = ''

export default function StoreNewsPage() {
  const router = useRouter()

  const storeId = (router.query.id ?? '') as string

  const { data, loading, error } = useStoreNewsQuery({ skip: !storeId, variables: { storeId } })

  const storeName = data?.store?.name ?? '매장'

  return (
    <PageHead title={`${storeName} 소식 - 소복`} description={description}>
      매장 페이지
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
