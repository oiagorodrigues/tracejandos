import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tracejandos</title>
        <meta name="description" content="Site e loja da marca Tracejandos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Tracejandos.com.br</h1>

        <p className={styles.description}>
          Em breve, site e loja da marca estaram no ar!
        </p>

        <div className={styles.social}>
          <a
            href="https://www.instagram.com/tracejandos"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#833ab4' }}
          >
            @tracejandos
          </a>

          <a
            href="https://www.instagram.com/sidianerocha/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#C13584' }}
          >
            @sidianerocha
          </a>

          <a href="https://www.behance.net/sidianerocha/">behance</a>
        </div>
      </main>
    </div>
  )
}
