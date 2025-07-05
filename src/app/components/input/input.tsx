import { InputHTMLAttributes } from 'react';
import styles from './input.module.css';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: boolean;
};

const Input = ({ label, id, error = false, ...props }: Props) => (
  <div>
    {label && <label htmlFor={id}>{label}</label>}
    <input id={id} className={styles.input} {...props} />
    {error && (
      <span className={styles.error} aria-live="polite" role="status">
        Invalid regex, please try again
      </span>
    )}
  </div>
);

export default Input;
