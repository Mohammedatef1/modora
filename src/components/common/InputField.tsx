
interface InputFieldProps {
  type?: string;
  title?: string;
  className?: string;
}

export const InputField = ({className, title, type = "text"} : InputFieldProps) => {
  return (
    <>
      <label htmlFor="">{title}</label>
      <input type={type} className={` ${className}`} />
    </>
  )
}
