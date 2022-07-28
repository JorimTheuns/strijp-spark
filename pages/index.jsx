import Head from "next/head";
import CenterHeader from "@components/Center-Header";
import StripHeader from "@components/StripHeader";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-full p-1">
      <Head>
        <title>Strijp Spark</title>
      </Head>
      <StripHeader title="Welkom bij Strijp Spark" />
      <main className="flex flex-col space-y-4 text-center p-1 h-full">
        <p className=" text-lg">Deze website is nog even onder constructie.</p>
        <p className="">
          Toch in contact komen? Stuur een email naar{" "}
          <a href="mailto:strijp.spark@gmail.com" target="_blank">
            strijp.spark@gmail.com
          </a>
        </p>
        <p></p>
      </main>

      <Footer />
    </div>
  );
}
