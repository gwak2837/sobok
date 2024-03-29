import { Button, Input } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useSetRecoilState } from 'recoil'
import { toastApolloError } from 'src/apollo/error'
import PageHead from 'src/components/PageHead'
import Checkbox from 'src/components/atoms/Checkbox'
import { useLoginMutation } from 'src/graphql/generated/types-and-hooks'
import { currentUser } from 'src/models/recoil'
import { RedText } from 'src/styles'

import { ko2en } from 'src/utils'
import styled from 'styled-components'

import EmailIcon from '../svgs/EmailIcon'
import PasswordIcon from '../svgs/PasswordIcon'
import SobokLogo from '../svgs/sobok-logo.svg'
import { validateId, validatePassword } from './register'

const Padding = styled.div`
  padding: 1rem;
  background: #fcfcfc;
  height: 100vh;
  max-width: 400px;
  margin: 0 auto;
`

const Padding1 = styled.div`
  padding: 1rem 0;
  text-align: right;
`

const Padding4 = styled.div`
  padding-top: 4rem;
  text-align: right;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr 1px 1fr;
  place-items: center center;
  gap: 0.5rem 0;

  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: solid 1px #e0e0e0;
  background: #fff;
`

const LogoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr 0.5fr;

  svg {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    width: 100%; // for safari
    cursor: pointer;
  }
`

const BlackText = styled.span`
  color: black;
  cursor: pointer;
  padding: 0.5rem;
`

const EmailIconWraptper = styled.div`
  width: 1.5rem;

  svg {
    display: block;
    margin: auto;
  }
`

const PasswordIconWraptper = styled.div`
  width: 1rem;

  svg {
    display: block;
    margin: auto;
  }
`

const HorizontalLine = styled.div`
  width: 100%;

  grid-column: 1 / 3;
  border-top: solid 1px #e0e0e0;
`

const StyledButton = styled(Button)`
  height: 3.5rem;
  width: 100%;
`

const CenterText = styled.div`
  text-align: center;
`

type LoginFormValues = {
  uniqueNameOrEmail: string
  password: string
  remember: boolean
}

const description = '소복에 로그인하세요'

export default function LoginPage() {
  const setCurrentUser = useSetRecoilState(currentUser)

  const router = useRouter()

  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
    watch,
  } = useForm<LoginFormValues>({
    defaultValues: {
      uniqueNameOrEmail: 'bok@sindy.in',
      password: 'sobok123!',
      remember: false,
    },
  })

  const [loginMutation, { loading }] = useLoginMutation({
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

  function login({ uniqueNameOrEmail, password }: LoginFormValues) {
    // const passwordHash = await digestMessageWithSHA256(ko2en(password))
    // login({ variables: { uniqueNameOrEmail, passwordHash } })
    loginMutation({ variables: { uniqueNameOrEmail, passwordHash: ko2en(password) } })
  }

  return (
    <PageHead title="로그인 - 소복" description={description}>
      <Padding>
        <LogoWrapper>
          <SobokLogo onClick={() => router.push('/')} />
        </LogoWrapper>

        <form onSubmit={handleSubmit(login)}>
          <GridContainer>
            <EmailIconWraptper>
              <EmailIcon colored={Boolean(watch('uniqueNameOrEmail'))} />
            </EmailIconWraptper>
            <Controller
              control={control}
              name="uniqueNameOrEmail"
              render={({ field }) => (
                <Input bordered={false} placeholder="밥은 대충 먹더라도" size="large" {...field} />
              )}
              rules={validateId}
            />

            <HorizontalLine />

            <PasswordIconWraptper>
              <PasswordIcon colored={Boolean(watch('password'))} />
            </PasswordIconWraptper>
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <Input
                  bordered={false}
                  placeholder="디저트는 예쁘고 맛있는 걸 먹자"
                  size="large"
                  type="password"
                  {...field}
                />
              )}
              rules={validatePassword}
            />
          </GridContainer>

          <RedText>{errors.uniqueNameOrEmail?.message || errors.password?.message}</RedText>

          <Padding1>
            <Controller
              control={control}
              name="remember"
              render={({ field }) => (
                <Checkbox checked={field.value} disabled={loading} {...field}>
                  로그인 유지
                </Checkbox>
              )}
            />
          </Padding1>

          <StyledButton loading={loading} htmlType="submit" size="large" type="primary">
            로그인
          </StyledButton>

          <Padding4 />

          <StyledButton loading={loading} htmlType="submit" size="large">
            간편 로그인
          </StyledButton>

          <Padding1 />

          <CenterText>
            <Link href="/register" passHref>
              <a>
                <BlackText>회원가입</BlackText>
              </a>
            </Link>
            <Link href="/register" passHref>
              <a>
                <BlackText>아이디/비밀번호 찾기</BlackText>
              </a>
            </Link>
          </CenterText>
        </form>
      </Padding>
    </PageHead>
  )
}
