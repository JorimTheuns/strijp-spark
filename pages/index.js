import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen">
      <Head>
        <title>Strijp Spark</title>
      </Head>

      <main className="flex flex-col items-center mx-auto my-auto space-y-4 max-w-lg text-center">
        <Header title="Welkom bij Strijp Spark" />
        <p className=" text-lg">
          Deze website is nog even onder constructie.
        </p>
        <p className="">
          Toch in contact komen? Stuur een email naar <a href="mailto:strijp.spark@gmail.com" target="_blank">strijp.spark@gmail.com</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
