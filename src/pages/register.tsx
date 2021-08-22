import { Input } from 'antd'
import { useState } from 'react'
import PageHead from 'src/components/PageHead'
import { useIsEmailUniqueLazyQuery } from 'src/graphql/generated/types-and-hooks'

const description = ''

export default function RegisterPage() {
  const [email, setEmail] = useState('bok1@sindy.com')

  const [isEmailUnique, { loading, data }] = useIsEmailUniqueLazyQuery()

  function verifyEmail() {
    isEmailUnique({ variables: { email: email } })
  }

  return (
    <PageHead title="회원가입 - 소복" description={description}>
      <Input size="large" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={verifyEmail}>이메일 검사</button>
      {loading && <div>loading...</div>}
      {data && <div>{JSON.stringify(data.isEmailUnique)}</div>}
    </PageHead>
  )
}
