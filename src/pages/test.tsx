import PageHead from 'src/components/PageHead'
import HeartFilledIcon from 'src/svgs/HeartFilledIcon'
import HeartIcon from 'src/svgs/HeartIcon'
import HomeIcon from 'src/svgs/HomeIcon'
import NewsIcon from 'src/svgs/NewsIcon'
import PersonIcon from 'src/svgs/PersonIcon'
import TrendIcon from 'src/svgs/TrendIcon'
import { SOBOK_COLOR } from 'src/utils/constants'
import styled from 'styled-components'

const Div = styled.div`
  width: 20vw;
  height: 20vh;
  background: #888;
`

const A = styled.div`
  :hover {
    color: #ffaabb;
  }
`

const description = ''

export default function TestPage() {
  return (
    <PageHead title="테스트 - 소복" description={description}>
      <A>asdf</A>
      <Div>
        <HeartFilledIcon filled />
      </Div>
      <Div>
        <HeartFilledIcon />
      </Div>
      <Div>
        <HeartIcon color={SOBOK_COLOR} />
      </Div>
      <Div>
        <HeartIcon />
      </Div>
      <Div>
        <TrendIcon color={SOBOK_COLOR} />
      </Div>
      <Div>
        <TrendIcon />
      </Div>
      <Div>
        <PersonIcon color={SOBOK_COLOR} />
      </Div>
      <Div>
        <PersonIcon />
      </Div>
      <Div>
        <NewsIcon color={SOBOK_COLOR} />
      </Div>
      <Div>
        <NewsIcon />
      </Div>
      {/* <Div>
        <HeartIcon color={SOBOK_COLOR} />
      </Div>
      <Div>
        <HeartIcon />
      </Div> */}
      <Div>
        <HomeIcon color={SOBOK_COLOR} />
      </Div>
      <Div>
        <HomeIcon />
      </Div>
    </PageHead>
  )
}
