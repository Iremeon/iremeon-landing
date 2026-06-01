import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, variant = 'primary', className }) => {
  const baseStyles = 'px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors';
  // const variantStyles = variant === 'primary' 
  //   ? 'bg-primarycolor-100 text-textcolor-300 hover:bg-hovercolor-100' 
  //   : 'border border-textcolor-300/30 text-textcolor-300 hover:bg-textcolor-300/10';
  const variantStyles = variant === 'primary' 
    ? 'bg-textcolor-300 text-primary hover:bg-hovercolor-100' 
    : 'border border-textcolor-300/30 text-textcolor-300 hover:bg-textcolor-300/10';

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles} ${className || ''}`}>
      {children}
    </button>
  );
};

export default Button;