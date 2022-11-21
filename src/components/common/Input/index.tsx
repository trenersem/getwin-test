import React, { useState } from 'react';
import styles from './index.module.scss';

interface Props {
  id?: string;
  placeholder?: string;
  name?: string;
  type?: string;
  value: string;
  onChange?: (e: string | any) => void;
  style?: Partial<React.CSSProperties>;
  err?: string;
}
const Input = ({ id, placeholder, name, type, value, onChange, style, err }: Props) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={styles.container}>
      <input
        id={id}
        className={`${styles.input} ${focused ? styles.onfocus : ''}  ${
          err ? styles.err : ''
        }`}
        placeholder={focused ? '' : placeholder}
        value={value}
        onChange={(e) => {
          !!onChange && onChange(e.target.value);
        }}
        type={type}
        name={name}
        style={{ ...style }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <span
        className={`${styles.label} ${err ? styles.label_err : ''}`}
        style={{ opacity: `${focused || err ? '1' : '0'}` }}
      >
        {err ? err : placeholder}
      </span>
    </div>
  );
};

export default Input;
