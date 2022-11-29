import Head from 'next/head'
import { Main } from '../components/main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UEFA CHAMPIONS LEAGUE 2021 - 2022</title>
        <meta name="description" content="UEFA CHAMPIONS LEAGUE 2021 - 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Main />
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          UEFA CHAMPIONS LEAGUE 2021 - 2022 ⚽️ 🏆
        </a>
      </footer>
    </div>
  )
}
