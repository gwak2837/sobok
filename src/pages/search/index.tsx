import type { ReactElement } from 'react'
import { useState, useEffect } from 'react'
import PageHead from 'src/components/PageHead'
import SearchFormLayout from 'src/layouts/SearchFormLayout'
import styled from 'styled-components'
import Image from 'next/image'

const description = ''

const HistoryContainer = styled.div`
  padding: 1rem;
  height: 15rem;
  overflow: scroll;
  h3 {
    margin-bottom: 10px;
  }
`
const PopularContainer = styled.div`
  padding: 1rem;
  h3 {
    margin-bottom: 10px;
  }
`

const HorizontalLine = styled.div`
  height: 8px;
  background-color: #eaeaea;
  opacity: 0.58;
`
const HistoryResultButton = styled.div`
  display: inline-flex;
  align-items: center;
  height: 34px;
  padding: 0.5rem;
  margin: 0 0.7rem 0.7rem 0;
  background-color: white;
  border: solid 1px #e5e5e5;
  border-radius: 4px;
  flex-wrap: nowrap;

  button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border: none;
    background-color: white;
    margin: 0 3px;
  }
`

const PopularList = [
  '인기검색어1',
  '인기검색어2',
  '인기검색어3',
  '인기검색어4',
  '인기검색어5',
  '인기검색어6',
  '인기검색어7',
  '인기검색어8',
  '인기검색어9',
  '인기검색어10',
]

export default function SearchPage() {
  const [historyList, setHistoryList] = useState([])

  return (
    <PageHead title=" - 소복" description={description}>
      <HistoryContainer>
        <h3>최근검색어</h3>
        <HistoryResultButton>
          <div>크로플</div>
          <button>
            <Image src="/images/x.min.svg" alt="delete" width={7.1} height={7.1} />
          </button>
        </HistoryResultButton>
        <HistoryResultButton>
          <div>논</div>
          <button>
            <Image src="/images/x.min.svg" alt="delete" width={7.1} height={7.1} />
          </button>
        </HistoryResultButton>
        <HistoryResultButton>
          <div>아이스아메리카노</div>
          <button>
            <Image src="/images/x.min.svg" alt="delete" width={7.1} height={7.1} />
          </button>
        </HistoryResultButton>
        <HistoryResultButton>
          <div>따뜻한아메</div>
          <button>
            <Image src="/images/x.min.svg" alt="delete" width={7.1} height={7.1} />
          </button>
        </HistoryResultButton>
        <HistoryResultButton>
          <div>시원한아이스아메리카노</div>
          <button>
            <Image src="/images/x.min.svg" alt="delete" width={7.1} height={7.1} />
          </button>
        </HistoryResultButton>
        <HistoryResultButton>
          <div>진짜아이스아메리카노</div>
          <button>
            <Image src="/images/x.min.svg" alt="delete" width={7.1} height={7.1} />
          </button>
        </HistoryResultButton>
        <HistoryResultButton>
          <div>아이스아메리카노</div>
          <button>
            <Image src="/images/x.min.svg" alt="delete" width={7.1} height={7.1} />
          </button>
        </HistoryResultButton>
        <HistoryResultButton>
          <div>아이스아메리카노</div>
          <button>
            <Image src="/images/x.min.svg" alt="delete" width={7.1} height={7.1} />
          </button>
        </HistoryResultButton>
        <HistoryResultButton>
          <div>아이스아메리카노</div>
          <button>
            <Image src="/images/x.min.svg" alt="delete" width={7.1} height={7.1} />
          </button>
        </HistoryResultButton>
        <HistoryResultButton>
          <div>아이스아메리카노</div>
          <button>
            <Image src="/images/x.min.svg" alt="delete" width={7.1} height={7.1} />
          </button>
        </HistoryResultButton>
      </HistoryContainer>
      <HorizontalLine />
      <PopularContainer>
        <h3>인기검색어</h3>
        {PopularList.map((content, index) => (
          <div key={index}>
            <span>{index+1}</span>
            <span>{content}</span>
          </div>
        ))}
      </PopularContainer>
    </PageHead>
  )
}

SearchPage.getLayout = function getLayout(page: ReactElement) {
  return <SearchFormLayout>{page}</SearchFormLayout>
}
