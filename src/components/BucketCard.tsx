import { useRouter } from 'next/router'
import useGoToPage from 'src/hooks/useGoToPage'

type Props = {
  bucket: any
}

export default function BucketCard({ bucket }: Props) {
  const { asPath } = useRouter()

  const goToPage = useGoToPage(`${asPath}/${bucket.id}`)

  return (
    <li onClick={goToPage}>
      <h3>{bucket.name}</h3>
    </li>
  )
}
