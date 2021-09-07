import Image from 'next/image'
import { StoreNewsQuery } from 'src/graphql/generated/types-and-hooks'
import { ArrayElement } from 'src/utils/types'

type Props = {
  storeNews: ArrayElement<StoreNewsQuery['newsListByStore']>
}

function StoreNewsCard({ storeNews }: Props) {
  return (
    <li>
      {storeNews.imageUrls && (
        <Image src={storeNews.imageUrls[0]} alt="store-menu" width="100" height="100" />
      )}
      <div>디저트정</div>
      <div>{storeNews.category}</div>
      <div>{storeNews.creationTime}</div>
      {storeNews.contents.map((content, i) => (
        <p key={i}>{content}</p>
      ))}
    </li>
  )
}

export default StoreNewsCard
