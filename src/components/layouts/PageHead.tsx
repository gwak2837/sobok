import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { canonicalUrl } from 'src/pages/_document'
import { APPLICATION_NAME } from 'src/utils/constants'

type Props = {
  children: ReactNode
  title?: string
  description?: string // 최대 120자
}

function PageHead({
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
        <meta property="og:image" content="/og-image.webp" />
        <meta property="og:url" content={`${canonicalUrl}${pathname}`} />
        <meta property="og:site_name" content={title} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Sobok Logo" />
      </Head>
      {children}
    </>
  )
}

export default PageHead
