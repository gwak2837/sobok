type Props = {
  bucket: any
}

export default function BucketCard({ bucket }: Props) {
  return (
    <li>
      <h3>{bucket.name}</h3>
    </li>
  )
}
