import React from 'react';
import styles from '../../styles/Navbar.module.css';
import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <div className={styles.navbar}>
                <Link href={"/"} className={styles.titre}>BDX Poker</Link>
                <div className={styles.list}>
                    {/* Example of multiple module classes in next */}
                    <Link href={"/members"} className={styles.item}>Les petits chats</Link>
                    <Link href={"/lobby"} className={styles.item}>Game test</Link>
                    <div className={styles.item}>Bientôt</div>
                </div>
                <div className={styles.auth}>
                    <div className={`${styles.btn} ${styles.btnRegister}`}>Register</div>
                    <a
                        href="/api/auth/login"
                        className={`${styles.btn} ${styles.btnLogin}`}
                    >
                        Log in
                    </a>
                    <a
                        href="/api/auth/logout"
                        className={`${styles.btn} ${styles.btnLogin}`}
                    >
                        Log out
                    </a>


                </div>
            </div>
        </div>
    );
};

export default Navbar;