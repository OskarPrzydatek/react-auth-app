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
          ref={ref}
          className="input-clean text-field__input"
          data-testid={dataTestID}
          {...props}
        />
        {errorMessage !== undefined ? (
          <ValidationMessage
            dataTestID={validationMessageTestID}
            message={errorMessage}
          />
        ) : null}
      </label>
    )
  },
)

export default TextField
