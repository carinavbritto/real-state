import React, { ReactNode } from 'react';

interface CardProps {
  title?: string;
  titleClassName?: string;
  subtitle?: string;
  subtitleClassName?: string;
  button?: ReactNode;
  image?: ReactNode;
  infoComponent?: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  titleClassName,
  subtitle,
  subtitleClassName,
  button,
  image,
  infoComponent,
  className
}) => {
  return (
    <div
      className={`bg-gray-08 border rounded-lg border-solid border-gray-15 flex flex-col items-start gap-1 shadow-md md:py-3 md:px-5 2xl:py-4 2xl:px-6 ${className}`}
    >
      {image && <div className="mb-2">{image}</div>}
      {title && (
        <h2
          className={`sm:text-2xl md:text-3xl 2xl:text-4xl font-bold tracking-tight leading-tight text-white-0 ${titleClassName}`}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={`text-gray-600 sm:text-sm md:text-base 2xl:text-lg 2xl:leading-6 font-medium text-gray-60 ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
      {button && <div>{button}</div>}
      {infoComponent && <div>{infoComponent}</div>}
    </div>
  );
};

export default Card;
