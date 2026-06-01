import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, variant = 'primary', className }) => {
  const baseStyles = 'px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors';
  
  const variantStyles =
    variant === 'primary'
      ? 'bg-primarycolor-100 text-textcolor-300 hover:b-100'
      : variant === 'secondary'
      ? 'bg-textcolor-300 text-primarycolor-100 hover:bg-primarycolor-300 hover:text-textcolor-300'
      : 'bg-buttoncolor-200 text-textcolor-100 hover:brightness-90';

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles} ${className || ''}`}>
      {children}
    </button>
  );
};

export default Button;