import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

interface Props {
    title: string;
}

const Header = ({ title }: Props) => (
    <header className={styles.header}>
        <Link href='/' className={styles['header-icon']}>
            <Image src='/sabermine-icon.webp' alt='Sabermine Logo' width={28} height={28} />
            <span>Sabermine</span>
        </Link>
        <h1 className={styles['header-title']}>{title}</h1>
    </header>
);

export default Header;
