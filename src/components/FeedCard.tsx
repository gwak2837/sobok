import Image from 'next/image'
import { FeedListByTownQuery } from 'src/graphql/generated/types-and-hooks'
import { ArrayElement } from 'src/utils/types'
import styled from 'styled-components'

const FlexContainerLi = styled.li`
  display: flex;
  flex-flow: column nowrap;
  border-radius: 0.4rem;
  overflow: hidden;
  width: 100%;
  height: 100%;
`
const CardImage = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 105px;
  //flex-basis: 7.5rem;
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
const ContentBottomSmallWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  margin-right: 3px;
`
const ContentBottomImage = styled.div`
  height: 100%;
`
const ContentBottomText = styled.div`
  margin-left: 2px;
`

type Props = {
  feed: ArrayElement<FeedListByTownQuery['feedListByTown']>
}

export default function FeedCard({ feed }: Props) {
  const user = feed.user

  return (
    <FlexContainerLi>
      <CardImage>
        <Image
          src={feed.imageUrls?.[0] ?? '/images/default-store-cover.png'}
          alt="feed-cover"
          width="400"
          height="264"
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
        <ContentBottomSmallWrapper>
          <ContentBottomImage>
            <Image src="/images/comment.min.svg" alt="comment" width="15" height="13" />
          </ContentBottomImage>
          <ContentBottomText>{feed.likeCount}</ContentBottomText>
        </ContentBottomSmallWrapper>
        <ContentBottomSmallWrapper>
          <ContentBottomImage>
            <Image src="/images/like.min.svg" alt="like" width="15" height="13" />
          </ContentBottomImage>
          <ContentBottomText>{feed.commentCount}</ContentBottomText>
        </ContentBottomSmallWrapper>
      </ContentBottomHeader>
    </FlexContainerLi>
  )
}
