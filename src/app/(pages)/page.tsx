'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { Button, TextArea, DropDown, Input, List } from '@components';
import { loremIpsum } from 'react-lorem-ipsum';

export default function Home() {
  const [switchOn, setSwitchOn] = useState(false);
  const [regex, setRegex] = useState('');

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

        {switchOn && (
          <div>
            <div>
              <Input />
              <Button
                item={{
                  type: 'submit',
                  label: 'add',
                }}
              />
            </div>
            <List regexItems={['hi', 'k', 'l']} type="edit" />
          </div>
        )}

        {!switchOn && (
          <div>
            <div>
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
          </div>
        )}
      </section>

      <section className={styles['textarea__container']}>
        <TextArea value={loremIpsum()[0]} />
      </section>
    </div>
  );
}
