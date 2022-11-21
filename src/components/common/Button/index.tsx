import React, { ReactNode } from 'react';
import { IconType } from 'react-icons/lib';
import styles from './index.module.scss';

interface Props {
  type: 'button' | 'submit';
  onClick?: () => void;
  text: string;
  disabled?: boolean;
  style?: Partial<React.CSSProperties>;
  children?: ReactNode | IconType;
}

export const Button = ({ type, onClick, text, style, disabled, children }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${disabled ? styles.disabled : ''}`}
      disabled={disabled}
      style={{ ...style }}
    >
      <>
        {children}
        {text}
      </>
    </button>
  );
};
