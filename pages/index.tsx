import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BrowserRouter} from "react-router-dom";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
      <>
          <Navbar/>
          <div className={styles.main}>
              <div className={styles.hero}>
                  <h1 className={styles.heroTitle}>Sherif Big Dick is back in town...</h1>
                  <div className={styles.heroSubtitle}>Want to take a shot at him ?</div>
                  <div className={styles.heroBtnRegister}>PLAY NOW</div>
              </div>
              <div className={styles.infosMembers}>
                  <h2>Join the crew</h2>
                  <div className={styles.infosMembersBox}>

                  </div>
              </div>
          </div>
      </>

  )
}
