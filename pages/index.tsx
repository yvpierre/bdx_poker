import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BrowserRouter} from "react-router-dom";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
        <div className={styles.main}>
            <Navbar/>
          <h1>Sherif Big Dick is back in town...</h1>
          <div>
            <Link href={"/members"} className={styles.item}>Les petits chats</Link>
          </div>
        </div>
  )
}
