import React from 'react';
import { useRouter} from "next/router";
import {GetServerSidePropsContext} from "next";
import {string} from "prop-types";
import Link from "next/link";
import styles from '../../styles/Game.module.css'
import { Player } from "../../src/features/Player";

// @ts-ignore
export default function Game({  }) {

    class Game {
        id:string;
        players:Array<Player>;

        constructor(id:string, players:Array<Player>) {
            this.id = id;
            this.players = players;
        }

        getID():string {
            return this.id;
        }

        addPlayer(player:Player) {
            if(this.players.length<6) {
                this.players.push(player)
            } else {
                console.error("Partie déjà pleine")
                alert("Partie déjà remplie")
            }
        }

        show():void {
            console.log("Id de la partie : "+this.id);
        }

    }

    const router = useRouter()
    const {user} = router.query

    const player2 = new Player("Eliott",1000)
    const player4 = new Player("Arthur",123.11)
    const player5 = new Player("Abdel",922121)

    let game1 = new Game("TZAS21", [new Player("Pierre", 0), new Player("Pablo", 223)]);
    game1.addPlayer(player2)

    const test = [1,2,3,4]

    // @ts-ignore
    function createCard(joueur) {
        return (
            <div className={`${styles.card} ${styles.seat}`}>
                <div className={styles.img}></div>
                <div className={styles.cardTop}>{joueur.getNom()}</div>
                <div className={styles.cardBottom}>802.000€</div>
            </div>
        )
    }

    if(game1.players.length<6) {
        while(game1.players.length<6){
            game1.players.push(new Player("Vide", 0))
        }
    }


    return (
        <>
            <div className={styles.body}>
                <div className={styles.board}>
                    {game1.players.map((player) => {
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