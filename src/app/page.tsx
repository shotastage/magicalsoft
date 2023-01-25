import Image from 'next/image'
import { add } from "@/lib/engine_bg.wasm"
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })


const wasmAdd = add(1, 2);

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Magicalsoft</h1>
      </div>
      <div className={styles.center}>
        <h1>Result {wasmAdd}</h1>
      </div>
    </main>
  )
}
