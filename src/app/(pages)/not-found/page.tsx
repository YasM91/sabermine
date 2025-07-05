import Link from 'next/link';
import styles from './not-found.module.css';
import Image from 'next/image';

export default function PageError() {
  return (
    <section className={styles['not-found__container']}>
      <Image src="/sabermine-icon.webp" alt="Sabermine Logo" width={28} height={28} />

      <p>
        <b>Uh-oh!</b>
      </p>

      <p className={styles['subheading']}>Sorry, the page you requested was not found</p>

      <Link href="/" className={styles['not-found-link']}>
        Click here to go home
      </Link>
    </section>
  );
}
