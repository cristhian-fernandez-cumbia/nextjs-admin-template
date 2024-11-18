'use client';
import React, { useState } from 'react';
import { ButtonProps } from '@/interfaces/components';
import CircularProgress from '@mui/material/CircularProgress';
import clsx from 'clsx';

const Button: React.FC<ButtonProps> = ({ onClick, className, children, disabled }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || isLoading) return;

    setIsLoading(true);

    if (onClick) {
      try {
        await onClick(event);
      } catch (error) {
        console.error('Error en la acción del botón:', error);
      }
    }
    setIsLoading(false);
  };

  return (
    <button
      className={clsx(
        'flex items-center justify-center rounded-md px-4 py-2 transition-all duration-200',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
        { 'bg-gray-500 text-white': isLoading }
      )}
      onClick={handleClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <CircularProgress size={24} color="inherit" className="animate-spin" />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;