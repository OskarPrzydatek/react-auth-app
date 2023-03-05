interface ISubmitButton {
  value: string
  dataTestID?: string
}

const SubmitButton: React.FC<ISubmitButton> = ({ value, dataTestID }) => {
  return (
    <input
      type="submit"
      className="input-clean submit-button"
      value={value}
      data-testid={dataTestID}
    />
  )
}

export default SubmitButton
