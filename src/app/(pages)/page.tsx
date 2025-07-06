'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { Button, TextArea, DropDown, Input, List } from '@components';
import { loremIpsum } from 'react-lorem-ipsum';

export default function Home() {
  const [switchOn, setSwitchOn] = useState(false);
  const [regex, setRegex] = useState('');

  const EditSelected = () => (
    <>
      <div className={styles.edit}>
        <Input />
        <Button
          item={{
            type: 'submit',
            label: 'add',
          }}
        />
      </div>
      <List regexItems={['hi', 'k', 'l']} type="edit" />
    </>
  );

  const ApprovalSelected = () => (
    <>
      <div className={styles.approval}>
        <DropDown
          options={[
            { value: '', label: '' },
            { value: 'hi', label: 'hi' },
            { value: 'hie', label: 'hie' },
          ]}
          value={regex}
          onChange={(e) => setRegex(e)}
        />

        <Button
          item={{
            type: 'submit',
            label: 'approve',
          }}
        />
      </div>

      {regex && <List regexItems={['hi', 'k', 'l']} />}
    </>
  );

  const SwitchButtons = () => (
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
  );

  return (
    <div className={styles.container}>
      <section className={styles['left__container']}>
        <SwitchButtons />

        {switchOn && <EditSelected />}

        {!switchOn && <ApprovalSelected />}
      </section>

      <section className={styles['right__container']}>
        <TextArea value={loremIpsum()[0]} />
      </section>
    </div>
  );
}
