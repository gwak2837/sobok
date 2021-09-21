import { Tabs } from 'antd'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

const { TabPane } = Tabs

type Props = {
  children: ReactNode
}

const TabsStyle = {
  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.08)',
}
export default function NewsLayout({ children }: Props) {
  const router = useRouter()

  function goToTabPage(activeKey: string) {
    router.push(activeKey)
  }

  return (
    <>
      <Tabs style={TabsStyle} centered defaultActiveKey={router.asPath} onTabClick={goToTabPage}>
        <TabPane tab="찜한 매장" key="/news"></TabPane>
        <TabPane tab="전체 매장" key="/news/all" />
      </Tabs>
      {children}
    </>
  )
}
