interface ISubmitButton {
  value: string
}

const SubmitButton: React.FC<ISubmitButton> = ({ value }) => {
  return (
    <input type="submit" className="input-clean submit-button" value={value} />
  )
}

export default SubmitButton
