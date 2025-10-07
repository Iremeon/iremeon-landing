import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className }) => {
  const baseStyles = 'px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors';
  const variantStyles = variant === 'primary' 
    ? 'bg-primarycolor-100 text-textcolor-300 hover:bg-hovercolor-100' 
    : 'border border-textcolor-300/30 text-textcolor-300 hover:bg-textcolor-300/10';

  return (
    <button className={`${baseStyles} ${variantStyles} ${className || ''}`}>
      {children}
    </button>
  );
};

export default Button;