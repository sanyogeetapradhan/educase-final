import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'neutral';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'py-3 px-4 rounded-md font-medium transition-all duration-200 focus:outline-none text-center';
  
  const variantStyles = {
    primary: 'bg-purple-600 hover:bg-purple-700 text-white disabled:bg-purple-400',
    secondary: 'bg-purple-100 hover:bg-purple-200 text-purple-800 disabled:bg-purple-50 disabled:text-purple-400',
    neutral: 'bg-gray-300 hover:bg-gray-400 text-gray-700 disabled:bg-gray-200 disabled:text-gray-500',
  };
  
  return (
    <button
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${props.disabled ? 'cursor-not-allowed' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};