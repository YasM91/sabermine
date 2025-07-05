'use client';

import clsx from 'clsx';
import { useFormStatus } from 'react-dom';
import Loader from '../loader/loader';
import styles from './button.module.css';

type SubmitProps = {
  type: 'submit';
  label: string;
};

type SwitchProps = {
  label: string;
  type: 'switch';
  isSelected: boolean;
  onToggle: () => void;
};

type ButtonProps = {
  item: SubmitProps | SwitchProps;
};

const SwitchButton = ({ isSelected, onToggle, label }: SwitchProps) => (
  <div
    className={clsx(styles['button-switch'], isSelected && styles.on)}
    role="switch"
    aria-checked={isSelected}
    onClick={onToggle}
  >
    {label}
  </div>
);

const SubmitButton = ({ label }: SubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      className={clsx(styles.button, pending && styles['button-disabled'])}
      disabled={pending}
      aria-disabled={pending}
      type="submit"
    >
      {pending ? <Loader /> : label}
    </button>
  );
};

const Button = ({ item }: ButtonProps) =>
  item.type === 'switch' ? (
    <SwitchButton
      label={item.label}
      type={item.type}
      isSelected={item.isSelected}
      onToggle={item.onToggle}
    />
  ) : (
    <SubmitButton type={item.type} label={item.label} />
  );

export default Button;
