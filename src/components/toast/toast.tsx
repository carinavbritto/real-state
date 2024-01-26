'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { IoCloseOutline } from 'react-icons/io5';
import Button from '../button/button';

export default function Toast() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="w-full max-h-63 flex items-center justify-between gap-3 pointer-events-auto py-2 px-8 bg-gray-15 text-white-0">
          <div className="flex items-center justify-center gap-3">
            <p className="sm:text-xs md:text-sm 2xl:text-lg ml-96 pl-36">
              ✨ Discover Your Dream Property with Estatein
            </p>
            <Link
              href="#"
              className="sm:text-xs md:text-sm 2xl:text-lg underline"
            >
              Learn more
            </Link>
          </div>

          <Button
            onClick={handleClose}
            icon={<IoCloseOutline className="text-white-0 text-sm" />}
            buttonStyle="tertiary"
          />
        </div>
      )}
    </>
  );
}
