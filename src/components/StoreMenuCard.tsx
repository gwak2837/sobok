import Image from 'next/image'
import { StoreMenusQuery } from 'src/graphql/generated/types-and-hooks'
import { ArrayElement } from 'src/utils/types'

type Props = {
  storeMenu: ArrayElement<StoreMenusQuery['menus2']>
}

function StoreMenuCard({ storeMenu }: Props) {
  return (
    <li>
      <Image src={storeMenu.imageUrls[0]} alt="store-menu" width="100" height="100" />
      <div>{storeMenu.name}</div>
      <div>{storeMenu.price}</div>
      <div>{storeMenu.hashtags}</div>
    </li>
  )
}

export default StoreMenuCard
