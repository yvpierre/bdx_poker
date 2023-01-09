import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BrowserRouter} from "react-router-dom";
import Link from "next/link";
import Navbar from "../src/components/Navbar";

export default function Home() {
  return (
      <>
          <div className={"app"}>
          <div className={"body"}>
              <div className={"background"}></div>
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
                              <div className={styles.title}>294</div>
                              <div className={styles.subtitle}>Cowboys</div>
                          </div>
                          <div className={styles.elem}>
                              <div className={styles.title}>24</div>
                              <div className={styles.subtitle}>Games running</div>
                          </div>
                          <div className={styles.elem}>
                              <div className={styles.title}>4.2BTC </div>
                              <div className={styles.subtitle}>Played</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          </div>
      </>

  )
}
