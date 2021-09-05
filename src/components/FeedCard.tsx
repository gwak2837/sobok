import Image from 'next/image'
import { FeedListQuery } from 'src/graphql/generated/types-and-hooks'
import { ArrayElement } from 'src/utils/types'
import styled from 'styled-components'

const FlexContainerLi = styled.li`
  display: flex;
  flex-flow: column nowrap;
  border-radius: 0.4rem;
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
`
const CardImage = styled.div`
  position: relative;
  height: 7.5rem;
  //padding-bottom: 15.63%;
  border-radius: 0.4rem;
  overflow: hidden;
  margin-bottom: 5px;
`
const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`
const UserInfoWrapper = styled.div`
  display: flex;
`
const UserImage = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  overflow: hidden;
`
const UserNickname = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  margin-left: 3px;
`
const Time = styled.div`
  font-size: 0.8rem;
`
const Content = styled.div`
  font-size: 0.8rem;
  color: #5d5d5d;
  margin-bottom: 5px;
`
const ContentBottomHeader = styled.div`
  display: flex;
  height: 1.3rem;
  font-size: 0.8rem;
`
type Props = {
  feed: ArrayElement<FeedListQuery['feedListByTown']>
}

export default function FeedCard({ feed }: Props) {
  const user = feed.user

  return (
    <FlexContainerLi>
      <CardImage>
        <Image
          src={feed.imageUrls?.[0] ?? '/images/default-store-cover.png'}
          alt={'feed-cover'}
          width="200"
          height="200"
          objectFit="cover"
        />
      </CardImage>
      <ContentHeader>
        <UserInfoWrapper>
          <UserImage>
            <Image
              src={user.imageUrl ?? '/images/default-store-cover.png'}
              alt={user.nickname ?? 'user-profile'}
              width="200"
              height="200"
              objectFit="cover"
            />
          </UserImage>
          <UserNickname>{user.nickname}</UserNickname>
        </UserInfoWrapper>
        {/* <div>{feed.creationTime}</div> */}
        <Time>10분전</Time>
      </ContentHeader>
      <Content>
        {feed.contents.map((content, i) => (
          <p key={i}>{content}</p>
        ))}
      </Content>
      <ContentBottomHeader>
        <div>{feed.likeCount}</div>
        <div>{feed.commentCount}</div>
      </ContentBottomHeader>
    </FlexContainerLi>
  )
}
