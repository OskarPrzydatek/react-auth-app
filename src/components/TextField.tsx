import React from 'react'
import ValidationMessage from './ValidationMessage'

interface ITextField extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage: string | undefined
  dataTestID?: string
  validationMessageTestID?: string
}

const TextField = React.forwardRef<HTMLInputElement, ITextField>(
  ({ errorMessage, dataTestID, validationMessageTestID, ...props }, ref) => {
    return (
      <label className="text-field">
        <input
          className="input-clean text-field__input"
          ref={ref}
          data-testid={dataTestID}
          {...props}
        />
        {errorMessage !== undefined ? (
          <ValidationMessage
            message={errorMessage}
            dataTestID={validationMessageTestID}
          />
        ) : null}
      </label>
    )
  },
)

export default TextField
