import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Magicalsoft</title>
        <meta name="description" content="This is Magicalsoft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Magicalsoft
        </h1>

        <p className={styles.description}>
          Now under construction.
        </p>
      </main>
    </div>
  )
}
