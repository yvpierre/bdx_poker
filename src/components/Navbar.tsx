import React from 'react';
import styles from '../../styles/Navbar.module.css';
import Link from "next/link";
import {useUser} from "@auth0/nextjs-auth0/client";
import UserMenu from "./userMenu";

const ButtonNavbar = () => {

    const { user } = useUser()

    if(!user || user.isLoggedIn === false){
        return (
            <a
                href="/api/auth/login"
                className={`${styles.btn} ${styles.btnRegister}`}
            >
                Join now !
            </a>
        )
    } else {

        return (
            <>
                {/* @ts-ignore */}
                <UserMenu />
            </>
        )
    }
}

const Navbar = () => {
    return (
        <div>
            <div className={styles.navbar}>
                <Link href={"/"} className={styles.titre}>BDX Poker</Link>
                <div className={styles.list}>
                    {/* Example of multiple module classes in next */}
                    <Link href={"/chats"} className={styles.item}>Les petits chats</Link>
                    <Link href={"/lobby"} className={styles.item}>Game test</Link>
                    <div className={styles.item}>Bientôt</div>
                </div>
                <div className={styles.auth}>
                    <ButtonNavbar/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;