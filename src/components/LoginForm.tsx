import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import SubmitButton from './SubmitButton'
import TextField from './TextField'

interface ILoginFormValues {
  email: string
  password: string
}

interface ILoginFormProps {
  onLoginSubmit: (email: string, password: string) => void
}

const LoginForm: React.FC<ILoginFormProps> = ({ onLoginSubmit }) => {
  const emailRegexp = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<ILoginFormValues>()

  const _onSubmit: SubmitHandler<ILoginFormValues> = ({ email, password }) => {
    onLoginSubmit(email, password)
  }

  React.useEffect(() => {
    setFocus('email')
  }, [setFocus])

  return (
    <form className="form" onSubmit={handleSubmit(_onSubmit)}>
      <h2 className="form__header">Zaloguj Się</h2>
      <TextField
        placeholder="email"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: emailRegexp,
            message: 'Please put email in valid form',
          },
        })}
        errorMessage={errors.email?.message}
      />
      <TextField
        type="password"
        placeholder="password"
        {...register('password', {
          required: 'Password is required',
        })}
        errorMessage={errors.password?.message}
      />
      <SubmitButton value={'Login'} />
    </form>
  )
}

export default LoginForm
