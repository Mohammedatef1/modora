import {FieldValues, Path, UseFormRegister} from "react-hook-form"

interface InputProps<TFieldValue extends FieldValues>{
  type?: string;
  label: string;
  register: UseFormRegister<TFieldValue>;
  name: Path<TFieldValue>;
  error?: string
} 

const Input = <TFieldValue extends FieldValues>({label, type = "text", register, name, error} : InputProps<TFieldValue> )  => {
  return (
    <div className="flex flex-col gap-y-px">
      <label className="text-sm md:text-base mb-0.5 text-slate-700">{label}</label>
      <input type={type} className={`px-3 py-1 text-sm md:text-base border rounded-sm bg-gray-50 ${error ? 'border-red-500 ' : 'border-gray-300'}`} {...register(name)} />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  )
}

export default Input