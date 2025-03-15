import React from "react";
import {FieldValues, Path, UseFormRegister} from "react-hook-form"

interface InputProps<TFieldValue extends FieldValues>{
  type?: string;
  label: string;
  register: UseFormRegister<TFieldValue>;
  name: Path<TFieldValue>;
  error?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void ;
  loadingText?: string;
  disabled?: boolean;
  availableText?: string
} 

const Input = <TFieldValue extends FieldValues>({label, type = "text", register, name, error, onBlur, loadingText, disabled, availableText} : InputProps<TFieldValue> )  => {
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if(onBlur){
      onBlur(e);
      register(name).onBlur(e)
    }else{
      register(name).onBlur(e)
    }
  }

  return (
    <div className="flex flex-col gap-y-px">
      <label className="text-sm md:text-base mb-0.5 text-slate-700">{label}</label>
      <input type={type} className={`px-3 py-1 text-sm md:text-base border rounded-sm bg-gray-50 ${error ? 'border-red-500 outline-red-500' : availableText ? 'border-green-500': 'border-gray-300'}`} {...register(name)} onBlur={onBlurHandler} disabled={disabled}/>
      {error && <span className="text-red-500 text-sm">{error}</span>}
      {loadingText && <span className="text-sm">{loadingText}</span>}
      {availableText && !error && <span className="text-green-600 text-sm">{availableText}</span>}
    </div>
  )
}

export default Input