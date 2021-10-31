import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import PageHead from 'src/components/PageHead'
import NavigationLayout from 'src/layouts/NavigationLayout'
import { getUserUniqueName } from 'src/utils'

const description = ''

export default function UserPage() {
  const router = useRouter()
  const userId = getUserUniqueName(router)

  return (
    <PageHead title=" - 소복" description={description}>
      <div>
        <Link href="/">홈으로</Link>
      </div>

      {!userId && (
        <div>
          <Link href="/login">로그인</Link>
        </div>
      )}

      <div>사용자 페이지</div>
      <div>사용자 아이디: {userId}</div>
    </PageHead>
  )
}

UserPage.getLayout = function getLayout(page: ReactElement) {
  return <NavigationLayout>{page}</NavigationLayout>
}
