import Image from 'next/image'
import { ReactNode } from 'react'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { TABLET_MIN_WIDTH, TOP_HEADER_HEIGHT } from 'src/models/constants'
import BackArrowIcon from 'src/svgs/BackArrowIcon'
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
  justify-content: space-around;
  padding: 0 0.8rem;
  width: 100%;
  max-width: ${TABLET_MIN_WIDTH};
  height: ${TOP_HEADER_HEIGHT};
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
`

const SearchFormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border: solid 1px #e5e5e5;
  padding: 0.5rem;
  width: 22.22rem;
  height: 2.65rem;
  input {
    width: 90%;
    border: none;
    outline: none;
    padding-left: 0.5rem;
  }
  button {
    border: none;
    background-color: white;
  }
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
  return (
    <HomeContainer>
      <FixedPosition>
        <TopIconDiv>
          <ClientSideLink href="/">
            <BackArrowIcon color="#707070" />
          </ClientSideLink>
        </TopIconDiv>
        <SearchFormContainer>
          <Image src="/images/search.svg" alt="search.svg" width={17} height={17} />
          <input placeholder="검색어를 입력해주세요." />
          <button>검색</button>
        </SearchFormContainer>
      </FixedPosition>
      {children}
    </HomeContainer>
  )
}
