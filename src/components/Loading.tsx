import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const antIcon = <LoadingOutlined spin />

function Loading() {
  return <Spin delay={500} indicator={antIcon} />
}

export default Loading
