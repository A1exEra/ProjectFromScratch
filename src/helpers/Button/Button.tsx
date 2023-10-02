/* eslint-disable react/require-default-props */
import './Button.scss';
import { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  className?: string;
}

function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button type="button" onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
}

export default Button;
