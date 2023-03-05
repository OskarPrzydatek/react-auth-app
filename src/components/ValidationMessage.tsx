interface IValidationMessage {
  message: string | undefined
}

const ValidationMessage: React.FC<IValidationMessage> = ({ message }) => {
  return <span className="text-field__error--mesage">{message}</span>
}

export default ValidationMessage
