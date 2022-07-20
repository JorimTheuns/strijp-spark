import Head from "next/head";
import CenterHeader from "@components/Center-Header";
import Footer from "@components/Footer";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Sticker() {
  const route = useRouter();
  useEffect(() => {
    setTimeout(() => {
      route.push("/");
    }, 1500);
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Strijp Spark</title>
      </Head>
      <main className="flex flex-col items-center mx-auto my-auto space-y-4 max-w-lg text-center p-1">
        <CenterHeader title="Mooie Sticker hé?" />
      </main>
    </div>
  );
}
