import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { APPLICATION_NAME, CANONICAL_URL } from 'src/utils/constants'

type Props = {
  children: ReactNode
  title?: string // 최소 10자 ~ 최대 70자
  description?: string // 최소 70자 ~ 최대 320자
}

export default function PageHead({
  children,
  title = APPLICATION_NAME,
  description = '소복은 내가 원하는 디저트를 쉽고 빠르게 고를 수 있는 온라인 디저트 검색 서비스입니다.',
}: Props) {
  const { pathname } = useRouter()

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/images/og-image.webp" />
        <meta property="og:image:alt" content="/images/og-image.webp" />
        <meta property="og:url" content={`${CANONICAL_URL}${pathname}`} />
        <meta property="og:site_name" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Sobok Logo" />
      </Head>
      {children}
    </>
  )
}
