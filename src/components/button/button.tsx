import Link from 'next/link';
import { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  buttonText?: string;
  icon?: ReactNode;
  href?: string;
  className?: string;
  iconClasses?: string;
  iconPosition?: 'left' | 'right';
  onClick?: MouseEventHandler<HTMLSpanElement>;
  buttonStyle?: 'primary' | 'secondary' | 'tertiary';
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  href,
  buttonText,
  icon,
  className,
  iconClasses,
  iconPosition = 'left',
  onClick,
  buttonStyle = 'primary',
  type = 'button'
}) => {
  const hasContent = buttonText !== undefined && buttonText !== null;
  const hasIcon = icon !== undefined && icon !== null;

  const primaryButtonClasses =
    'text-white-0 bg-purple-60 border border-solid border-purple-60 hover:bg-purple-75 rounded-lg px-5 py-3 text-sm font-medium';
  const secondaryButtonClasses =
    'text-white-0 bg-gray-08 border border-solid border-gray-15 hover:bg-purple-75 rounded-lg px-5 py-3 text-sm font-medium';
  const tertiaryButtonClasses =
    'text-white-0 bg-gray-60 hover:bg-purple-75 rounded-full p-1 text-sm';

  let buttonClasses = `inline-flex items-center justify-center gap-3 focus:outline-none transition duration-300 ease-in-out cursor-pointer disabled:bg-gray-700 disabled:text-fontColor-disabled`;

  switch (buttonStyle) {
    case 'primary':
      buttonClasses += ` ${primaryButtonClasses}`;
      break;
    case 'secondary':
      buttonClasses += ` ${secondaryButtonClasses}`;
      break;
    case 'tertiary':
      buttonClasses += ` ${tertiaryButtonClasses}`;
      break;
    default:
      buttonClasses += ` ${primaryButtonClasses}`;
  }

  if (className) {
    buttonClasses += ` ${className}`;
  }

  const content = (
    <>
      {hasIcon && (
        <span className={`text-xl ${iconClasses ?? ''}`}>{icon}</span>
      )}
      {hasContent && <span>{buttonText}</span>}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${buttonClasses} ${iconPosition === 'right' ? 'flex-row-reverse' : ''}`}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  } else {
    return (
      <button
        type={type}
        className={`${buttonClasses} ${iconPosition === 'right' ? 'flex-row-reverse' : ''}`}
        onClick={onClick}
      >
        {content}
      </button>
    );
  }
};

export default Button;
