import PageHead from 'src/components/PageHead'

const description = ''

export default function MapBucketsPage() {
  return (
    <PageHead title="{버킷종류} 버킷 - 소복" description={description}>
      사용자 버킷 목록 페이지. Query string으로 버킷 종류 구별
    </PageHead>
  )
}
