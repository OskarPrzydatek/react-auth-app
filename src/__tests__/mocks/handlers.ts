import { rest } from 'msw'

export const handlers = [
  rest.post('https://tapapp.free.beeceptor.com/auth', (req, res, ctx) => {
    const searchEmail = req.url.searchParams.get('email')
    const searchPassword = req.url.searchParams.get('password')

    if (
      searchEmail === 'oskar.m.przydatek@gmail.com' &&
      searchPassword === 'Strong!123'
    ) {
      return res(
        ctx.status(200),
        ctx.json({
          msg: 'User Logged In!',
        }),
      )
    } else {
      return res(
        ctx.status(400),
        ctx.json({
          msg: 'Login or Passwort is not correct',
        }),
      )
    }
  }),
]
