import styles from './textarea.module.css';

interface Props {
  label?: string;
  value?: string;
}

const TextArea = ({ value, label }: Props) => (
  <div>
    {label && <label>{label}</label>}
    <textarea value={value} readOnly rows={12} className={styles.textarea} />
  </div>
);

export default TextArea;
