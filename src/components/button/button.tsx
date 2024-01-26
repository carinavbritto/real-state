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
  buttonStyle?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  href,
  buttonText,
  icon,
  className,
  iconClasses,
  iconPosition = 'left',
  onClick,
  buttonStyle = 'primary'
}) => {
  const hasContent = buttonText !== undefined && buttonText !== null;
  const hasIcon = icon !== undefined && icon !== null;

  const primaryButtonClasses = `text-white border border-purple-60 bg-purple-60 hover:bg-opacity-70 disabled:bg-gray-300 text-white disabled:text-gray-700`;

  const secondaryButtonClasses = `text-primary-900 bg-transparent border border-solid border-gray-15 hover:border-0 hover:bg-white disabled:bg-gray-300 hover:text-purple-60 disabled:text-gray-700`;

  const buttonClasses = `sm:text-sm md:text-sm 2xl:text-lg inline-flex items-center justify-center rounded-md gap-3 focus:outline-none transition duration-300 cursor-pointer py-2 px-6 ${buttonStyle === 'primary' ? primaryButtonClasses : secondaryButtonClasses} ${className ?? ''}`;

  const content = (
    <button
      className={`${buttonClasses} ${iconPosition === 'right' ? 'flex-row-reverse' : ''}`}
      onClick={onClick}
    >
      {hasIcon && (
        <span className={`text-xl ${iconClasses ?? ''}`}>{icon}</span>
      )}
      {hasContent && <span>{buttonText}</span>}
    </button>
  );

  return href ? <Link href={href}>{content}</Link> : <>{content}</>;
};

export default Button;
