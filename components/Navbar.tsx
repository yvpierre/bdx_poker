import React from 'react';
import styles from '../styles/Navbar.module.css';
import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <div className={styles.navbar}>
                <Link href={"/"} className={styles.titre}>BDX Poker</Link>
                <div className={styles.list}>
                    {/* Example of multiple module classes in next */}
                    <div className={`${styles.item} ${styles.first}`}>Membres</div>
                    <div className={styles.item}>Bientôt</div>
                    <div className={styles.item}>Bientôt</div>
                    <div className={styles.item}>Bientôt</div>
                </div>
                <div className={styles.auth}>
                    <div className={`${styles.btn} ${styles.btnRegister}`}>Inscription</div>
                    <div className={`${styles.btn} ${styles.btnLogin}`}>Connexion</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;