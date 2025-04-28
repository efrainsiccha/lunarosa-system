import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick = () => {}, // por ahora no hace nada
  className = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-black text-white border border-white
        px-8 py-1 sm:px-4 sm:py-2
        rounded
        transition-colors duration-500 ease-in-out
        hover:bg-white hover:text-black
        w-full sm:w-auto md:w-[20rem] lg:w-auto
        ${className}
      `}      
    >
      {text}
    </button>
  );
};
