import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const antIcon = <LoadingOutlined spin />

type Props = {
  size?: 'small' | 'large'
}

function Loading(props: Props) {
  return <Spin delay={500} indicator={antIcon} {...props} />
}

export default Loading
