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
                  <div className={styles.left}>
                      <h1 className={styles.title}>Sherif Big Dick is back in town...</h1>
                      <div className={styles.subtitle}>Want to take a shot at him ?</div>
                      <div className={styles.btnRegister}>PLAY NOW</div>
                  </div>
                  <div className={styles.right}>
                      <img src={"/assets/humaaans/hero.png"} height={350} width={322.18} alt={"illustration of a cowboy"} title={"Hero Cowboy"}/>
                  </div>
                  </div>
              <div className={styles.infosMembers}>
                  <h2>Join the crew</h2>
                  <div className={styles.box}>
                      <div className={styles.elem}>
                          <div className={styles.elemTitle}>294</div>
                          <div className={styles.elemSubtitle}>Cowboys</div>
                      </div>
                      <div className={styles.elem}>
                          <div className={styles.elemTitle}>24</div>
                          <div className={styles.elemSubtitle}>Games running</div>
                      </div>
                      <div className={styles.elem}>
                          <div className={styles.elemTitle}>4.2BTC </div>
                          <div className={styles.elemSubtitle}>Played</div>
                      </div>
                  </div>
              </div>
          </div>
      </>

  )
}
