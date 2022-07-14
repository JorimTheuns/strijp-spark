import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Strijp Spark</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welkom bij Strijp Spark" />
        <p className="description">
          Deze website is nog even onder constructie.
        </p>
      </main>

      <Footer />
    </div>
  )
}
