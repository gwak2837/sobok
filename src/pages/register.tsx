import { LockTwoTone, UnlockTwoTone } from '@ant-design/icons'
import { Button, Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { toastApolloError } from 'src/apollo/error'
import PageHead from 'src/components/PageHead'
import {
  Gender,
  useIsEmailUniqueLazyQuery,
  useIsUniqueNameUniqueLazyQuery,
  useRegisterMutation,
} from 'src/graphql/generated/types-and-hooks'
import { MarginH4, RedText } from 'src/styles'

type RegisterFormValues = {
  uniqueName: string
  email: string
  passwordHash: string
  name: string
  phone: string
  gender: Gender
}

export const validateId = {
  required: '필수 항목입니다.',
  minLength: {
    value: 5,
    message: '최소 5글자 이상 입력해주세요.',
  },
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
      uniqueName: '',
      email: 'bok1@sindy.com',
      passwordHash: '',
      name: '',
      phone: '',
      gender: Gender.Other,
    },
  })

  const [isUniqueNameUnique, isUniqueNameUniqueResult] = useIsUniqueNameUniqueLazyQuery()
  const isUniqueNameUniqueLoading = isUniqueNameUniqueResult.loading
  const isUniqueNameUniqueData = isUniqueNameUniqueResult.data?.isUniqueNameUnique

  const [isEmailUnique, isEmailUniqueResult] = useIsEmailUniqueLazyQuery()
  const isEmailUniqueLoading = isEmailUniqueResult.loading
  const isEmailUniqueData = isEmailUniqueResult.data?.isEmailUnique

  const [register, { loading }] = useRegisterMutation({
    onCompleted: ({ register }) => {
      toast.success('회원가입에 성공했어요.')
      console.log(register)
    },
    onError: toastApolloError,
  })

  function verifyId() {
    isUniqueNameUnique({ variables: { uniqueName: getValues('uniqueName') } })
  }
  function verifyEmail() {
    isEmailUnique({ variables: { email: getValues('email') } })
  }

  function onSubmit(input: RegisterFormValues) {
    console.log(input)
    // const passwordHash = await digestMessageWithSHA256(ko2en(password))
    // login({ variables: { uniqueNameOrEmail, passwordHash } })
    register({ variables: { input } })
  }

  return (
    <PageHead title="회원가입 - 소복" description={description}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="id">
          <MarginH4>아이디</MarginH4>
          <Controller
            control={control}
            name="uniqueName"
            render={({ field }) => (
              <Input
                disabled={isUniqueNameUniqueLoading}
                placeholder="밥은 대충 먹더라도"
                size="large"
                {...field}
              />
            )}
            rules={validateId}
          />
          <RedText>{errors.uniqueName ? errors.uniqueName.message : <br />}</RedText>
        </label>

        <Button loading={isUniqueNameUniqueLoading} onClick={verifyId} size="large">
          아이디 중복 검사
        </Button>
        {isUniqueNameUniqueData &&
          (isUniqueNameUniqueData ? <div>사용 가능</div> : <RedText>중복</RedText>)}

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
        {isEmailUniqueData && (isEmailUniqueData ? <div>사용 가능</div> : <RedText>중복</RedText>)}
      </form>
    </PageHead>
  )
}
