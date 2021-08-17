import { useRouter } from 'next/router'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import PageHead from 'src/components/PageHead'

const description = ''

function UserPage() {
  const router = useRouter()
  const userId = ((router.query.userId ?? '') as string).slice(1)

  return (
    <PageHead title="소복 - " description={description}>
      <div>
        <ClientSideLink href="/">홈으로</ClientSideLink>
      </div>
      <div>사용자 페이지</div>
      <div>사용자 아이디: {userId}</div>
    </PageHead>
  )
}

export default UserPage
