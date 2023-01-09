import React from 'react';
import styles from "../../styles/UserMenu.module.css";
import {useUser} from "@auth0/nextjs-auth0/client";

const UserMenu = () => {

    const { user } = useUser()

    if(user){
        return (
            <div className={styles.dropDown}>
                <div className={styles.visible}>
                    <div className={styles.nomUser}>{user.name}</div>
                    {/* @ts-ignore */}
                    <img src={user.picture} alt={user.name}
                         width={25}
                         height={25}
                         className={styles.img}
                    />
                </div>
                <div className={styles.dropDownContent}>
                    <a className={styles.item}>Profil</a>
                    <a
                        href="/api/auth/logout"
                        className={styles.item}
                    >
                        Logout
                    </a>
                </div>
            </div>
        );
    }

};

export default UserMenu;