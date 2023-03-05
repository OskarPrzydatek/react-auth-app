interface ISubmitButton {
  value: string
  dataTestID?: string
}

const SubmitButton: React.FC<ISubmitButton> = ({ value, dataTestID }) => {
  return (
    <input
      className="input-clean submit-button"
      data-testid={dataTestID}
      type="submit"
      value={value}
    />
  )
}

export default SubmitButton
