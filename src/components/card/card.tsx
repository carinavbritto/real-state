import React from 'react';

interface CardProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, className }) => {
  return (
    <div
      className={`bg-transparent border rounded-lg border-solid border-gray-15 flex flex-col items-start gap-1 shadow-md md:py-3 md:px-5 2xl:py-4 2xl:px-6 ${className}`}
    >
      {title && (
        <h2 className="sm:text-2xl md:text-3xl 2xl:text-4xl font-bold tracking-tight leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-gray-600 sm:text-sm md:text-base 2xl:text-lg 2xl:leading-6 font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Card;
