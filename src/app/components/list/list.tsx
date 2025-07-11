import { Button, Input } from '@components';
import styles from './list.module.css';

interface Props {
  regexItems: string[];
  type?: 'edit' | null;
}

const List = ({ regexItems, type }: Props) => (
  <ul className={styles.list}>
    {regexItems.map((item, index) =>
      type == 'edit' ? (
        <li key={index} className={styles['list__container']}>
          <Input defaultValue={item} />

          <div className={styles['list-buttons']}>
            <Button
              item={{
                type: 'submit',
                label: 'edit',
                action: 'edit',
              }}
            />

            <Button
              item={{
                type: 'submit',
                label: 'delete',
                action: 'delete',
              }}
            />
          </div>
        </li>
      ) : (
        <li key={index}>{item}</li>
      )
    )}
  </ul>
);

export default List;
