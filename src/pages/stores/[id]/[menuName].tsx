import { useRouter } from 'next/router'
import PageHead from 'src/components/PageHead'

const description = ''

export default function StoreMenuPage() {
  const router = useRouter()

  const storeId = (router.query.id ?? '') as string

  const { data, loading } = useStoreMenuQuery({ skip: !storeId, variables: { storeId } })

  const store = data?.store
  const storeName = store?.name ?? '매장'

  return (
    <PageHead title="{매장이름} {메뉴이름} - 소복" description={description}>
      매장 메뉴 상세 페이지
    </PageHead>
  )
}
