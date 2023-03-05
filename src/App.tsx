import React from 'react'
import { post } from './api'
import LoginForm from './components/LoginForm'

const App: React.FC = () => {
  const [loginMessage, setLoginMessage] = React.useState<string | undefined>()

  const login = (email: string, password: string) => {
    post(`/auth?email=${email}&password=${password}`).then((data) => {
      console.log('data', data)
      setLoginMessage(data.msg)
    })
  }

  return (
    <div className="app">
      <h1 className="login-message" data-testid="login-message">
        {loginMessage ?? null}
      </h1>
      <LoginForm onLoginSubmit={login} />
    </div>
  )
}

export default App
