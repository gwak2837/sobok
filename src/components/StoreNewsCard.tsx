import Image from 'next/image'
import { StoreNewsQuery } from 'src/graphql/generated/types-and-hooks'
import { ArrayElement } from 'src/utils/types'

type Props = {
  storeNews: ArrayElement<StoreNewsQuery['news3']>
}

function StoreNewsCard({ storeNews }: Props) {
  return (
    <li>
      {storeNews.imageUrls && (
        <Image src={storeNews.imageUrls[0]} alt="store-menu" width="100" height="100" />
      )}
      {storeNews.contents.map((content, i) => (
        <p key={i}>{content}</p>
      ))}
      <div>{storeNews.creationTime}</div>
      <div>{storeNews.category}</div>
    </li>
  )
}

export default StoreNewsCard
