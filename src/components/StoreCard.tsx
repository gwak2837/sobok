import Image from 'next/image'
import { StoresQuery, useStoreQuery } from 'src/graphql/generated/types-and-hooks'

import { ArrayElement } from 'src/utils/types'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'

const FlexContainerLi = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
  overflow: hidden;
  //background-color: #c4c4c4;
`
const CardImage = styled.div`
  position: relative;
  height: 7.5em;
  padding-bottom: 15.63%;
  border-radius: 0.4rem;
  overflow: hidden;
  //background-color: #cee7f5;
`

const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
  //background-color: #eaf7e7;
`
const CardCategory = styled.div`
  flex-wrap: wrap;
  padding: 0.2rem;
`
const CategoryButton = styled.button`
  padding: 0.4rem 0.5rem;
  text-align: center;
  color: white;
  font-size: 0.8rem;
  border-radius: 3rem;
  border: none;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  background-color: #ff9f74;
`

const CardTags = styled.div`
  padding: 0.2rem;
  //background-color: #eaf7e7;
`
const Tag = styled.span`
  flex-wrap: nowrap;
  color: grey;
  font-size: 0.8rem;
`

const LikeButton = styled.button`
  border: none;
  position: relative;
  top: 100%;
  left: 90%;
  width: 15px;
  height: 13px;
  z-index: 1;
  opacity: 0.6;
  cursor: pointer;
`

type Props = {
  store: ArrayElement<StoresQuery['storesByTownAndCategory']>
}

function StoreCard({ store }: Props) {
  const router = useRouter()

  const storeId = (router.query.id ?? '') as string

  return (
    <FlexContainerLi>
      <CardImage>
        <Link href={`/stores/${storeId}`} passHref>
          <Image
            src={store.imageUrls?.[0] ?? '/images/default-store-cover.png'}
            alt={store.name ?? 'store-cover'}
            layout="fill"
            objectFit="cover"
          />
        </Link>
        <LikeButton>
          <Image src="/images/like.min.svg" alt="like" layout="fill" />
        </LikeButton>
      </CardImage>
      <CardInfo>
        <div>{store.name}</div>
        <div>30m</div>
      </CardInfo>
      <CardCategory>
        {store.categories.map((category, i) => (
          <CategoryButton key={i}>{category}</CategoryButton>
        ))}
      </CardCategory>
      <CardTags>
        {store.hashtags?.map((hashtag, i) => (
          <Tag key={i}>#{hashtag} </Tag>
        ))}
      </CardTags>
    </FlexContainerLi>
  )
}

export default StoreCard
