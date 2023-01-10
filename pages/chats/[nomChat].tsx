import React from 'react';
import { useRouter} from "next/router";
import {GetServerSidePropsContext} from "next";
import {string} from "prop-types";
import Link from "next/link";
import styles from '../../styles/Chats.module.css'

// @ts-ignore
export default function nomChat({ chat }) {
    const router = useRouter()
    const {nomChat} = router.query

    return (
        <>
            <div className={styles.body}>
                <h1>Salut {nomChat}</h1>
                <img src={chat[0].url} width={500} height={500} className={styles.imgChat}/>
                <Link href={"/chats"} className={styles.btnRetour}>Retour</Link>
            </div>
        </>

    )
}


export async function getServerSideProps(context: GetServerSidePropsContext) {
    const req = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await req.json()

    return {
        props: { chat: data },
    }
}