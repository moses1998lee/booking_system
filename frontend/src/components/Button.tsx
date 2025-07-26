import type React from "react";
import styles from './Button.module.css';

interface ButtonProps {
  onClick?: (value: React.ReactNode) => void;
  children?: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  const cls = `${styles.button}`;
  const handleClick = () => {
    if (onClick) {
      onClick(children);
    }
  };
  return (
    <button
      className={cls}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
