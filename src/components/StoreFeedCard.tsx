import Image from 'next/image'
import type { StoreFeedQuery } from 'src/graphql/generated/types-and-hooks'
import type { ArrayElement } from 'src/utils/types'

type Props = {
  storeFeed: ArrayElement<StoreFeedQuery['feedListByStore']>
}

function StoreFeedCard({ storeFeed }: Props) {
  return (
    <li>
      <Image src={storeFeed.imageUrls[0]} alt="store-menu" width="100" height="100" />
      {storeFeed.contents.map((content, i) => (
        <p key={i}>{content}</p>
      ))}
    </li>
  )
}

export default StoreFeedCard
