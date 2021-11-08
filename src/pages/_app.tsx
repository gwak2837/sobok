import 'react-toastify/dist/ReactToastify.min.css'
import 'animate.css/animate.min.css'
import 'antd/dist/antd.css'
import 'src/styles/custom-antd.css'
import 'normalize.css'
import 'src/styles/global.css'

import { ApolloProvider } from '@apollo/client'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import type { ReactElement, ReactNode } from 'react'
import { useEffect } from 'react'
import { ToastContainer, cssTransition } from 'react-toastify'
import { RecoilRoot } from 'recoil'
import { client } from 'src/apollo/client'
import { TABLET_MIN_WIDTH } from 'src/models/constants'
import { pageview } from 'src/utils/google-analytics'
import styled from 'styled-components'

export const fade = cssTransition({
  enter: 'animate__animated animate__fadeIn',
  exit: 'animate__animated animate__fadeOut',
})

const MaxWidth = styled.main`
  max-width: ${TABLET_MIN_WIDTH};
  margin: 0 auto;
`

type AppPropsWithLayout = AppProps & {
  Component: NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
  }
}

export default function SobokApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()

  const getLayout = Component.getLayout

  // Google Analytics 초기 설정
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const handleRouteChange = (url: string) => pageview(url)
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <MaxWidth>
        <ApolloProvider client={client}>
          <RecoilRoot>
            {getLayout ? getLayout(<Component {...pageProps} />) : <Component {...pageProps} />}
          </RecoilRoot>
        </ApolloProvider>
      </MaxWidth>
      <ToastContainer autoClose={2500} hideProgressBar position="top-center" transition={fade} />
    </>
  )
}
