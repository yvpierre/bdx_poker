import React from 'react';
import styles from "../../styles/UserMenu.module.css";
import {useUser} from "@auth0/nextjs-auth0/client";

const UserMenu = () => {

    const { user } = useUser()

    if(user){
        return (
            <div className={styles.dropDown}>
                <div className={styles.visible}>
                    {/* @ts-ignore */}
                    <img src={user.picture} alt={user.name}
                         width={35}
                         height={35}
                         className={styles.img}
                    />
                </div>
                <div className={styles.dropDownContent}>
                    <a
                        href={"/users/userProfile"}
                        className={`${styles.item} ${styles.userProfile}`}
                    >
                        <div className={styles.userName}>{user.name}</div>
                        <div className={styles.userId}>@{user.nickname}</div>
                    </a>
                    <a
                        href="/settings"
                        className={styles.item}
                    >
                        Settings
                    </a>
                    <a
                        href="/api/auth/logout"
                        className={styles.item}
                    >
                        <div className={styles.iconLogout}></div>
                        Sign out
                    </a>
                </div>
            </div>
        );
    }

};

export default UserMenu;