import Image from 'next/image'
import { NewsListQuery } from 'src/graphql/generated/types-and-hooks'
import { ArrayElement } from 'src/utils/types'

type Props = {
  news: ArrayElement<NewsListQuery['newsListByTown']>
}

function NewsCard({ news }: Props) {
  const store = news.store

  return (
    <li>
      ddf
      <Image
        src={store.imageUrls?.[0] ?? '/images/default-store-cover.png'}
        alt={store.name ?? 'store-cover'}
        width="200"
        height="200"
        objectFit="cover"
      />
      <div>{store.name}</div>
      <div>{news.creationTime}</div>
      {news.contents.map((content, i) => (
        <p key={i}>{content}</p>
      ))}
    </li>
  )
}

export default NewsCard
