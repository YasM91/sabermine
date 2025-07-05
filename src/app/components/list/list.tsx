import styles from './list.module.css';

interface Props {
  regexItems: string[];
}

const List = ({ regexItems }: Props) => (
  <ul className={styles.list}>
    {regexItems.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default List;
