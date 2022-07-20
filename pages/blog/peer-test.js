import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Splash from '@components/Splash-cover'

export default function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head> 
        <title>Strijp Spark Blog</title>
      </Head>
      <Header title="Strijp Spark Blog" />
      <Splash image="../peer-test/Peer-test-images/DSC_0313.jpg" title="Peer Test One"></Splash>

      <main className="flex flex-col mx-auto my-auto max-w-lg text-center p-1">
        <p className=" text-lg">
          Deze website is nog even onder constructie.
        </p>
        <p className="">
          Toch in contact komen? Stuur een email naar <a href="mailto:strijp.spark@gmail.com" target="_blank">strijp.spark@gmail.com</a>
        </p>
        <p>
          
        </p>
      </main>

      <Footer />
    </div>
  )
}
