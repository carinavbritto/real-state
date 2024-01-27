'use client';
import Link from 'next/link';
import React, { InputHTMLAttributes, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { ZodType } from 'zod';

interface ValidationProps {
  validation?: ZodType<unknown>;
}

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'validation'>,
  ValidationProps {
  className?: string;
  label?: string;
  inputLink?: string;
  error?: string;
  submitButton?: React.ReactNode;
  submitButtonPosition?: 'left' | 'right';
}

const Input: React.FC<InputProps> = ({
  type,
  className,
  label,
  inputLink,
  error,
  submitButton,
  submitButtonPosition = 'right',
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const defaultClassName = `flex items-center justify-center gap-4 self-stretch rounded-md text-white-0 bg-gray-08 border border-solid border-gray-15 rounded-lg px-5 py-3 text-sm font-normal leading-5 w-full focus:outline-none`;

  const inputClassName = `${defaultClassName} ${className ?? ''} placeholder-gray-900 w-full`;

  const labelClassName = `text-sm w-full ${error ? 'text-danger-700' : 'text-neutral-800'}`;

  const borderClassName = `border-neutral-900 ${error ? 'border-danger-700' : ''}`;

  return (
    <div className="flex flex-col items-stretch justify-stretch w-full text-left gap-2 mb-9 relative">
      {label && <label className={labelClassName}>{label}</label>}
      <div className="relative">
        {submitButtonPosition === 'left' && submitButton && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            {submitButton}
          </div>
        )}
        <input
          type={isPasswordVisible ? 'text' : type}
          className={`${inputClassName} ${borderClassName} ${submitButtonPosition === 'right' && submitButton ? 'pr-10' : ''}`}
          {...rest}
        />
        {submitButtonPosition === 'right' && submitButton && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {submitButton}
          </div>
        )}
      </div>
      {type === 'password' && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-9 left-[21.5rem] p-2 w-[24px] h-[24px]"
        >
          {isPasswordVisible ? (
            <FaRegEye className="text-lg text-neutral-800" />
          ) : (
            <FaRegEyeSlash className="text-lg text-neutral-800" />
          )}
        </button>
      )}
      {error && <p className="text-white-0 text-xs mt-1">{error}</p>}
      {inputLink && (
        <Link
          href={inputLink}
          className="block text-primary-800 hover:text-primary-900 disabled:text-neutral-800 text-center text-xs font-light leading-5 mt-1 underline flex justify-end"
        >
          Esqueci minha senha
        </Link>
      )}
    </div>
  );
};

export default Input;
