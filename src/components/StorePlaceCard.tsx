import Image from 'next/image'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import type { StoreMenusQuery } from 'src/graphql/generated/types-and-hooks'
import type { ArrayElement } from 'src/utils/types'

type Props = {
  storeMenu: ArrayElement<StoreMenusQuery['menus2']>
}

const StoreContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(calc(200px + 10vw), auto);
  column-gap: 0.8rem;
`

const StoreCard = styled.div`
  display: flex;
  flex-direction: row;
`

function StorePlaceCard({ storeMenu }: Props) {
  const router = useRouter()

  function goToStoreMenuPage() {
    router.push(`${router.asPath}/${storeMenu.name}`)
  }

  return (
    <StoreContainer>
      <StoreCard></StoreCard>
    </StoreContainer>
  )
}

export default StorePlaceCard
