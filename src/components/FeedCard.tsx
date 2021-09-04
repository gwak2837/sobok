import Image from 'next/image'
import { FeedListQuery } from 'src/graphql/generated/types-and-hooks'
import { ArrayElement } from 'src/utils/types'
import styled from 'styled-components'

const Border = styled.li`
  border: solid;
`

type Props = {
  feed: ArrayElement<FeedListQuery['feedListByTown']>
}

export default function FeedCard({ feed }: Props) {
  const user = feed.user

  return (
    <Border>
      <Image
        src={feed.imageUrls?.[0] ?? '/images/default-store-cover.png'}
        alt={'feed-cover'}
        width="200"
        height="200"
        objectFit="cover"
      />
      <Image
        src={user.imageUrl ?? '/images/default-store-cover.png'}
        alt={user.nickname ?? 'user-profile'}
        width="200"
        height="200"
        objectFit="cover"
      />
      <div>{user.nickname}</div>
      <div>
        {feed.contents.map((content, i) => (
          <p key={i}>{content}</p>
        ))}
      </div>
      <div>{feed.likeCount}</div>
      <div>{feed.commentCount}</div>
    </Border>
  )
}
