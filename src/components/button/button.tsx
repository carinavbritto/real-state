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
    'text-neutral-0 bg-primary-800 hover:bg-primary-900 disabled:bg-gray-700 text-fontColor-dark-primary disabled:text-fontColor-disabled';
  const secondaryButtonClasses =
    'text-primary-900 bg-neutral-0 hover:bg-primary-900 disabled:bg-gray-700 hover:text-neutral-0 disabled:text-fontColor-disabled';

  const buttonClasses = `inline-flex items-center justify-center rounded-lg gap-3 focus:outline-none transition duration-300 ease-in-out cursor-pointer ${buttonStyle === 'primary' ? primaryButtonClasses : secondaryButtonClasses} ${className ?? ''}`;

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
