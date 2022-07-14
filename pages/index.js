import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Strijp Spark</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap');
        </style> 
      </Head>

      <main>
        <Header title="Welkom bij Strijp Spark" />
        <p className="description">
          Deze website is nog even onder constructie.
        </p>
        <p className="disclaimer">
          Toch in contact komen? Stuur een email naar <a href="mailto:strijp.spark@gmail.com" target="_blank">strijp.spark@gmail.com</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
