import React from 'react'
import PageHead from 'src/components/PageHead'
import AllMenusIcon from 'src/svgs/AllMenusIcon'
import AllStoresIcon from 'src/svgs/AllStoresIcon'
import BeverageIcon from 'src/svgs/BeverageIcon'
import BreadIcon from 'src/svgs/BreadIcon'
import BrunchIcon from 'src/svgs/BrunchIcon'
import CakeIcon from 'src/svgs/CakeIcon'
import CoffeeIcon from 'src/svgs/CoffeeIcon'
import CookieIcon from 'src/svgs/CookieIcon'
import HeartFilledIcon from 'src/svgs/HeartFilledIcon'
import HeartIcon from 'src/svgs/HeartIcon'
import HomeIcon from 'src/svgs/HomeIcon'
import MacaronIcon from 'src/svgs/MacaronIcon'
import NewsIcon from 'src/svgs/NewsIcon'
import NoKidsIcon from 'src/svgs/NoKidsIcon'
import OutletIcon from 'src/svgs/OutletIcon'
import ParkingIcon from 'src/svgs/ParkingIcon'
import PersonIcon from 'src/svgs/PersonIcon'
import PetIcon from 'src/svgs/PetIcon'
import RooftopIcon from 'src/svgs/RooftopIcon'
import SmokeIcon from 'src/svgs/SmokeIcon'
import TrendIcon from 'src/svgs/TrendIcon'
import WholeGlassIcon from 'src/svgs/WholeGlassIcon'
import WideSofaIcon from 'src/svgs/WideSofaIcon'
import WideTableIcon from 'src/svgs/WideTableIcon'
import { SOBOK_COLOR } from 'src/models/constants'
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
        <AllStoresIcon selected />
      </Div>
      <Div>
        <AllStoresIcon />
      </Div>

      <Div>
        <NoKidsIcon selected />
      </Div>
      <Div>
        <NoKidsIcon />
      </Div>
      <Div>
        <OutletIcon selected />
      </Div>
      <Div>
        <OutletIcon />
      </Div>
      <Div>
        <ParkingIcon selected />
      </Div>
      <Div>
        <ParkingIcon />
      </Div>
      <Div>
        <PetIcon selected />
      </Div>
      <Div>
        <PetIcon />
      </Div>
      <Div>
        <RooftopIcon selected />
      </Div>
      <Div>
        <RooftopIcon />
      </Div>
      <Div>
        <SmokeIcon selected />
      </Div>
      <Div>
        <SmokeIcon />
      </Div>
      <Div>
        <WholeGlassIcon selected />
      </Div>
      <Div>
        <WholeGlassIcon />
      </Div>
      <Div>
        <WideSofaIcon selected />
      </Div>
      <Div>
        <WideSofaIcon />
      </Div>
      <Div>
        <WideTableIcon selected />
      </Div>
      <Div>
        <WideTableIcon />
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
