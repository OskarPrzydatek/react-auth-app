import { describe, test } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  test('Snapshot ', () => {
    const view = render(<App />)
    expect(view).toMatchSnapshot()
  })

  test('ensure login form validation works correctly', async () => {
    render(<App />)

    // Empty form validation
    act(() => {
      fireEvent.click(screen.getByTestId('login-form-submit-button'))
    })
    expect(
      await screen.findByTestId('login-form-email-validation-message'),
    ).toHaveTextContent('Email is required')
    expect(
      await screen.findByTestId('login-form-password-validation-message'),
    ).toHaveTextContent('Password is required')

    // Email format validation
    act(() => {
      fireEvent.change(screen.getByTestId('login-form-email-text-field'), {
        target: { value: 'oskar.m.przydatek' },
      })
      fireEvent.change(screen.getByTestId('login-form-password-text-field'), {
        target: { value: 'Strong!123' },
      })
    })
    expect(
      await screen.findByTestId('login-form-email-validation-message'),
    ).toHaveTextContent('Please put email in valid form')

    // Correct filed form
    act(() => {
      fireEvent.change(screen.getByTestId('login-form-email-text-field'), {
        target: { value: 'oskar.m.przydatek@gmail.com' },
      })
      fireEvent.click(screen.getByTestId('login-form-submit-button'))
    })
    expect(
      await screen.findByTestId('login-form-email-validation-message'),
    ).not.toBeInTheDocument()
  })
})
