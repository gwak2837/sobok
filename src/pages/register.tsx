import { LockTwoTone, UnlockTwoTone } from '@ant-design/icons'
import { Button, Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { MarginH4, RedText } from 'src/components/atoms/Styles'
import PageHead from 'src/components/PageHead'
import {
  Gender,
  useIsEmailUniqueLazyQuery,
  useIsIdUniqueLazyQuery,
} from 'src/graphql/generated/types-and-hooks'

type RegisterFormValues = {
  id: string
  email: string
  password: string
  name: string
  phone: string
  gender: Gender
}

export const validateId = {
  required: '필수 항목입니다.',
  maxLength: {
    value: 50,
    message: '최대 50글자 이하로 입력해주세요.',
  },
}

export const validateEmail = {
  required: '필수 항목입니다.',
  maxLength: {
    value: 50,
    message: '최대 50글자 이하로 입력해주세요.',
  },
  pattern: {
    value: /\S+@\S+\.\S+/,
    message: '이메일을 형식에 맞게 입력해주세요.',
  },
}

export const validatePassword = {
  required: '필수 항목입니다.',
  minLength: {
    value: 8,
    message: '최소 8글자 이상 입력해주세요.',
  },
}

const PASSWORD_INPUT_ICONS = [
  <UnlockTwoTone key={1} style={{ fontSize: '1.2rem' }} twoToneColor="#c4801a" />,
  <LockTwoTone key={2} style={{ fontSize: '1.2rem' }} twoToneColor="#52c41a" />,
]

export function renderPasswordInputIcon(visible: boolean) {
  return visible ? PASSWORD_INPUT_ICONS[0] : PASSWORD_INPUT_ICONS[1]
}

const description = ''

export default function RegisterPage() {
  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<RegisterFormValues>({
    defaultValues: {
      id: '',
      email: 'bok1@sindy.com',
      password: '',
      name: '',
      phone: '',
      gender: Gender.Other,
    },
  })

  const [isIdUnique, isIdUniqueResult] = useIsIdUniqueLazyQuery()
  const isIdUniqueLoading = isIdUniqueResult.loading
  const isIdUniqueData = isIdUniqueResult.data

  const [isEmailUnique, isEmailUniqueResult] = useIsEmailUniqueLazyQuery()
  const isEmailUniqueLoading = isEmailUniqueResult.loading
  const isEmailUniqueData = isEmailUniqueResult.data

  function verifyId() {
    isIdUnique({ variables: { id: getValues('id') } })
  }
  function verifyEmail() {
    isEmailUnique({ variables: { email: getValues('email') } })
  }

  function onSubmit(input: RegisterFormValues) {
    console.log(input)
  }

  return (
    <PageHead title="회원가입 - 소복" description={description}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="id">
          <MarginH4>아이디</MarginH4>
          <Controller
            control={control}
            name="id"
            render={({ field }) => (
              <Input
                disabled={isIdUniqueLoading}
                placeholder="밥은 대충 먹더라도"
                size="large"
                {...field}
              />
            )}
            rules={validateId}
          />
          <RedText>{errors.id ? errors.id.message : <br />}</RedText>
        </label>

        <Button loading={isIdUniqueLoading} onClick={verifyId} size="large">
          아이디 중복 검사
        </Button>
        {isIdUniqueData &&
          (isIdUniqueData.isUniqueNameUnique ? <div>사용 가능</div> : <RedText>중복</RedText>)}

        <label htmlFor="email">
          <MarginH4>이메일</MarginH4>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input
                disabled={isEmailUniqueLoading}
                placeholder="밥은 대충 먹더라도"
                size="large"
                type="email"
                {...field}
              />
            )}
            rules={validateEmail}
          />
          <RedText>{errors.email ? errors.email.message : <br />}</RedText>
        </label>

        <Button loading={isEmailUniqueLoading} onClick={verifyEmail} size="large">
          이메일 중복 검사
        </Button>
        {isEmailUniqueData &&
          (isEmailUniqueData.isEmailUnique ? <div>사용 가능</div> : <RedText>중복</RedText>)}
      </form>
    </PageHead>
  )
}
