// components/Header.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css'; // Correct import
const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <button className={styles.button}>تسجيل</button>
            <nav className={styles.nav}>
                <Link href="#" className={styles.link}>الإعدادات</Link>
                <Link href="#" className={styles.link}>السلة</Link>
                <Link href="#" className={styles.link}>تواصل معنا</Link>
                <Link href="#" className={styles.link}>الكتب</Link>
                <Link href="#" className={styles.link}>الرئيسية</Link>
            </nav>
            <Image src="/logo.png" alt="Logo" width={100} height={50} style={{ marginRight: '100px' }} />
        </header>
    );
};

export default Header;