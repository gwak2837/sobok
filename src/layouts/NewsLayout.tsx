import { Tabs } from 'antd'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

const { TabPane } = Tabs

type Props = {
  children: ReactNode
}

export default function NewsLayout({ children }: Props) {
  const router = useRouter()

  function goToTabPage(activeKey: string) {
    router.push(activeKey)
  }

  return (
    <>
      <Tabs centered defaultActiveKey={router.asPath} onTabClick={goToTabPage}>
        <TabPane tab="찜한 매장" key="/news"></TabPane>
        <TabPane tab="전체 매장" key="/news/all" />
      </Tabs>
      {children}
    </>
  )
}
