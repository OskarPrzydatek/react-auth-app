import React from 'react'
import ValidationMessage from './ValidationMessage'

interface ITextField extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage: string | undefined
}

const TextField = React.forwardRef<HTMLInputElement, ITextField>(
  ({ errorMessage, ...props }, ref) => {
    return (
      <label className="text-field">
        <input className="input-clean text-field__input" ref={ref} {...props} />
        {errorMessage !== undefined ? (
          <ValidationMessage message={errorMessage} />
        ) : null}
      </label>
    )
  },
)

export default TextField
