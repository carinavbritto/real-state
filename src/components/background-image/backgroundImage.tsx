import React from 'react';
import Image from 'next/image';

interface BackgroundImageProps {
  imageUrl: string;
  className?: string;
  children?: React.ReactNode;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  imageUrl,
  className,
  children
}) => {
  return (
    <div
      className={`relative flex flex-col h-full ${className}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt="Background Image"
          priority={true}
          className="object-cover"
          height={920}
        />
      </div>

      {children}
    </div>
  );
};

export default BackgroundImage;
