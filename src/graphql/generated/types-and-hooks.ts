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
  storeId: Scalars['ID']
  userId: Scalars['ID']
  /** 피드 좋아요 여부 (로그인 필요) */
  isLiked: Scalars['Boolean']
  /** 피드에 태그된 매장 */
  store: Store
  /** 피드 작성자 */
  user: User
  /** 피드에 달린 댓글 */
  comments?: Maybe<Array<Comment>>
  /** 피드에 달린 해시태그 */
  hashtags?: Maybe<Array<Scalars['NonEmptyString']>>
  /** 피드에 태그된 메뉴 목록 */
  menus?: Maybe<Array<Menu>>
}

/** 기본값: ALL_USER */
export enum FeedOptions {
  StarUser = 'STAR_USER',
  /** 로그인 필요 */
  FollowingUser = 'FOLLOWING_USER',
  AllUser = 'ALL_USER',
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
  isSoldOut: Scalars['Boolean']
  imageUrls: Array<Scalars['URL']>
  category: Scalars['NonEmptyString']
  storeId: Scalars['ID']
  /** 로그인한 사용자가 이 메뉴를 버킷에 담은 여부 */
  isInBucket: Scalars['Boolean']
  /** 로그인한 사용자가 이 메뉴를 좋아하는 여부 */
  isLiked: Scalars['Boolean']
  /** 이 메뉴를 판매하는 매장 */
  store: Store
  /** 메뉴에 달린 해시태그 */
  hashtags?: Maybe<Array<Scalars['NonEmptyString']>>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** 고유 이름 또는 이메일과 비밀번호를 전송하면 JWT 인증 토큰을 반환함 */
  login?: Maybe<Scalars['JWT']>
  /** JWT 인증 토큰과 같이 요청하면 로그아웃 성공 여부를 반환함 */
  logout: Scalars['Boolean']
  /** 회원가입에 필요한 정보를 주면 성공했을 때 인증 토큰을 반환함 */
  register?: Maybe<Scalars['JWT']>
  /** 회원탈퇴 시 사용자 정보가 모두 초기화됩 */
  unregister: Scalars['Boolean']
}

export type MutationLoginArgs = {
  uniqueNameOrEmail: Scalars['NonEmptyString']
  passwordHash: Scalars['NonEmptyString']
}

export type MutationRegisterArgs = {
  input: RegisterInput
}

export type News = {
  __typename?: 'News'
  id: Scalars['ID']
  creationTime: Scalars['DateTime']
  modificationTime: Scalars['DateTime']
  title: Scalars['NonEmptyString']
  contents: Array<Scalars['NonEmptyString']>
  category: Scalars['NonEmptyString']
  storeId: Scalars['ID']
  imageUrls?: Maybe<Array<Scalars['URL']>>
  /** 뉴스 좋아요 여부 (로그인 필요) */
  isLiked: Scalars['Boolean']
  /** 이 소식을 올린 매장 */
  store: Store
}

/** 기본값: ALL_STORE */
export enum NewsOptions {
  /** 로그인 필요 */
  LikedStore = 'LIKED_STORE',
  AllStore = 'ALL_STORE',
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
  /** 인증 토큰과 같이 요청하면 사용자 정보를 반환 */
  me: User
  /** 메뉴 상세 */
  menu?: Maybe<Menu>
  /** 메뉴 상세 */
  menuByName?: Maybe<Menu>
  /** 특정 매장 메뉴 목록 */
  menusByStore?: Maybe<Array<Menu>>
  /** 특정 동네 및 특정 카테고리 피드 목록 */
  menusByTownAndCategory?: Maybe<Array<Menu>>
  /** 소식 상세 */
  news?: Maybe<News>
  /** 특정 매장 소식 목록 */
  newsListByStore?: Maybe<Array<News>>
  /** 옵션별 여러 매장 소식 목록 */
  newsListByTown?: Maybe<Array<News>>
  searchFeed?: Maybe<Array<Menu>>
  searchMenus?: Maybe<Array<Menu>>
  searchStores?: Maybe<Array<Menu>>
  /** 특정 매장 정보 */
  store?: Maybe<Store>
  /** 동네 및 카테고리별 매장 목록 */
  storesByTownAndCategory?: Maybe<Array<Store>>
}

export type QueryFeedArgs = {
  id: Scalars['ID']
}

export type QueryFeedListByStoreArgs = {
  storeId: Scalars['ID']
}

export type QueryFeedListByTownArgs = {
  town?: Maybe<Scalars['NonEmptyString']>
  option?: Maybe<FeedOptions>
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
  storeId: Scalars['ID']
  name: Scalars['NonEmptyString']
}

export type QueryMenusByStoreArgs = {
  storeId: Scalars['ID']
}

export type QueryMenusByTownAndCategoryArgs = {
  town?: Maybe<Scalars['NonEmptyString']>
  category?: Maybe<Scalars['NonEmptyString']>
}

export type QueryNewsArgs = {
  id: Scalars['ID']
}

export type QueryNewsListByStoreArgs = {
  storeId: Scalars['ID']
  categories?: Maybe<Array<Scalars['NonEmptyString']>>
}

export type QueryNewsListByTownArgs = {
  town?: Maybe<Scalars['NonEmptyString']>
  option?: Maybe<NewsOptions>
}

export type QuerySearchFeedArgs = {
  hashtags: Array<Scalars['NonEmptyString']>
}

export type QuerySearchMenusArgs = {
  hashtags: Array<Scalars['NonEmptyString']>
}

export type QuerySearchStoresArgs = {
  hashtags: Array<Scalars['NonEmptyString']>
}

export type QueryStoreArgs = {
  id: Scalars['ID']
}

export type QueryStoresByTownAndCategoryArgs = {
  town?: Maybe<Scalars['NonEmptyString']>
  categories?: Maybe<Array<Scalars['NonEmptyString']>>
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
  tel?: Maybe<Scalars['String']>
  registrationNumber?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  businessHours?: Maybe<Array<Scalars['NonEmptyString']>>
  holidays?: Maybe<Array<Scalars['Date']>>
  imageUrls?: Maybe<Array<Scalars['URL']>>
  userId: Scalars['ID']
  /** 로그인한 사용자가 이 매장을 버킷에 담은 여부 */
  isInBucket: Scalars['Boolean']
  /** 로그인한 사용자가 이 매장을 좋아하는 여부 */
  isLiked: Scalars['Boolean']
  /** 매장에서 판매하는 메뉴 목록 */
  menus: Array<Menu>
  /** 매장에 달린 해시태그 */
  hashtags?: Maybe<Array<Scalars['NonEmptyString']>>
  /** 매장에서 올린 소식 목록 */
  news?: Maybe<Array<News>>
  /** 매장을 소유한 사용자 정보 */
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
  nickname?: Maybe<Scalars['String']>
  /** 내가 쓴 댓글 */
  comments?: Maybe<Array<Comment>>
  /** 내가 쓴 피드 */
  feed?: Maybe<Array<Feed>>
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
  /** 내 메뉴 버킷 리스트 */
  menuBuckets?: Maybe<Array<Bucket>>
  /** 내 매장 버킷 리스트 */
  storeBuckets?: Maybe<Array<Bucket>>
}

export type LoginMutationVariables = Exact<{
  uniqueNameOrEmail: Scalars['NonEmptyString']
  passwordHash: Scalars['NonEmptyString']
}>

export type LoginMutation = { __typename?: 'Mutation'; login?: Maybe<any> }

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = { __typename?: 'Mutation'; logout: boolean }

export type RegisterMutationVariables = Exact<{
  input: RegisterInput
}>

export type RegisterMutation = { __typename?: 'Mutation'; register?: Maybe<any> }

export type IsEmailUniqueQueryVariables = Exact<{
  email: Scalars['EmailAddress']
}>

export type IsEmailUniqueQuery = { __typename?: 'Query'; isEmailUnique: boolean }

export type IsIdUniqueQueryVariables = Exact<{
  id: Scalars['NonEmptyString']
}>

export type IsIdUniqueQuery = { __typename?: 'Query'; isUniqueNameUnique: boolean }

export type MenusQueryVariables = Exact<{
  town?: Maybe<Scalars['NonEmptyString']>
  category?: Maybe<Scalars['NonEmptyString']>
}>

export type MenusQuery = {
  __typename?: 'Query'
  menusByTownAndCategory?: Maybe<
    Array<{
      __typename?: 'Menu'
      id: string
      name: any
      price: number
      hashtags?: Maybe<Array<any>>
      imageUrls: Array<any>
      store: { __typename?: 'Store'; id: string; name: any; address: any }
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
      contents: Array<any>
      imageUrls: Array<any>
      user: { __typename?: 'User'; nickname?: Maybe<string>; imageUrl?: Maybe<any> }
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
      contents: Array<any>
      category: any
      imageUrls?: Maybe<Array<any>>
    }>
  >
}

export type StoresQueryVariables = Exact<{
  town?: Maybe<Scalars['NonEmptyString']>
  categories?: Maybe<Array<Scalars['NonEmptyString']> | Scalars['NonEmptyString']>
}>

export type StoresQuery = {
  __typename?: 'Query'
  storesByTownAndCategory?: Maybe<
    Array<{
      __typename?: 'Store'
      id: string
      name: any
      categories: Array<any>
      imageUrls?: Maybe<Array<any>>
      hashtags?: Maybe<Array<any>>
      address: any
    }>
  >
}

export const LoginDocument = gql`
  mutation Login($uniqueNameOrEmail: NonEmptyString!, $passwordHash: NonEmptyString!) {
    login(uniqueNameOrEmail: $uniqueNameOrEmail, passwordHash: $passwordHash)
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
    register(input: $input)
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
export const IsIdUniqueDocument = gql`
  query IsIdUnique($id: NonEmptyString!) {
    isUniqueNameUnique(uniqueName: $id)
  }
`

/**
 * __useIsIdUniqueQuery__
 *
 * To run a query within a React component, call `useIsIdUniqueQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsIdUniqueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsIdUniqueQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useIsIdUniqueQuery(
  baseOptions: Apollo.QueryHookOptions<IsIdUniqueQuery, IsIdUniqueQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<IsIdUniqueQuery, IsIdUniqueQueryVariables>(IsIdUniqueDocument, options)
}
export function useIsIdUniqueLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<IsIdUniqueQuery, IsIdUniqueQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<IsIdUniqueQuery, IsIdUniqueQueryVariables>(IsIdUniqueDocument, options)
}
export type IsIdUniqueQueryHookResult = ReturnType<typeof useIsIdUniqueQuery>
export type IsIdUniqueLazyQueryHookResult = ReturnType<typeof useIsIdUniqueLazyQuery>
export type IsIdUniqueQueryResult = Apollo.QueryResult<IsIdUniqueQuery, IsIdUniqueQueryVariables>
export const MenusDocument = gql`
  query Menus($town: NonEmptyString, $category: NonEmptyString) {
    menusByTownAndCategory(town: $town, category: $category) {
      id
      name
      price
      hashtags
      imageUrls
      store {
        id
        name
        address
      }
    }
  }
`

/**
 * __useMenusQuery__
 *
 * To run a query within a React component, call `useMenusQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenusQuery({
 *   variables: {
 *      town: // value for 'town'
 *      category: // value for 'category'
 *   },
 * });
 */
export function useMenusQuery(
  baseOptions?: Apollo.QueryHookOptions<MenusQuery, MenusQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MenusQuery, MenusQueryVariables>(MenusDocument, options)
}
export function useMenusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MenusQuery, MenusQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MenusQuery, MenusQueryVariables>(MenusDocument, options)
}
export type MenusQueryHookResult = ReturnType<typeof useMenusQuery>
export type MenusLazyQueryHookResult = ReturnType<typeof useMenusLazyQuery>
export type MenusQueryResult = Apollo.QueryResult<MenusQuery, MenusQueryVariables>
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
export const StoreDetailDocument = gql`
  query StoreDetail($storeId: ID!) {
    store(id: $storeId) {
      id
      tel
      address
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
      contents
      imageUrls
      user {
        nickname
        imageUrl
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
      id
      name
      price
      isSoldOut
      imageUrls
      isLiked
      hashtags
    }
  }
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
export const StoresDocument = gql`
  query Stores($town: NonEmptyString, $categories: [NonEmptyString!]) {
    storesByTownAndCategory(town: $town, categories: $categories) {
      id
      name
      categories
      imageUrls
      hashtags
      address
    }
  }
`

/**
 * __useStoresQuery__
 *
 * To run a query within a React component, call `useStoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoresQuery({
 *   variables: {
 *      town: // value for 'town'
 *      categories: // value for 'categories'
 *   },
 * });
 */
export function useStoresQuery(
  baseOptions?: Apollo.QueryHookOptions<StoresQuery, StoresQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StoresQuery, StoresQueryVariables>(StoresDocument, options)
}
export function useStoresLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StoresQuery, StoresQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StoresQuery, StoresQueryVariables>(StoresDocument, options)
}
export type StoresQueryHookResult = ReturnType<typeof useStoresQuery>
export type StoresLazyQueryHookResult = ReturnType<typeof useStoresLazyQuery>
export type StoresQueryResult = Apollo.QueryResult<StoresQuery, StoresQueryVariables>
