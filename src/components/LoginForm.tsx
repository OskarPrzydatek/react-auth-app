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
        dataTestID="login-form-email-text-field"
        errorMessage={errors.email?.message}
        validationMessageTestID="login-form-email-validation-message"
      />
      <TextField
        placeholder="password"
        type="password"
        {...register('password', {
          required: 'Password is required',
        })}
        dataTestID="login-form-password-text-field"
        errorMessage={errors.password?.message}
        validationMessageTestID="login-form-password-validation-message"
      />
      <SubmitButton dataTestID="login-form-submit-button" value="Login" />
    </form>
  )
}

export default LoginForm
