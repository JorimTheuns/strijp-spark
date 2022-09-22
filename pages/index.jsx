import Head from "next/head"
import CenterHeader from "@components/Center-Header"
import StripHeader from "@components/StripHeader"
import Footer from "@components/Footer"
import BasicHeader from "@components/BasicHeader"
import TextBox from "@components/TextBox"
import Logos from "@components/Logos"
import Image from "next/image"
import AnythingButton from "@components/AnythingButton"

import { useInView } from "react-intersection-observer"
import ScrollDown from "@components/ScrollDown"

export default function Home() {
  const options = { triggerOnce: true }
  const [ref1, inView1] = useInView(options)
  const [ref2, inView2] = useInView(options)
  const [ref3, inView3] = useInView(options)
  const [ref4, inView4] = useInView(options)
  const [ref5, inView5] = useInView(options)
  const [ref6, inView6] = useInView(options)
  const [ref7, inView7] = useInView(options)
  const [ref8, inView8] = useInView(options)
  const [ref9, inView9] = useInView(options)
  const [ref10, inView10] = useInView(options)
  const [ref11, inView11] = useInView(options)

  return (
    <div className="flex flex-col items-center h-full p-1">
      <Head>
        <title>Strijp Spark</title>
      </Head>
      <BasicHeader
        icon="/SSLogo.png"
        title="Strijp-Spark"
        subtitle="Brainstormen met heel Strijp-S, voor en door bewoners georganiseerd"
      ></BasicHeader>
      <section className="max-w-5xl p-4 pt-16 gap-8 grid lg:grid-cols-5 lg:auto-rows-min min-h-screen content-center">
        <div
          ref={ref1}
          className={`text-4xl lg:col-span-3 self-end leading-tight transition-opacity" ${
            inView1 ? "animate-slidein" : ""
          }`}
        >
          We organiseren bijeenkomsten waar je een impact kunt hebben op
          Strijp-S,{" "}
          <span className="font-bold bg-day-green">
            door nieuwe mensen te ontmoeten en boeidende gesprekken te hebben.
          </span>
        </div>
        <div
          ref={ref2}
          className={`lg:col-span-3 ${inView2 ? "animate-slidein" : ""}`}
        >
          <AnythingButton
            dataTallyOpen="mD469R"
            dataTallyLayout="modal"
            dataTallyWidth="720"
            dataTallyOverlay="1"
            dataTallyEmojiText="📝"
            dataTallyEmojiAnimation="heart-beat"
            classes="bg-day-green"
          >
            <TextBox
              icon="📝"
              title="1. Doe mee!"
              subtitle="Je kunt je aanmelden om mee te doen! We zullen willekeurig 100+ mensen selecteren voor de eerste sessie."
            ></TextBox>
          </AnythingButton>
        </div>
        <div
          ref={ref3}
          className={`lg:col-span-3 lg:col-start-2 ${
            inView3 ? "animate-slidein" : ""
          }`}
        >
          <TextBox
            icon="😃"
            title="2. Leuke gesprekken"
            subtitle="Op de dag van het evenement organiseren we veel kleine gesprekken waar je moet samenwerken om te kunnen reageren en antwoorden op andere groepen."
          ></TextBox>
        </div>
        <div
          ref={ref4}
          className={`lg:col-span-3 lg:col-start-3 ${
            inView4 ? "animate-slidein" : ""
          }`}
        >
          <TextBox
            icon="🛠"
            title="3. Maak impact"
            subtitle="Dembrane geeft de inzichten en ideeën van de dag door aan organisaties in de omgeving, zodat zij hun diensten kunnen verbeteren op basis van uw input."
          ></TextBox>
        </div>
      </section>
      <section className="min-w-[80vw] max-w-7xl p-4 pt-16 gap-8 grid lg:auto-rows-min content-center min-h-[80vh] grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
        <h1
          ref={ref5}
          className={`text-4xl self-end leading-tight text-center font-bold col-span-full ${
            inView5 ? "animate-slidein" : ""
          }`}
        >
          Our partners
        </h1>
        <img
          ref={ref6}
          className={`place-self-center ${inView6 ? "animate-slidein" : ""}`}
          src="/eindhoven.jpg"
          alt="eindhoven"
        />
        <img
          ref={ref7}
          className={`place-self-center ${inView7 ? "animate-slidein" : ""}`}
          src="/keuken-confessies.png"
          alt="keuken-confessies"
        />
        <img
          ref={ref8}
          className={`place-self-center ${inView8 ? "animate-slidein" : ""}`}
          src="/Strijp-PB.jpg"
          alt="Strijp Park Beheer"
        />
        <img
          ref={ref9}
          className={`place-self-center  ${inView9 ? "animate-slidein" : ""}`}
          src="/trudo.jpg"
          alt="Trudo"
        />
        <img
          ref={ref10}
          className={`place-self-center ${inView10 ? "animate-slidein" : ""}`}
          src="wijeindhoven-logo.jpg"
          alt="wij eindhoven"
        />
        <img
          ref={ref11}
          className={`place-self-center ${inView11 ? "animate-slidein" : ""}`}
          src="/woonbedrijf.jpg"
          alt="woonbedrijf"
        />
      </section>
      <section className="max-w-7xl p-4 pt-16 gap-8 grid md:grid-cols-2 min-h-[80vh] lg:auto-rows-min content-center">
        <h1 className="text-4xl self-end leading-tight text-center font-bold col-span-full">
          Evenement in een oogopslag
        </h1>
        <TextBox
          icon="🧍"
          title="Wie?"
          subtitle="100+ mensen uit Strijp-S"
        ></TextBox>
        <TextBox
          icon="🤨"
          title="Wat?"
          subtitle="Een spel-achtig gesprek met leuke buren."
        ></TextBox>
        <TextBox
          icon="🗓"
          title="Wanneer?"
          subtitle="15:00 tot 19:00. 23 november 2022"
        ></TextBox>
        <TextBox
          icon="📍"
          title="Waar?"
          subtitle="Klokgebouw - Keukenconfessies"
        ></TextBox>
      </section>
      <section className="max-w-7xl p-4 pt-16 gap-8 grid auto-cols-auto lg:grid-cols-3 min-h-[80vh] lg:auto-rows-min content-center">
        <h1 className="text-4xl self-end leading-tight text-center font-bold col-span-full">
          Wie zoeken we?
        </h1>
        <AnythingButton
          dataTallyOpen="mD469R"
          dataTallyLayout="modal"
          dataTallyWidth="720"
          dataTallyOverlay="1"
          dataTallyEmojiText="📝"
          dataTallyEmojiAnimation="heart-beat"
          classes="self-start"
        >
          <TextBox
            icon="🪞"
            title="Jou!"
            subtitle="Schrijf je in om mee te doen met een Strijp-Spark evenement."
            classes="bg-day-green hover:bg-day-teal"
          ></TextBox>
        </AnythingButton>
        <AnythingButton
          dataTallyOpen="3ja4DR"
          dataTallyLayout="modal"
          dataTallyWidth="720"
          dataTallyOverlay="1"
          dataTallyEmojiText="📝"
          dataTallyEmojiAnimation="heart-beat"
          classes="self-start"
        >
          <TextBox
            icon="🤝"
            title="Vrijwilligers"
            subtitle="Wilt u helpen bij het organiseren van evenementen in jouw wijk?"
            classes=" hover:bg-day-teal"
          ></TextBox>
        </AnythingButton>
        <AnythingButton
          dataTallyOpen="wQKlq7"
          dataTallyLayout="modal"
          dataTallyWidth="720"
          dataTallyOverlay="1"
          dataTallyEmojiText="📝"
          dataTallyEmojiAnimation="heart-beat"
          classes="self-start"
        >
          <TextBox
            icon="🎁"
            title="Donaties"
            subtitle="Steun aan onze missie wordt zeer op prijs gesteld!"
            classes=" hover:bg-day-teal"
          ></TextBox>
        </AnythingButton>
      </section>
      <main className="flex flex-col space-y-4 text-center p-1 h-full">
        <p className="bg-day-green text-xl">
          Deze website is nog even onder constructie.
        </p>
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
  )
}
