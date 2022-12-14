import React from 'react';
import { useRouter} from "next/router";
import {GetServerSidePropsContext} from "next";
import {string} from "prop-types";

// @ts-ignore
export default function Membre({ chat }) {
    const router = useRouter()
    const {user} = router.query

    console.table(chat)
    return (
        <div>
            <h1>Salut {user}</h1>
            <img src={chat[0].url} width={chat[0].with} height={chat[0].height}/>
        </div>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const req = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await req.json()
    console.log("test")

    return {
        props: { chat: data },
    }
}