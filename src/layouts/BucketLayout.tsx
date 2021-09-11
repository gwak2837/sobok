import { Tabs } from 'antd'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

const { TabPane } = Tabs

type Props = {
  children: ReactNode
}

export default function BucketLayout({ children }: Props) {
  const router = useRouter()

  const userUniqueName = (router.query.userUniqueName ?? '') as string

  function goToTabPage(activeKey: string) {
    router.push(activeKey)
  }

  return (
    <>
      <Tabs centered defaultActiveKey={router.asPath} onTabClick={goToTabPage}>
        <TabPane tab="매장" key={`/${userUniqueName}/store-buckets`} />
        <TabPane tab="메뉴" key={`/${userUniqueName}/menu-buckets`} />
      </Tabs>
      {children}
    </>
  )
}
