interface IValidationMessage {
  message: string | undefined
  dataTestID?: string
}

const ValidationMessage: React.FC<IValidationMessage> = ({
  message,
  dataTestID,
}) => {
  return (
    <span className="text-field__error--mesage" data-testid={dataTestID}>
      {message}
    </span>
  )
}

export default ValidationMessage
