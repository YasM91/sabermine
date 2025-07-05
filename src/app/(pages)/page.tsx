'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { Button, TextArea, DropDown, Input, List } from '@components';
import { loremIpsum } from 'react-lorem-ipsum';

export default function Home() {
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <div className={styles.container}>
      <section>
        <div className={styles['switch-buttons']}>
          <Button
            item={{
              type: 'switch',
              label: 'edit',
              isSelected: switchOn,
              onToggle: () => setSwitchOn(true),
            }}
          />

          <Button
            item={{
              type: 'switch',
              label: 'approval',
              isSelected: !switchOn,
              onToggle: () => setSwitchOn(false),
            }}
          />
        </div>
      </section>

      <section className={styles['textarea__container']}>
        <TextArea value={loremIpsum()[0]} />

        <Input />

        <DropDown
          options={[{ value: 'hi', label: 'hi' }]}
          value={''}
          onChange={() => alert('hi')}
        />

        <List regexItems={['hi', 'k', 'l']} />
      </section>
    </div>
  );
}
