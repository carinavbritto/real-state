'use client';
import Link from 'next/link';
import React, { InputHTMLAttributes, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  inputLink?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  className,
  label,
  inputLink,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const defaultClassName = `flex p-4 items-center justify-center gap-4 self-stretch rounded-md border border-solid border-gray-700 text-sm font-normal leading-5 text-gray-900`;

  const inputClassName = `${defaultClassName} ${className ?? ''}`;

  return (
    <div className="relative">
      {label && <label className="text-neutral-800 mb-2">{label}</label>}
      <input
        type={isPasswordVisible ? 'text' : type}
        className={inputClassName}
        {...rest}
      />
      {type === 'password' && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-9 left-80 p-2 w-[24px] h-[24px]"
        >
          {isPasswordVisible ? (
            <FaRegEye className="text-lg text-gray-700" />
          ) : (
            <FaRegEyeSlash className="text-lg text-gray-700" />
          )}
        </button>
      )}

      {inputLink && (
        <Link
          href={inputLink}
          className="block text-primary-800 hover:text-primary-900 disabled:text-gray-700 text-center text-xs font-light leading-5 mt-2 underline flex justify-end"
        >
          Esqueci minha senha
        </Link>
      )}
    </div>
  );
};

export default Input;
