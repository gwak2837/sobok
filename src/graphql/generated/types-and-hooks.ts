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
  /** A string that cannot be passed as an empty value */
  NonEmptyString: any
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any
}

export type Bucket = {
  __typename?: 'Bucket'
  id: Scalars['ID']
  creationTime: Scalars['DateTime']
  modificationTime: Scalars['DateTime']
  name: Scalars['NonEmptyString']
  /** from other table */
  user: User
}

export type Comment = {
  __typename?: 'Comment'
  id: Scalars['ID']
  creationTime: Scalars['DateTime']
  modificationTime: Scalars['DateTime']
  contents: Array<Scalars['NonEmptyString']>
  /** nullable */
  imageUrl?: Maybe<Scalars['URL']>
  /** from other table */
  feed: Feed
  user: User
  /** from other table - nullable */
  comment?: Maybe<Comment>
}

export type Feed = {
  __typename?: 'Feed'
  id: Scalars['ID']
  creationTime: Scalars['DateTime']
  modificationTime: Scalars['DateTime']
  rating: Scalars['NonEmptyString']
  contents: Array<Scalars['NonEmptyString']>
  imageUrls: Array<Scalars['URL']>
  likeCount: Scalars['Int']
  commentCount: Scalars['Int']
  /** from other table */
  user: User
  /** from other table - nullable */
  comments?: Maybe<Array<Comment>>
  hashtags?: Maybe<Array<Scalars['NonEmptyString']>>
  menus?: Maybe<Array<Menu>>
  store?: Maybe<Store>
}

/** 성별 */
export enum Gender {
  Other = 'OTHER',
  Male = 'MALE',
  Female = 'FEMALE',
}

export type Menu = {
  __typename?: 'Menu'
  id: Scalars['ID']
  creationTime: Scalars['DateTime']
  modificationTime: Scalars['DateTime']
  name: Scalars['NonEmptyString']
  price: Scalars['Int']
  imageUrls: Array<Scalars['URL']>
  category: Scalars['NonEmptyString']
  /** from other table */
  isInBucket: Scalars['Boolean']
  isLiked: Scalars['Boolean']
  store: Store
  /** from other table - nullable */
  hashtags?: Maybe<Array<Scalars['NonEmptyString']>>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** 회원가입에 필요한 정보를 주면 성공했을 때 인증 토큰을 반환한다. */
  register: Scalars['JWT']
  /** 회원탈퇴 시 사용자 정보가 모두 초기화된다. */
  unregister: Scalars['Boolean']
  /** 이메일과 1번 해싱한 비밀번호를 전송하면 인증 토큰을 반환한다. */
  login: Scalars['JWT']
  /** 인증 토큰과 같이 요청하면 로그아웃 성공 여부를 반환한다. */
  logout: Scalars['Boolean']
}

export type MutationRegisterArgs = {
  input: RegisterInput
}

export type MutationLoginArgs = {
  email: Scalars['EmailAddress']
  passwordHash: Scalars['NonEmptyString']
}

export type News = {
  __typename?: 'News'
  id: Scalars['ID']
  creationTime: Scalars['DateTime']
  modificationTime: Scalars['DateTime']
  title: Scalars['NonEmptyString']
  contents: Array<Scalars['NonEmptyString']>
  category: Scalars['NonEmptyString']
  /** nullable */
  imageUrls?: Maybe<Array<Scalars['URL']>>
  /** from other table */
  isLiked: Scalars['Boolean']
  store: Store
}

/** OAuth 공급자 */
export enum Provider {
  Sobok = 'SOBOK',
  Google = 'GOOGLE',
  Naver = 'NAVER',
  Kakao = 'KAKAO',
}

export type Query = {
  __typename?: 'Query'
  storesByTown: Array<Store>
  /** 인증 토큰과 같이 요청하면 사용자 정보를 반환 */
  me: User
  /** 이메일 중복 여부 검사 */
  isEmailUnique: Scalars['Boolean']
}

export type QueryStoresByTownArgs = {
  town: Scalars['NonEmptyString']
}

export type QueryIsEmailUniqueArgs = {
  email: Scalars['EmailAddress']
}

export type RegisterInput = {
  uniqueName: Scalars['NonEmptyString']
  email: Scalars['EmailAddress']
  passwordHash: Scalars['NonEmptyString']
  name: Scalars['NonEmptyString']
  phone: Scalars['NonEmptyString']
  gender: Gender
  bio?: Maybe<Scalars['String']>
  birth?: Maybe<Scalars['Date']>
  imageUrl?: Maybe<Scalars['URL']>
}

export type Store = {
  __typename?: 'Store'
  id: Scalars['ID']
  creationTime: Scalars['DateTime']
  modificationTime: Scalars['DateTime']
  name: Scalars['NonEmptyString']
  town: Scalars['NonEmptyString']
  address: Scalars['NonEmptyString']
  categories: Array<Scalars['NonEmptyString']>
  takeout: Scalars['Boolean']
  /** nullable */
  tel?: Maybe<Scalars['String']>
  registrationNumber?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  businessHours?: Maybe<Array<Scalars['NonEmptyString']>>
  holidays?: Maybe<Array<Scalars['Date']>>
  imageUrls?: Maybe<Array<Scalars['URL']>>
  userId: Scalars['ID']
  /** from other table */
  isInBucket: Scalars['Boolean']
  isLiked: Scalars['Boolean']
  menus: Array<Menu>
  /** from other table - nullable */
  hashtags?: Maybe<Array<Scalars['NonEmptyString']>>
  user?: Maybe<User>
}

export type Trend = {
  __typename?: 'Trend'
  id: Scalars['ID']
  creationTime: Scalars['DateTime']
  modificationTime: Scalars['DateTime']
  contents: Array<Scalars['NonEmptyString']>
  /** from other table */
  user: User
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  creationTime: Scalars['DateTime']
  modificationTime: Scalars['DateTime']
  uniqueName: Scalars['NonEmptyString']
  email: Scalars['EmailAddress']
  name: Scalars['NonEmptyString']
  phone: Scalars['NonEmptyString']
  gender: Gender
  isEmailVerified: Scalars['Boolean']
  isStarUser: Scalars['Boolean']
  providers: Array<Provider>
  bio?: Maybe<Scalars['String']>
  birth?: Maybe<Scalars['Date']>
  imageUrl?: Maybe<Scalars['URL']>
  /** 내가 쓴 댓글 */
  comments?: Maybe<Array<Comment>>
  /** 내가 쓴 피드 */
  feed?: Maybe<Array<Feed>>
  /** 내 메뉴 버킷 리스트 */
  menuBuckets?: Maybe<Array<Bucket>>
  /** 내 매장 버킷 리스트 */
  storeBuckets?: Maybe<Array<Bucket>>
  /** 사용자가 따르고 있는 다른 사용자 */
  followings?: Maybe<Array<User>>
  /** 사용자를 따르는 다른 사용자 */
  followers?: Maybe<Array<User>>
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
}

export type IsEmailUniqueQueryVariables = Exact<{
  email: Scalars['EmailAddress']
}>

export type IsEmailUniqueQuery = { __typename?: 'Query'; isEmailUnique: boolean }

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
