import styles from './dropdown.module.css';

type Option = {
  value: string;
  label: string;
};

interface Props {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const DropDown = ({ options, value, onChange }: Props) => (
  <select value={value} onChange={(e) => onChange(e.target.value)} className={styles.select}>
    {options.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);

export default DropDown;
