import { Button, Checkbox, Input } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useSetRecoilState } from 'recoil'
import { toastApolloError } from 'src/apollo/error'
import PageHead from 'src/component/PageHead'
import { useLoginMutation } from 'src/graphql/generated/types-and-hooks'
import { currentUser } from 'src/models/recoil'
import { MarginH4, RedText } from 'src/styles/styles'
import { ko2en } from 'src/utils'

import { renderPasswordInputIcon, validateId, validatePassword } from './register'

type LoginFormValues = {
  uniqueNameOrEmail: string
  password: string
  remember: boolean
}

const description = ''

export default function LoginPage() {
  const setCurrentUser = useSetRecoilState(currentUser)

  const router = useRouter()

  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<LoginFormValues>({
    defaultValues: {
      uniqueNameOrEmail: 'bok@sindy.in',
      password: 'sobok123!',
      remember: false,
    },
  })

  const [login, { loading }] = useLoginMutation({
    onCompleted: ({ login }) => {
      toast.success('로그인에 성공했어요.')

      if (getValues('remember')) {
        localStorage.setItem('token', login?.jwt)
      } else {
        sessionStorage.setItem('token', login?.jwt)
      }

      setCurrentUser({ uniqueName: login?.userUniqueName })

      router.replace(sessionStorage.getItem('redirectionUrlAfterLogin') ?? '/')
      sessionStorage.removeItem('redirectionUrlAfterLogin')
    },
    onError: toastApolloError,
  })

  function onSubmit({ uniqueNameOrEmail, password }: LoginFormValues) {
    // const passwordHash = await digestMessageWithSHA256(ko2en(password))
    // login({ variables: { uniqueNameOrEmail, passwordHash } })
    login({ variables: { uniqueNameOrEmail, passwordHash: ko2en(password) } })
  }

  return (
    <PageHead title="로그인 - 소복" description={description}>
      <Image src="/images/sobok-logo.svg" alt="sobok-logo.svg" width="102" height="89" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="uniqueNameOrEmail">
          <MarginH4>아이디</MarginH4>
          <Controller
            control={control}
            name="uniqueNameOrEmail"
            render={({ field }) => (
              <Input placeholder="밥은 대충 먹더라도" size="large" {...field} />
            )}
            rules={validateId}
          />
          <RedText>{errors.uniqueNameOrEmail ? errors.uniqueNameOrEmail.message : <br />}</RedText>
        </label>

        <label htmlFor="password">
          <MarginH4>비밀번호</MarginH4>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Input.Password
                iconRender={renderPasswordInputIcon}
                placeholder="디저트는 예쁘고 맛있는 걸 먹자"
                size="large"
                type="password"
                {...field}
              />
            )}
            rules={validatePassword}
          />
          <RedText>{errors.password ? errors.password.message : <br />}</RedText>
        </label>

        <Controller
          control={control}
          name="remember"
          render={({ field }) => (
            <Checkbox checked={field.value} disabled={loading} {...field}>
              로그인 유지
            </Checkbox>
          )}
        />

        <Button loading={loading} htmlType="submit" size="large">
          로그인
        </Button>

        <Button loading={loading} htmlType="submit" size="large">
          간편 로그인
        </Button>

        <Link href="/register">회원가입</Link>
        <Link href="/register">아이디/비밀번호 찾기</Link>
      </form>
    </PageHead>
  )
}
