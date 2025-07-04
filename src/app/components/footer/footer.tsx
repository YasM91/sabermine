import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => (
    <footer className={styles.footer}>
        <Link href='/' className={styles['footer-icon']}>
            <Image src='/sabermine-icon.webp' alt='Sabermine Logo' width={28} height={28} />
            <span>Sabermine</span>
        </Link>
        <p> © 2025 Sabermine™. All Rights Reserved.</p>
    </footer>
);

export default Footer;
