import Image from 'next/image'
import { useRouter } from 'next/router'
import type { StoreMenusQuery } from 'src/graphql/generated/types-and-hooks'
import type { ArrayElement } from 'src/utils/types'

type Props = {
  storeMenu: ArrayElement<StoreMenusQuery['menusByStore']>
}

function StoreMenuCard({ storeMenu }: Props) {
  const router = useRouter()

  function goToStoreMenuPage() {
    router.push(`${router.asPath}/${storeMenu.name}`)
  }

  return (
    <li onClick={goToStoreMenuPage}>
      <Image src={storeMenu.imageUrls[0]} alt="store-menu" width="100" height="100" />
      <div>{storeMenu.name}</div>
      <div>{storeMenu.price}</div>
      <div>{storeMenu.hashtags}</div>
    </li>
  )
}

export default StoreMenuCard
