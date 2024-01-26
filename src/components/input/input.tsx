'use client';
import Link from 'next/link';
import React, { InputHTMLAttributes, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { z } from 'zod';

interface ValidationProps {
  validation?: z.ZodType<any>;
}

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
  ValidationProps {
  className?: string;
  label?: string;
  inputLink?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  className,
  label,
  inputLink,
  validation,
  error,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const defaultClassName = `flex p-4 items-center justify-center gap-4 self-stretch rounded-md border border-solid border-neutral-900 text-sm font-normal leading-5 w-full`;

  const inputClassName = `${defaultClassName} ${className ?? ''} placeholder-gray-900 w-full`;

  const labelClassName = `text-sm w-full ${error ? 'text-danger-700' : 'text-neutral-800'}`;

  const borderClassName = `border-neutral-900 ${error ? 'border-danger-700' : ''}`;

  return (
    <div className="flex flex-col items-stretch justify-stretch w-full text-left gap-2 mb-9">
      {label && <label className={labelClassName}>{label}</label>}
      <input
        type={isPasswordVisible ? 'text' : type}
        className={`${inputClassName} ${borderClassName}`}
        {...rest}
      />
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
      {error && (
        <p className="text-danger-700 text-xs font-semibold italic mt-1">
          {error}
        </p>
      )}
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
