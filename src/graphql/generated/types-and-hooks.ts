/* eslint-disable */
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: any
  /** A field whose value is a valid decimal degrees latitude number (53.471): https://en.wikipedia.org/wiki/Latitude */
  Latitude: any
  /** A field whose value is a valid decimal degrees longitude number (53.471): https://en.wikipedia.org/wiki/Longitude */
  Longitude: any
  /** A string that cannot be passed as an empty value */
  NonEmptyString: any
  /** Integers that will have a value greater than 0. */
  PositiveInt: any
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: any
}

export type Bucket = {
  __typename?: 'Bucket'
  creationTime: Scalars['DateTime']
  id: Scalars['ID']
  modificationTime: Scalars['DateTime']
  name: Scalars['NonEmptyString']
  type: BucketType
  /** 버킷 소유자 */
  user: User
  userId: Scalars['ID']
}

export enum BucketType {
  Menu = 'MENU',
  Store = 'STORE',
}

export type Comment = {
  __typename?: 'Comment'
  contents: Array<Scalars['NonEmptyString']>
  creationTime: Scalars['DateTime']
  /** 이 댓글이 달린 피드 */
  feed: Feed
  id: Scalars['ID']
  imageUrl?: Maybe<Scalars['URL']>
  modificationTime: Scalars['DateTime']
  /** 이 댓글의 상위 댓글 */
  parentComment?: Maybe<Comment>
  /** 댓글을 작성한 사용자 */
  user: User
}

export type Feed = {
  __typename?: 'Feed'
  commentCount: Scalars['Int']
  contents: Array<Scalars['NonEmptyString']>
  creationTime: Scalars['DateTime']
  /** 피드에 달린 해시태그 */
  hashtags?: Maybe<Array<Scalars['NonEmptyString']>>
  id: Scalars['ID']
  imageUrls: Array<Scalars['URL']>
  /** 피드 좋아요 여부 (로그인 필요) */
  isLiked: Scalars['Boolean']
  likeCount: Scalars['Int']
  modificationTime: Scalars['DateTime']
  rating: Scalars['NonEmptyString']
  /** 피드에 태그된 매장 */
  store: Store
  storeId: Scalars['ID']
  /** 피드 작성자 */
  user: User
  userId: Scalars['ID']
}

/** 기본값: 모든 사용자 */
export enum FeedOptions {
  /** 로그인 필요 */
  FollowingUser = 'FOLLOWING_USER',
  StarUser = 'STAR_USER',
}

export type FeedOrder = {
  by?: Maybe<FeedOrderBy>
  direction?: Maybe<OrderDirection>
}

/** 기본값: id */
export enum FeedOrderBy {
  CreationTime = 'CREATION_TIME',
}

/** 성별 */
export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER',
}

export type Menu = {
  __typename?: 'Menu'
  category: Scalars['NonEmptyString']
  creationTime: Scalars['DateTime']
  /** 메뉴에 달린 해시태그 */
  hashtags?: Maybe<Array<Scalars['NonEmptyString']>>
  id: Scalars['ID']
  imageUrls: Array<Scalars['URL']>
  /** 로그인한 사용자가 이 메뉴를 버킷에 담은 여부 */
  isInBucket: Scalars['Boolean']
  /** 로그인한 사용자가 이 메뉴를 좋아하는 여부 */
  isLiked: Scalars['Boolean']
  isSoldOut: Scalars['Boolean']
  modificationTime: Scalars['DateTime']
  name: Scalars['NonEmptyString']
  price: Scalars['Int']
  /** 이 메뉴를 판매하는 매장 */
  store: Store
  storeId: Scalars['ID']
}

export type MenuOrder = {
  by?: Maybe<MenuOrderBy>
  direction?: Maybe<OrderDirection>
}

/** 기본값: id */
export enum MenuOrderBy {
  Name = 'NAME',
  Price = 'PRICE',
}

export type Mutation = {
  __typename?: 'Mutation'
  /** 고유 이름 또는 이메일과 비밀번호를 전송하면 JWT 인증 토큰을 반환함 */
  login?: Maybe<UserAuthentication>
  /** JWT 인증 토큰과 같이 요청하면 로그아웃 성공 여부를 반환함 */
  logout: Scalars['Boolean']
  /** 회원가입에 필요한 정보를 주면 성공했을 때 인증 토큰을 반환함 */
  register?: Maybe<UserAuthentication>
  /** 회원탈퇴 시 사용자 정보가 모두 초기화됩 */
  unregister: Scalars['Boolean']
}

export type MutationLoginArgs = {
  passwordHash: Scalars['NonEmptyString']
  uniqueNameOrEmail: Scalars['NonEmptyString']
}

export type MutationRegisterArgs = {
  input: RegisterInput
}

export type News = {
  __typename?: 'News'
  category: Scalars['NonEmptyString']
  contents: Array<Scalars['NonEmptyString']>
  creationTime: Scalars['DateTime']
  id: Scalars['ID']
  imageUrls?: Maybe<Array<Scalars['URL']>>
  /** 뉴스 좋아요 여부 (로그인 필요) */
  isLiked: Scalars['Boolean']
  modificationTime: Scalars['DateTime']
  /** 이 소식을 올린 매장 */
  store: Store
  storeId: Scalars['ID']
  title: Scalars['NonEmptyString']
}

/** 기본값: ALL_STORE */
export enum NewsOptions {
  AllStore = 'ALL_STORE',
  /** 로그인 필요 */
  LikedStore = 'LIKED_STORE',
}

/** 기본값: 내림차순 */
export enum OrderDirection {
  Asc = 'ASC',
}

export type Pagination = {
  lastId?: Maybe<Scalars['ID']>
  lastValue?: Maybe<Scalars['NonEmptyString']>
  limit: Scalars['PositiveInt']
}

/** OAuth 공급자 */
export enum Provider {
  Google = 'GOOGLE',
  Kakao = 'KAKAO',
  Naver = 'NAVER',
  Sobok = 'SOBOK',
}

export type Query = {
  __typename?: 'Query'
  /** 메뉴 또는 매장 버킷 리스트를 반환, 로그인 상태 또는 userId를 입력해야 함 */
  buckets?: Maybe<Array<Bucket>>
  /** 피드에 달린 댓글 */
  comments?: Maybe<Array<Comment>>
  /** 특정 게시글에 달린 댓글 */
  commentsByFeed?: Maybe<Array<Maybe<Comment>>>
  /** 피드 상세 */
  feed?: Maybe<Feed>
  /** 특정 매장 피드 목록 */
  feedListByStore?: Maybe<Array<Feed>>
  /** 특정 동네 피드 목록 */
  feedListByTown?: Maybe<Array<Feed>>
  /** 이메일 중복 여부 검사 */
  isEmailUnique: Scalars['Boolean']
  /** 사용자 고유 이름 중복 여부 검사 */
  isUniqueNameUnique: Scalars['Boolean']
  /** 좋아요 누른 댓글 */
  likedComments?: Maybe<Array<Comment>>
  /** 좋아요 누른 피드 */
  likedFeed?: Maybe<Array<Feed>>
  /** 좋아요 누른 메뉴 */
  likedMenus?: Maybe<Array<Menu>>
  /** 좋아요 누른 소식 */
  likedNews?: Maybe<Array<News>>
  /** 좋아요 누른 매장 */
  likedStores?: Maybe<Array<Store>>
  /** 좋아요 누른 트렌드 */
  likedTrends?: Maybe<Array<Trend>>
  /** 인증 토큰과 같이 요청하면 사용자 정보를 반환 */
  me: User
  /** 메뉴 상세 */
  menu?: Maybe<Menu>
  /** 메뉴 상세 */
  menuByName?: Maybe<Menu>
  /** 피드에 태그된 메뉴 목록 */
  menus?: Maybe<Array<Menu>>
  /** 특정 매장 메뉴 목록 */
  menusByStore?: Maybe<Array<Menu>>
  /** 특정 동네 및 특정 카테고리 피드 목록 */
  menusByTownAndCategory?: Maybe<Array<Menu>>
  /** 메뉴 버킷에서 메뉴 가져오기 */
  menusInBucket?: Maybe<Array<Menu>>
  /** 내가 쓴 댓글 */
  myComments?: Maybe<Array<Comment>>
  /** 나를 따르는 다른 사용자 */
  myFollowers?: Maybe<Array<User>>
  /** 내가 따르고 있는 다른 사용자 */
  myFollowings?: Maybe<Array<User>>
  /** 내 메뉴 버킷 리스트 */
  myMenuBuckets?: Maybe<Array<Bucket>>
  /** 내 매장 버킷 리스트 */
  myStoreBuckets?: Maybe<Array<Bucket>>
  /** 내가 소유한 매장 */
  myStores?: Maybe<Array<Store>>
  /** 내가 쓴 피드 */
  myfeed?: Maybe<Array<Feed>>
  /** 소식 상세 */
  news?: Maybe<News>
  /** 특정 매장 소식 목록 */
  newsListByStore?: Maybe<Array<News>>
  /** 옵션별 여러 매장 소식 목록 */
  newsListByTown?: Maybe<Array<News>>
  /** 해시태그로 메뉴 검색 */
  searchFeedList?: Maybe<Array<Feed>>
  /** 해시태그로 메뉴 검색 */
  searchMenus?: Maybe<Array<Menu>>
  /** 해시태그로 매장 검색 */
  searchStores?: Maybe<Array<Store>>
  /** 특정 매장 정보 */
  store?: Maybe<Store>
  /** 특정 매장 정보 */
  storeInfo?: Maybe<Store>
  /** 동네 및 카테고리별 매장 목록 */
  storesByTownAndCategories?: Maybe<Array<Store>>
  /** 매장 버킷에만 해당 */
  storesInBucket?: Maybe<Array<Store>>
  /** 대댓글 */
  subComments?: Maybe<Array<Maybe<Comment>>>
}

export type QueryBucketsArgs = {
  type: BucketType
  userUniqueName?: Maybe<Scalars['NonEmptyString']>
}

export type QueryCommentsByFeedArgs = {
  feedId: Scalars['ID']
}

export type QueryFeedArgs = {
  id: Scalars['ID']
}

export type QueryFeedListByStoreArgs = {
  storeId: Scalars['ID']
}

export type QueryFeedListByTownArgs = {
  option?: Maybe<FeedOptions>
  town?: Maybe<Scalars['NonEmptyString']>
}

export type QueryIsEmailUniqueArgs = {
  email: Scalars['EmailAddress']
}

export type QueryIsUniqueNameUniqueArgs = {
  uniqueName: Scalars['NonEmptyString']
}

export type QueryMenuArgs = {
  id: Scalars['ID']
}

export type QueryMenuByNameArgs = {
  name: Scalars['NonEmptyString']
  storeId: Scalars['ID']
}

export type QueryMenusByStoreArgs = {
  storeId: Scalars['ID']
}

export type QueryMenusByTownAndCategoryArgs = {
  category?: Maybe<Scalars['NonEmptyString']>
  order?: Maybe<MenuOrder>
  pagination: Pagination
  town?: Maybe<Scalars['NonEmptyString']>
}

export type QueryMenusInBucketArgs = {
  bucketId: Scalars['ID']
  userUniqueName: Scalars['NonEmptyString']
}

export type QueryNewsArgs = {
  id: Scalars['ID']
}

export type QueryNewsListByStoreArgs = {
  categories?: Maybe<Array<Scalars['NonEmptyString']>>
  storeId: Scalars['ID']
}

export type QueryNewsListByTownArgs = {
  categories?: Maybe<Array<Scalars['NonEmptyString']>>
  option?: Maybe<NewsOptions>
  town?: Maybe<Scalars['NonEmptyString']>
}

export type QuerySearchFeedListArgs = {
  hashtags: Array<Scalars['NonEmptyString']>
  order?: Maybe<FeedOrder>
  pagination: Pagination
}

export type QuerySearchMenusArgs = {
  hashtags: Array<Scalars['NonEmptyString']>
  order?: Maybe<MenuOrder>
  pagination: Pagination
}

export type QuerySearchStoresArgs = {
  hashtags: Array<Scalars['NonEmptyString']>
  order?: Maybe<StoreOrder>
  pagination: Pagination
}

export type QueryStoreArgs = {
  id: Scalars['ID']
}

export type QueryStoreInfoArgs = {
  id: Scalars['ID']
}

export type QueryStoresByTownAndCategoriesArgs = {
  categories?: Maybe<Array<Scalars['NonEmptyString']>>
  order?: Maybe<StoreOrder>
  pagination: Pagination
  town?: Maybe<Scalars['NonEmptyString']>
}

export type QueryStoresInBucketArgs = {
  bucketId: Scalars['ID']
  userUniqueName: Scalars['NonEmptyString']
}

export type QuerySubCommentsArgs = {
  id: Scalars['ID']
}

export type RegisterInput = {
  bio?: Maybe<Scalars['String']>
  birth?: Maybe<Scalars['Date']>
  email: Scalars['EmailAddress']
  gender: Gender
  imageUrl?: Maybe<Scalars['URL']>
  name: Scalars['NonEmptyString']
  passwordHash: Scalars['NonEmptyString']
  phone: Scalars['NonEmptyString']
  uniqueName: Scalars['NonEmptyString']
}

export type Store = {
  __typename?: 'Store'
  address: Scalars['NonEmptyString']
  businessHours?: Maybe<Array<Scalars['NonEmptyString']>>
  categories: Array<Scalars['NonEmptyString']>
  creationTime: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  /** 매장에 달린 해시태그 */
  hashtags?: Maybe<Array<Scalars['NonEmptyString']>>
  holidays?: Maybe<Array<Scalars['Date']>>
  id: Scalars['ID']
  imageUrls?: Maybe<Array<Scalars['URL']>>
  /** 로그인한 사용자가 이 매장을 버킷에 담은 여부 */
  isInBucket: Scalars['Boolean']
  /** 로그인한 사용자가 이 매장을 좋아하는 여부 */
  isLiked: Scalars['Boolean']
  latitude: Scalars['Latitude']
  longitude: Scalars['Longitude']
  modificationTime: Scalars['DateTime']
  name: Scalars['NonEmptyString']
  registrationNumber?: Maybe<Scalars['String']>
  tel?: Maybe<Scalars['String']>
  town: Scalars['NonEmptyString']
  /** 매장을 소유한 사용자 정보 */
  user?: Maybe<User>
  userId: Scalars['ID']
}

export type StoreOrder = {
  by?: Maybe<StoreOrderBy>
  direction?: Maybe<OrderDirection>
}

/** 기본값: id */
export enum StoreOrderBy {
  Name = 'NAME',
}

export type Trend = {
  __typename?: 'Trend'
  contents: Array<Scalars['NonEmptyString']>
  creationTime: Scalars['DateTime']
  id: Scalars['ID']
  modificationTime: Scalars['DateTime']
  /** 트렌드 작성자 */
  user: User
}

export type User = {
  __typename?: 'User'
  bio?: Maybe<Scalars['String']>
  birth?: Maybe<Scalars['Date']>
  creationTime: Scalars['DateTime']
  email: Scalars['EmailAddress']
  feedCount: Scalars['Int']
  followerCount: Scalars['Int']
  followingCount: Scalars['Int']
  gender: Gender
  id: Scalars['UUID']
  imageUrl?: Maybe<Scalars['URL']>
  isEmailVerified: Scalars['Boolean']
  isStarUser: Scalars['Boolean']
  modificationTime: Scalars['DateTime']
  name: Scalars['NonEmptyString']
  nickname?: Maybe<Scalars['String']>
  phone: Scalars['NonEmptyString']
  providers: Array<Provider>
  uniqueName: Scalars['NonEmptyString']
}

export type UserAuthentication = {
  __typename?: 'UserAuthentication'
  jwt: Scalars['JWT']
  userUniqueName: Scalars['NonEmptyString']
}

export type MenuCardFragment = {
  __typename?: 'Menu'
  id: string
  name: any
  price: number
  isSoldOut: boolean
  imageUrls: Array<any>
  isLiked: boolean
  hashtags?: Maybe<Array<any>>
}

export type StoreCardFragment = {
  __typename?: 'Store'
  id: string
  name: any
  categories: Array<any>
  imageUrls?: Maybe<Array<any>>
  latitude: any
  longitude: any
  isLiked: boolean
  hashtags?: Maybe<Array<any>>
}

export type LoginMutationVariables = Exact<{
  uniqueNameOrEmail: Scalars['NonEmptyString']
  passwordHash: Scalars['NonEmptyString']
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login?: Maybe<{ __typename?: 'UserAuthentication'; userUniqueName: any; jwt: any }>
}

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = { __typename?: 'Mutation'; logout: boolean }

export type RegisterMutationVariables = Exact<{
  input: RegisterInput
}>

export type RegisterMutation = {
  __typename?: 'Mutation'
  register?: Maybe<{ __typename?: 'UserAuthentication'; userUniqueName: any; jwt: any }>
}

export type BucketMenusQueryVariables = Exact<{
  bucketId: Scalars['ID']
  userUniqueName: Scalars['NonEmptyString']
}>

export type BucketMenusQuery = {
  __typename?: 'Query'
  menusInBucket?: Maybe<
    Array<{
      __typename?: 'Menu'
      id: string
      name: any
      price: number
      isSoldOut: boolean
      imageUrls: Array<any>
      isLiked: boolean
      hashtags?: Maybe<Array<any>>
      store: { __typename?: 'Store'; id: string; name: any; address: any }
    }>
  >
}

export type BucketStoresQueryVariables = Exact<{
  bucketId: Scalars['ID']
  userUniqueName: Scalars['NonEmptyString']
}>

export type BucketStoresQuery = {
  __typename?: 'Query'
  storesInBucket?: Maybe<
    Array<{
      __typename?: 'Store'
      id: string
      name: any
      categories: Array<any>
      imageUrls?: Maybe<Array<any>>
      latitude: any
      longitude: any
      isLiked: boolean
      hashtags?: Maybe<Array<any>>
    }>
  >
}

export type FeedListQueryVariables = Exact<{
  town?: Maybe<Scalars['NonEmptyString']>
  option?: Maybe<FeedOptions>
}>

export type FeedListQuery = {
  __typename?: 'Query'
  feedListByTown?: Maybe<
    Array<{
      __typename?: 'Feed'
      id: string
      creationTime: any
      contents: Array<any>
      imageUrls: Array<any>
      likeCount: number
      commentCount: number
      isLiked: boolean
      user: { __typename?: 'User'; id: any; imageUrl?: Maybe<any>; nickname?: Maybe<string> }
    }>
  >
}

export type IsEmailUniqueQueryVariables = Exact<{
  email: Scalars['EmailAddress']
}>

export type IsEmailUniqueQuery = { __typename?: 'Query'; isEmailUnique: boolean }

export type IsUniqueNameUniqueQueryVariables = Exact<{
  uniqueName: Scalars['NonEmptyString']
}>

export type IsUniqueNameUniqueQuery = { __typename?: 'Query'; isUniqueNameUnique: boolean }

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = {
  __typename?: 'Query'
  me: { __typename?: 'User'; id: any; uniqueName: any }
}

export type MenuBucketsQueryVariables = Exact<{
  userUniqueName?: Maybe<Scalars['NonEmptyString']>
}>

export type MenuBucketsQuery = {
  __typename?: 'Query'
  buckets?: Maybe<Array<{ __typename?: 'Bucket'; id: string; name: any }>>
}

export type MenusByTownAndCategoryQueryVariables = Exact<{
  town?: Maybe<Scalars['NonEmptyString']>
  category?: Maybe<Scalars['NonEmptyString']>
  order?: Maybe<MenuOrder>
  pagination: Pagination
}>

export type MenusByTownAndCategoryQuery = {
  __typename?: 'Query'
  menusByTownAndCategory?: Maybe<
    Array<{
      __typename?: 'Menu'
      id: string
      name: any
      price: number
      isSoldOut: boolean
      imageUrls: Array<any>
      isLiked: boolean
      hashtags?: Maybe<Array<any>>
      store: { __typename?: 'Store'; id: string; name: any; latitude: any; longitude: any }
    }>
  >
}

export type NewsListQueryVariables = Exact<{
  town?: Maybe<Scalars['NonEmptyString']>
  option?: Maybe<NewsOptions>
  categories?: Maybe<Array<Scalars['NonEmptyString']> | Scalars['NonEmptyString']>
}>

export type NewsListQuery = {
  __typename?: 'Query'
  newsListByTown?: Maybe<
    Array<{
      __typename?: 'News'
      id: string
      creationTime: any
      title: any
      contents: Array<any>
      category: any
      imageUrls?: Maybe<Array<any>>
      store: { __typename?: 'Store'; id: string; name: any; imageUrls?: Maybe<Array<any>> }
    }>
  >
}

export type StoreQueryVariables = Exact<{
  storeId: Scalars['ID']
}>

export type StoreQuery = {
  __typename?: 'Query'
  store?: Maybe<{
    __typename?: 'Store'
    id: string
    name: any
    description?: Maybe<string>
    imageUrls?: Maybe<Array<any>>
    isLiked: boolean
  }>
}

export type StoreBucketsQueryVariables = Exact<{
  userUniqueName?: Maybe<Scalars['NonEmptyString']>
}>

export type StoreBucketsQuery = {
  __typename?: 'Query'
  buckets?: Maybe<Array<{ __typename?: 'Bucket'; id: string; name: any }>>
}

export type StoreDetailQueryVariables = Exact<{
  storeId: Scalars['ID']
}>

export type StoreDetailQuery = {
  __typename?: 'Query'
  store?: Maybe<{
    __typename?: 'Store'
    id: string
    tel?: Maybe<string>
    address: any
    latitude: any
    longitude: any
    registrationNumber?: Maybe<string>
    businessHours?: Maybe<Array<any>>
    holidays?: Maybe<Array<any>>
    categories: Array<any>
    hashtags?: Maybe<Array<any>>
  }>
}

export type StoreFeedQueryVariables = Exact<{
  storeId: Scalars['ID']
}>

export type StoreFeedQuery = {
  __typename?: 'Query'
  feedListByStore?: Maybe<
    Array<{
      __typename?: 'Feed'
      id: string
      creationTime: any
      contents: Array<any>
      imageUrls: Array<any>
      likeCount: number
      commentCount: number
      isLiked: boolean
      user: { __typename?: 'User'; id: any; imageUrl?: Maybe<any>; nickname?: Maybe<string> }
    }>
  >
}

export type StoreMenuQueryVariables = Exact<{
  storeId: Scalars['ID']
  menuName: Scalars['NonEmptyString']
}>

export type StoreMenuQuery = {
  __typename?: 'Query'
  menuByName?: Maybe<{
    __typename?: 'Menu'
    id: string
    name: any
    price: number
    isSoldOut: boolean
    imageUrls: Array<any>
    isLiked: boolean
    hashtags?: Maybe<Array<any>>
    store: { __typename?: 'Store'; id: string; name: any }
  }>
}

export type StoreMenusQueryVariables = Exact<{
  storeId: Scalars['ID']
}>

export type StoreMenusQuery = {
  __typename?: 'Query'
  menusByStore?: Maybe<
    Array<{
      __typename?: 'Menu'
      id: string
      name: any
      price: number
      isSoldOut: boolean
      imageUrls: Array<any>
      isLiked: boolean
      hashtags?: Maybe<Array<any>>
    }>
  >
}

export type StoreNewsQueryVariables = Exact<{
  storeId: Scalars['ID']
}>

export type StoreNewsQuery = {
  __typename?: 'Query'
  newsListByStore?: Maybe<
    Array<{
      __typename?: 'News'
      id: string
      creationTime: any
      title: any
      contents: Array<any>
      category: any
      imageUrls?: Maybe<Array<any>>
    }>
  >
}

export type StoresByTownAndCategoriesQueryVariables = Exact<{
  town?: Maybe<Scalars['NonEmptyString']>
  categories?: Maybe<Array<Scalars['NonEmptyString']> | Scalars['NonEmptyString']>
  order?: Maybe<StoreOrder>
  pagination: Pagination
}>

export type StoresByTownAndCategoriesQuery = {
  __typename?: 'Query'
  storesByTownAndCategories?: Maybe<
    Array<{
      __typename?: 'Store'
      id: string
      name: any
      categories: Array<any>
      imageUrls?: Maybe<Array<any>>
      latitude: any
      longitude: any
      isLiked: boolean
      hashtags?: Maybe<Array<any>>
    }>
  >
}

export const MenuCardFragmentDoc = gql`
  fragment menuCard on Menu {
    id
    name
    price
    isSoldOut
    imageUrls
    isLiked
    hashtags
  }
`
export const StoreCardFragmentDoc = gql`
  fragment storeCard on Store {
    id
    name
    categories
    imageUrls
    latitude
    longitude
    isLiked
    hashtags
  }
`
export const LoginDocument = gql`
  mutation Login($uniqueNameOrEmail: NonEmptyString!, $passwordHash: NonEmptyString!) {
    login(uniqueNameOrEmail: $uniqueNameOrEmail, passwordHash: $passwordHash) {
      userUniqueName
      jwt
    }
  }
`
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      uniqueNameOrEmail: // value for 'uniqueNameOrEmail'
 *      passwordHash: // value for 'passwordHash'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options)
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options)
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>
export const RegisterDocument = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      userUniqueName
      jwt
    }
  }
`
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options)
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>
export const BucketMenusDocument = gql`
  query BucketMenus($bucketId: ID!, $userUniqueName: NonEmptyString!) {
    menusInBucket(bucketId: $bucketId, userUniqueName: $userUniqueName) {
      ...menuCard
      store {
        id
        name
        address
      }
    }
  }
  ${MenuCardFragmentDoc}
`

/**
 * __useBucketMenusQuery__
 *
 * To run a query within a React component, call `useBucketMenusQuery` and pass it any options that fit your needs.
 * When your component renders, `useBucketMenusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBucketMenusQuery({
 *   variables: {
 *      bucketId: // value for 'bucketId'
 *      userUniqueName: // value for 'userUniqueName'
 *   },
 * });
 */
export function useBucketMenusQuery(
  baseOptions: Apollo.QueryHookOptions<BucketMenusQuery, BucketMenusQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<BucketMenusQuery, BucketMenusQueryVariables>(BucketMenusDocument, options)
}
export function useBucketMenusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BucketMenusQuery, BucketMenusQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<BucketMenusQuery, BucketMenusQueryVariables>(
    BucketMenusDocument,
    options
  )
}
export type BucketMenusQueryHookResult = ReturnType<typeof useBucketMenusQuery>
export type BucketMenusLazyQueryHookResult = ReturnType<typeof useBucketMenusLazyQuery>
export type BucketMenusQueryResult = Apollo.QueryResult<BucketMenusQuery, BucketMenusQueryVariables>
export const BucketStoresDocument = gql`
  query BucketStores($bucketId: ID!, $userUniqueName: NonEmptyString!) {
    storesInBucket(bucketId: $bucketId, userUniqueName: $userUniqueName) {
      ...storeCard
    }
  }
  ${StoreCardFragmentDoc}
`

/**
 * __useBucketStoresQuery__
 *
 * To run a query within a React component, call `useBucketStoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useBucketStoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBucketStoresQuery({
 *   variables: {
 *      bucketId: // value for 'bucketId'
 *      userUniqueName: // value for 'userUniqueName'
 *   },
 * });
 */
export function useBucketStoresQuery(
  baseOptions: Apollo.QueryHookOptions<BucketStoresQuery, BucketStoresQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<BucketStoresQuery, BucketStoresQueryVariables>(
    BucketStoresDocument,
    options
  )
}
export function useBucketStoresLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BucketStoresQuery, BucketStoresQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<BucketStoresQuery, BucketStoresQueryVariables>(
    BucketStoresDocument,
    options
  )
}
export type BucketStoresQueryHookResult = ReturnType<typeof useBucketStoresQuery>
export type BucketStoresLazyQueryHookResult = ReturnType<typeof useBucketStoresLazyQuery>
export type BucketStoresQueryResult = Apollo.QueryResult<
  BucketStoresQuery,
  BucketStoresQueryVariables
>
export const FeedListDocument = gql`
  query FeedList($town: NonEmptyString, $option: FeedOptions) {
    feedListByTown(town: $town, option: $option) {
      id
      creationTime
      contents
      imageUrls
      likeCount
      commentCount
      isLiked
      user {
        id
        imageUrl
        nickname
      }
    }
  }
`

/**
 * __useFeedListQuery__
 *
 * To run a query within a React component, call `useFeedListQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedListQuery({
 *   variables: {
 *      town: // value for 'town'
 *      option: // value for 'option'
 *   },
 * });
 */
export function useFeedListQuery(
  baseOptions?: Apollo.QueryHookOptions<FeedListQuery, FeedListQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<FeedListQuery, FeedListQueryVariables>(FeedListDocument, options)
}
export function useFeedListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FeedListQuery, FeedListQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<FeedListQuery, FeedListQueryVariables>(FeedListDocument, options)
}
export type FeedListQueryHookResult = ReturnType<typeof useFeedListQuery>
export type FeedListLazyQueryHookResult = ReturnType<typeof useFeedListLazyQuery>
export type FeedListQueryResult = Apollo.QueryResult<FeedListQuery, FeedListQueryVariables>
export const IsEmailUniqueDocument = gql`
  query IsEmailUnique($email: EmailAddress!) {
    isEmailUnique(email: $email)
  }
`

/**
 * __useIsEmailUniqueQuery__
 *
 * To run a query within a React component, call `useIsEmailUniqueQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsEmailUniqueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsEmailUniqueQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useIsEmailUniqueQuery(
  baseOptions: Apollo.QueryHookOptions<IsEmailUniqueQuery, IsEmailUniqueQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<IsEmailUniqueQuery, IsEmailUniqueQueryVariables>(
    IsEmailUniqueDocument,
    options
  )
}
export function useIsEmailUniqueLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<IsEmailUniqueQuery, IsEmailUniqueQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<IsEmailUniqueQuery, IsEmailUniqueQueryVariables>(
    IsEmailUniqueDocument,
    options
  )
}
export type IsEmailUniqueQueryHookResult = ReturnType<typeof useIsEmailUniqueQuery>
export type IsEmailUniqueLazyQueryHookResult = ReturnType<typeof useIsEmailUniqueLazyQuery>
export type IsEmailUniqueQueryResult = Apollo.QueryResult<
  IsEmailUniqueQuery,
  IsEmailUniqueQueryVariables
>
export const IsUniqueNameUniqueDocument = gql`
  query IsUniqueNameUnique($uniqueName: NonEmptyString!) {
    isUniqueNameUnique(uniqueName: $uniqueName)
  }
`

/**
 * __useIsUniqueNameUniqueQuery__
 *
 * To run a query within a React component, call `useIsUniqueNameUniqueQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsUniqueNameUniqueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsUniqueNameUniqueQuery({
 *   variables: {
 *      uniqueName: // value for 'uniqueName'
 *   },
 * });
 */
export function useIsUniqueNameUniqueQuery(
  baseOptions: Apollo.QueryHookOptions<IsUniqueNameUniqueQuery, IsUniqueNameUniqueQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<IsUniqueNameUniqueQuery, IsUniqueNameUniqueQueryVariables>(
    IsUniqueNameUniqueDocument,
    options
  )
}
export function useIsUniqueNameUniqueLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    IsUniqueNameUniqueQuery,
    IsUniqueNameUniqueQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<IsUniqueNameUniqueQuery, IsUniqueNameUniqueQueryVariables>(
    IsUniqueNameUniqueDocument,
    options
  )
}
export type IsUniqueNameUniqueQueryHookResult = ReturnType<typeof useIsUniqueNameUniqueQuery>
export type IsUniqueNameUniqueLazyQueryHookResult = ReturnType<
  typeof useIsUniqueNameUniqueLazyQuery
>
export type IsUniqueNameUniqueQueryResult = Apollo.QueryResult<
  IsUniqueNameUniqueQuery,
  IsUniqueNameUniqueQueryVariables
>
export const MeDocument = gql`
  query Me {
    me {
      id
      uniqueName
    }
  }
`

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>
export const MenuBucketsDocument = gql`
  query MenuBuckets($userUniqueName: NonEmptyString) {
    buckets(type: MENU, userUniqueName: $userUniqueName) {
      id
      name
    }
  }
`

/**
 * __useMenuBucketsQuery__
 *
 * To run a query within a React component, call `useMenuBucketsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenuBucketsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenuBucketsQuery({
 *   variables: {
 *      userUniqueName: // value for 'userUniqueName'
 *   },
 * });
 */
export function useMenuBucketsQuery(
  baseOptions?: Apollo.QueryHookOptions<MenuBucketsQuery, MenuBucketsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MenuBucketsQuery, MenuBucketsQueryVariables>(MenuBucketsDocument, options)
}
export function useMenuBucketsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MenuBucketsQuery, MenuBucketsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MenuBucketsQuery, MenuBucketsQueryVariables>(
    MenuBucketsDocument,
    options
  )
}
export type MenuBucketsQueryHookResult = ReturnType<typeof useMenuBucketsQuery>
export type MenuBucketsLazyQueryHookResult = ReturnType<typeof useMenuBucketsLazyQuery>
export type MenuBucketsQueryResult = Apollo.QueryResult<MenuBucketsQuery, MenuBucketsQueryVariables>
export const MenusByTownAndCategoryDocument = gql`
  query MenusByTownAndCategory(
    $town: NonEmptyString
    $category: NonEmptyString
    $order: MenuOrder
    $pagination: Pagination!
  ) {
    menusByTownAndCategory(
      town: $town
      category: $category
      order: $order
      pagination: $pagination
    ) {
      ...menuCard
      store {
        id
        name
        latitude
        longitude
      }
    }
  }
  ${MenuCardFragmentDoc}
`

/**
 * __useMenusByTownAndCategoryQuery__
 *
 * To run a query within a React component, call `useMenusByTownAndCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenusByTownAndCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenusByTownAndCategoryQuery({
 *   variables: {
 *      town: // value for 'town'
 *      category: // value for 'category'
 *      order: // value for 'order'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useMenusByTownAndCategoryQuery(
  baseOptions: Apollo.QueryHookOptions<
    MenusByTownAndCategoryQuery,
    MenusByTownAndCategoryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MenusByTownAndCategoryQuery, MenusByTownAndCategoryQueryVariables>(
    MenusByTownAndCategoryDocument,
    options
  )
}
export function useMenusByTownAndCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MenusByTownAndCategoryQuery,
    MenusByTownAndCategoryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MenusByTownAndCategoryQuery, MenusByTownAndCategoryQueryVariables>(
    MenusByTownAndCategoryDocument,
    options
  )
}
export type MenusByTownAndCategoryQueryHookResult = ReturnType<
  typeof useMenusByTownAndCategoryQuery
>
export type MenusByTownAndCategoryLazyQueryHookResult = ReturnType<
  typeof useMenusByTownAndCategoryLazyQuery
>
export type MenusByTownAndCategoryQueryResult = Apollo.QueryResult<
  MenusByTownAndCategoryQuery,
  MenusByTownAndCategoryQueryVariables
>
export const NewsListDocument = gql`
  query NewsList($town: NonEmptyString, $option: NewsOptions, $categories: [NonEmptyString!]) {
    newsListByTown(town: $town, option: $option, categories: $categories) {
      id
      creationTime
      title
      contents
      category
      imageUrls
      store {
        id
        name
        imageUrls
      }
    }
  }
`

/**
 * __useNewsListQuery__
 *
 * To run a query within a React component, call `useNewsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsListQuery({
 *   variables: {
 *      town: // value for 'town'
 *      option: // value for 'option'
 *      categories: // value for 'categories'
 *   },
 * });
 */
export function useNewsListQuery(
  baseOptions?: Apollo.QueryHookOptions<NewsListQuery, NewsListQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<NewsListQuery, NewsListQueryVariables>(NewsListDocument, options)
}
export function useNewsListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<NewsListQuery, NewsListQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<NewsListQuery, NewsListQueryVariables>(NewsListDocument, options)
}
export type NewsListQueryHookResult = ReturnType<typeof useNewsListQuery>
export type NewsListLazyQueryHookResult = ReturnType<typeof useNewsListLazyQuery>
export type NewsListQueryResult = Apollo.QueryResult<NewsListQuery, NewsListQueryVariables>
export const StoreDocument = gql`
  query Store($storeId: ID!) {
    store(id: $storeId) {
      id
      name
      description
      imageUrls
      isLiked
    }
  }
`

/**
 * __useStoreQuery__
 *
 * To run a query within a React component, call `useStoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useStoreQuery(
  baseOptions: Apollo.QueryHookOptions<StoreQuery, StoreQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StoreQuery, StoreQueryVariables>(StoreDocument, options)
}
export function useStoreLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StoreQuery, StoreQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StoreQuery, StoreQueryVariables>(StoreDocument, options)
}
export type StoreQueryHookResult = ReturnType<typeof useStoreQuery>
export type StoreLazyQueryHookResult = ReturnType<typeof useStoreLazyQuery>
export type StoreQueryResult = Apollo.QueryResult<StoreQuery, StoreQueryVariables>
export const StoreBucketsDocument = gql`
  query StoreBuckets($userUniqueName: NonEmptyString) {
    buckets(type: STORE, userUniqueName: $userUniqueName) {
      id
      name
    }
  }
`

/**
 * __useStoreBucketsQuery__
 *
 * To run a query within a React component, call `useStoreBucketsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreBucketsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreBucketsQuery({
 *   variables: {
 *      userUniqueName: // value for 'userUniqueName'
 *   },
 * });
 */
export function useStoreBucketsQuery(
  baseOptions?: Apollo.QueryHookOptions<StoreBucketsQuery, StoreBucketsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StoreBucketsQuery, StoreBucketsQueryVariables>(
    StoreBucketsDocument,
    options
  )
}
export function useStoreBucketsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StoreBucketsQuery, StoreBucketsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StoreBucketsQuery, StoreBucketsQueryVariables>(
    StoreBucketsDocument,
    options
  )
}
export type StoreBucketsQueryHookResult = ReturnType<typeof useStoreBucketsQuery>
export type StoreBucketsLazyQueryHookResult = ReturnType<typeof useStoreBucketsLazyQuery>
export type StoreBucketsQueryResult = Apollo.QueryResult<
  StoreBucketsQuery,
  StoreBucketsQueryVariables
>
export const StoreDetailDocument = gql`
  query StoreDetail($storeId: ID!) {
    store(id: $storeId) {
      id
      tel
      address
      latitude
      longitude
      registrationNumber
      businessHours
      holidays
      categories
      hashtags
    }
  }
`

/**
 * __useStoreDetailQuery__
 *
 * To run a query within a React component, call `useStoreDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreDetailQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useStoreDetailQuery(
  baseOptions: Apollo.QueryHookOptions<StoreDetailQuery, StoreDetailQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StoreDetailQuery, StoreDetailQueryVariables>(StoreDetailDocument, options)
}
export function useStoreDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StoreDetailQuery, StoreDetailQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StoreDetailQuery, StoreDetailQueryVariables>(
    StoreDetailDocument,
    options
  )
}
export type StoreDetailQueryHookResult = ReturnType<typeof useStoreDetailQuery>
export type StoreDetailLazyQueryHookResult = ReturnType<typeof useStoreDetailLazyQuery>
export type StoreDetailQueryResult = Apollo.QueryResult<StoreDetailQuery, StoreDetailQueryVariables>
export const StoreFeedDocument = gql`
  query StoreFeed($storeId: ID!) {
    feedListByStore(storeId: $storeId) {
      id
      creationTime
      contents
      imageUrls
      likeCount
      commentCount
      isLiked
      user {
        id
        imageUrl
        nickname
      }
    }
  }
`

/**
 * __useStoreFeedQuery__
 *
 * To run a query within a React component, call `useStoreFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreFeedQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useStoreFeedQuery(
  baseOptions: Apollo.QueryHookOptions<StoreFeedQuery, StoreFeedQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StoreFeedQuery, StoreFeedQueryVariables>(StoreFeedDocument, options)
}
export function useStoreFeedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StoreFeedQuery, StoreFeedQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StoreFeedQuery, StoreFeedQueryVariables>(StoreFeedDocument, options)
}
export type StoreFeedQueryHookResult = ReturnType<typeof useStoreFeedQuery>
export type StoreFeedLazyQueryHookResult = ReturnType<typeof useStoreFeedLazyQuery>
export type StoreFeedQueryResult = Apollo.QueryResult<StoreFeedQuery, StoreFeedQueryVariables>
export const StoreMenuDocument = gql`
  query StoreMenu($storeId: ID!, $menuName: NonEmptyString!) {
    menuByName(storeId: $storeId, name: $menuName) {
      id
      name
      price
      isSoldOut
      imageUrls
      isLiked
      hashtags
      store {
        id
        name
      }
    }
  }
`

/**
 * __useStoreMenuQuery__
 *
 * To run a query within a React component, call `useStoreMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreMenuQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      menuName: // value for 'menuName'
 *   },
 * });
 */
export function useStoreMenuQuery(
  baseOptions: Apollo.QueryHookOptions<StoreMenuQuery, StoreMenuQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StoreMenuQuery, StoreMenuQueryVariables>(StoreMenuDocument, options)
}
export function useStoreMenuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StoreMenuQuery, StoreMenuQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StoreMenuQuery, StoreMenuQueryVariables>(StoreMenuDocument, options)
}
export type StoreMenuQueryHookResult = ReturnType<typeof useStoreMenuQuery>
export type StoreMenuLazyQueryHookResult = ReturnType<typeof useStoreMenuLazyQuery>
export type StoreMenuQueryResult = Apollo.QueryResult<StoreMenuQuery, StoreMenuQueryVariables>
export const StoreMenusDocument = gql`
  query StoreMenus($storeId: ID!) {
    menusByStore(storeId: $storeId) {
      ...menuCard
    }
  }
  ${MenuCardFragmentDoc}
`

/**
 * __useStoreMenusQuery__
 *
 * To run a query within a React component, call `useStoreMenusQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreMenusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreMenusQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useStoreMenusQuery(
  baseOptions: Apollo.QueryHookOptions<StoreMenusQuery, StoreMenusQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StoreMenusQuery, StoreMenusQueryVariables>(StoreMenusDocument, options)
}
export function useStoreMenusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StoreMenusQuery, StoreMenusQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StoreMenusQuery, StoreMenusQueryVariables>(StoreMenusDocument, options)
}
export type StoreMenusQueryHookResult = ReturnType<typeof useStoreMenusQuery>
export type StoreMenusLazyQueryHookResult = ReturnType<typeof useStoreMenusLazyQuery>
export type StoreMenusQueryResult = Apollo.QueryResult<StoreMenusQuery, StoreMenusQueryVariables>
export const StoreNewsDocument = gql`
  query StoreNews($storeId: ID!) {
    newsListByStore(storeId: $storeId) {
      id
      creationTime
      title
      contents
      category
      imageUrls
    }
  }
`

/**
 * __useStoreNewsQuery__
 *
 * To run a query within a React component, call `useStoreNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreNewsQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useStoreNewsQuery(
  baseOptions: Apollo.QueryHookOptions<StoreNewsQuery, StoreNewsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StoreNewsQuery, StoreNewsQueryVariables>(StoreNewsDocument, options)
}
export function useStoreNewsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StoreNewsQuery, StoreNewsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StoreNewsQuery, StoreNewsQueryVariables>(StoreNewsDocument, options)
}
export type StoreNewsQueryHookResult = ReturnType<typeof useStoreNewsQuery>
export type StoreNewsLazyQueryHookResult = ReturnType<typeof useStoreNewsLazyQuery>
export type StoreNewsQueryResult = Apollo.QueryResult<StoreNewsQuery, StoreNewsQueryVariables>
export const StoresByTownAndCategoriesDocument = gql`
  query StoresByTownAndCategories(
    $town: NonEmptyString
    $categories: [NonEmptyString!]
    $order: StoreOrder
    $pagination: Pagination!
  ) {
    storesByTownAndCategories(
      town: $town
      categories: $categories
      order: $order
      pagination: $pagination
    ) {
      ...storeCard
    }
  }
  ${StoreCardFragmentDoc}
`

/**
 * __useStoresByTownAndCategoriesQuery__
 *
 * To run a query within a React component, call `useStoresByTownAndCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoresByTownAndCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoresByTownAndCategoriesQuery({
 *   variables: {
 *      town: // value for 'town'
 *      categories: // value for 'categories'
 *      order: // value for 'order'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useStoresByTownAndCategoriesQuery(
  baseOptions: Apollo.QueryHookOptions<
    StoresByTownAndCategoriesQuery,
    StoresByTownAndCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StoresByTownAndCategoriesQuery, StoresByTownAndCategoriesQueryVariables>(
    StoresByTownAndCategoriesDocument,
    options
  )
}
export function useStoresByTownAndCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StoresByTownAndCategoriesQuery,
    StoresByTownAndCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    StoresByTownAndCategoriesQuery,
    StoresByTownAndCategoriesQueryVariables
  >(StoresByTownAndCategoriesDocument, options)
}
export type StoresByTownAndCategoriesQueryHookResult = ReturnType<
  typeof useStoresByTownAndCategoriesQuery
>
export type StoresByTownAndCategoriesLazyQueryHookResult = ReturnType<
  typeof useStoresByTownAndCategoriesLazyQuery
>
export type StoresByTownAndCategoriesQueryResult = Apollo.QueryResult<
  StoresByTownAndCategoriesQuery,
  StoresByTownAndCategoriesQueryVariables
>
