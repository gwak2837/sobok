import { Tabs } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { TOP_HEADER_HEIGHT, TABLET_MIN_WIDTH } from 'src/utils/constants'
import styled from 'styled-components'

const HomeContainer = styled.div`
  max-width: ${TABLET_MIN_WIDTH};
  left: 50%;
  padding-top: ${TOP_HEADER_HEIGHT};
`

const FixedPosition = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.8rem;
  width: 100%;
  max-width: ${TABLET_MIN_WIDTH};
  height: ${TOP_HEADER_HEIGHT};
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
`

const SearchFormContainer = styled.form`
  border-radius: 5px;
  border: solid 1px #e5e5e5;
  padding: 0.5rem;
  width: 22.22rem;
  height: 2.65rem;
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`
const LocationH3 = styled.h3`
  display: inline-block;
  color: black;
`

const TopIconDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 1.3rem;
  height: 1.3rem;
  margin: 0;
`

type Props = {
  children: ReactNode
}

export default function SearchFormLayout({ children }: Props) {
  const router = useRouter()

  function goToTabPage(activeKey: string) {
    router.push(activeKey)
  }

  return (
    <HomeContainer>
      <FixedPosition>
        <TopIconDiv>
          <ClientSideLink href="/">
            <Image src="/images/left-arrow.min.svg" alt="left-arrow" width={8} height={14.3} />
          </ClientSideLink>
        </TopIconDiv>
        <SearchFormContainer></SearchFormContainer>
      </FixedPosition>
      {children}
    </HomeContainer>
  )
}
