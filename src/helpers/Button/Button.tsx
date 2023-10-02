/* eslint-disable react/require-default-props */
import { ReactNode, MouseEvent } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  className?: string;
}

function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
