import Image from 'next/image'
import styled from 'styled-components'

const Border = styled.li`
  border: solid;
`

type Props = {
  menu: any
}

export default function MenuCard({ menu }: Props) {
  return (
    <Border>
      <Image
        src={menu.imageUrls?.[0] ?? '/images/default-store-cover.png'}
        alt={menu.name ?? 'menu-cover'}
        width="200"
        height="200"
        objectFit="cover"
      />
      <div>{menu.name}</div>
      <div>{menu.price}</div>
    </Border>
  )
}
