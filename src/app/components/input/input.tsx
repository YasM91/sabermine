import { InputHTMLAttributes } from 'react';
import styles from './input.module.css';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input = ({ label, id, ...props }: Props) => (
  <div>
    {label && <label htmlFor={id}>{label}</label>}
    <input id={id} className={styles.input} {...props} />
  </div>
);

export default Input;
