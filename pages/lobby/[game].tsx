import React from 'react';
import { useRouter} from "next/router";
import {GetServerSidePropsContext} from "next";
import {string} from "prop-types";
import Link from "next/link";
import styles from '../../styles/Game.module.css'

// @ts-ignore
export default function Game({  }) {
    const router = useRouter()
    const {user} = router.query

    const players = ["Alan food challenge","Pierre","Eliott","Pablo","Arthur","Abdel"]

    const test = [1,2,3,4]

    // @ts-ignore
    function createCard(pseudo) {
        return (
            <div className={`${styles.card} ${styles.seat}`}>
                <div className={styles.img}></div>
                <div className={styles.cardTop}>{pseudo}</div>
                <div className={styles.cardBottom}>802.000€</div>
            </div>
        )
    }

    function populate(){

    }

    return (
        <>
            <div className={styles.body}>
                <div className={styles.board}>
                    {players.map((player) => {
                        return createCard(player)
                    })}
                </div>
            </div>

        </>
    )
}

/*
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const req = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await req.json()

    return {
        props: { chat: data },
    }
}

 */