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
import Button from "@components/Button"
import ScrollDown from "@components/ScrollDown"
import Divider from "@components/Divider"

export default function Home() {
  const options = { triggerOnce: true }
  const [ref0, inView0] = useInView(options)
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
    <div className="flex flex-col items-center">
      <Head>
        <title>Strijp Spark</title>
      </Head>
      <section className="max-w-5xl p-4 sm:min-h-screen pt-16 pb-16 sm:pt-4 sm:pb-4">
        <div className="grid md:grid-cols-icon grid-rows-section justify-items-center gap-8 sm:h-screen">
          <img
            ref={ref0}
            src="/SSLogo.png"
            alt="icon"
            className={`h-[40vmin] w-[40vmin] self-end md:self-center md:justify-self-end  ${
              inView0 ? "animate-slidein" : ""
            }`}
          />
          <div className="grid self-start sm:grid-cols-3 md:self-center gap-4 max-w-md">
            <h1 className="title text-5xl text-center sm:text-left font-bold self-end sm:col-span-3">
              Strijp-Spark
            </h1>
            <h2 className="title text-2xl text-center sm:text-left font-bold sm:col-span-3">
              Brainstormen met heel Strijp-S, voor en door bewoners
              georganiseerd.
            </h2>
            <Button
              dataTallyOpen="mD469R"
              dataTallyLayout="modal"
              dataTallyWidth="720"
              dataTallyOverlay="1"
              dataTallyEmojiText="📝"
              dataTallyEmojiAnimation="heart-beat"
              classes="bg-day-green"
            >
              Meld je aan
            </Button>
            <Button
              dataTallyOpen="3ja4DR"
              dataTallyLayout="modal"
              dataTallyWidth="720"
              dataTallyOverlay="1"
              dataTallyEmojiText="🤝"
              dataTallyEmojiAnimation="heart-beat"
              className=""
            >
              Help mee
            </Button>
            <Button
              dataTallyOpen="wQKlq7"
              dataTallyLayout="modal"
              dataTallyWidth="720"
              dataTallyOverlay="1"
              dataTallyEmojiText="☕️"
              dataTallyEmojiAnimation="heart-beat"
              className=""
            >
              Doneer
            </Button>
          </div>
          <ScrollDown></ScrollDown>
        </div>
      </section>
      <section
        id="Description"
        className="border-t-8 border-day-gray  w-screen pt-16 pb-16 sm:pt-4 sm:pb-4"
      >
        <div className="max-w-5xl m-auto p-4 gap-8 grid lg:grid-cols-5 lg:auto-rows-min sm:min-h-screen content-center">
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
                subtitle="Meld je aan om mee te doen! We zullen willekeurig 100+ mensen selecteren voor de eerste sessie."
              ></TextBox>
            </AnythingButton>
          </div>
          <div
            ref={ref3}
            className={`bg-white lg:col-span-3 lg:col-start-2 ${
              inView3 ? "animate-slidein" : ""
            }`}
          >
            <TextBox
              icon="😃"
              title="2. Leuke gesprekken"
              subtitle="Tijdens het evenement zijn er veel kleine gesprekken waar je moet samenwerken om je idee met de grote groep te delen."
            ></TextBox>
          </div>
          <div
            ref={ref4}
            className={`bg-white lg:col-span-3 lg:col-start-3 ${
              inView4 ? "animate-slidein" : ""
            }`}
          >
            <TextBox
              icon="🛠"
              title="3. Maak impact"
              subtitle="Dembrane geeft de inzichten en ideeën van de dag door aan organisaties in de omgeving, zodat zij hun diensten kunnen verbeteren op basis van uw input."
            ></TextBox>
          </div>
        </div>
      </section>
      <section className="border-t-8 border-day-gray w-screen pt-16 pb-16 sm:pt-4 sm:pb-4">
        <div className="max-w-5xl m-auto p-4 gap-8 grid grid-cols-1 lg:auto-rows-min  sm:min-h-[80vh] content-center">
          <div className="grid gap-8 md:grid-cols-2 items-center text-center md:text-right">
            <h1 className="text-5xl font-bold self-end">Wie zijn wij?</h1>
            <div className="relative row-span-2">
              <img
                className="border-4 border-blackish opacity-100 hover:opacity-0"
                src="/Team photo.jpg"
              ></img>
              <img
                className="border-4 border-blackish absolute translate-y-[-100%] opacity-0 hover:opacity-100"
                src="/team silly.JPG"
              ></img>
            </div>

            <p className="text-2xl self-start">
              Hi! Wij zijn Jor en Eve, we wonen in Haasje Over, en we hebben
              allebei een passie voor participatie. Jor is ontwerper bij een
              start-up, en Eve doet haar afstudeer onderzoek aan de TU/e.
            </p>
          </div>
        </div>
      </section>
      <section className=" border-t-8 border-day-gray w-screen pt-16 pb-16 sm:pt-4 sm:pb-4">
        <div
          ref={ref5}
          id="Partners"
          className={`min-w-[80vw] max-w-7xl m-auto p-4 gap-8 grid lg:auto-rows-min content-center sm:min-h-[80vh] grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ${
            inView5 ? "animate-slidein" : ""
          }`}
        >
          <h1 className="text-4xl self-end leading-tight text-center font-bold col-span-full">
            Onze partners
          </h1>

          <img
            className="place-self-center bg-white"
            src="/eindhoven.jpg"
            alt="eindhoven"
          />
          <img
            className="place-self-center bg-white"
            src="/keuken-confessies.png"
            alt="keuken-confessies"
          />
          <img
            className="place-self-center bg-white"
            src="/Strijp-PB.jpg"
            alt="Strijp Park Beheer"
          />
          <img
            className="place-self-center bg-white"
            src="/trudo.jpg"
            alt="Trudo"
          />
          <img
            className="place-self-center bg-white"
            src="wijeindhoven-logo.jpg"
            alt="wij eindhoven"
          />
          <img
            className="place-self-center bg-white"
            src="/woonbedrijf.jpg"
            alt="woonbedrijf"
          />
          <p className="self-end leading-tight text-center font-bold col-span-full">
            Ook partner worden? stuur een email aan{" "}
            <a href="mailto:strijp.spark@gmail.com">strijp.spark@gmail.com</a>
          </p>
        </div>
      </section>
      <section className=" border-day-gray w-screen bg-day-green pt-16 pb-16 sm:pt-4 sm:pb-4">
        <div className=" max-w-7xl m-auto p-4 gap-8 grid md:grid-cols-2 sm:min-h-[80vh] lg:auto-rows-min content-center">
          <h1 className="text-4xl self-end leading-tight text-center font-bold col-span-full">
            Evenement in een oogopslag
          </h1>
          <TextBox
            icon="🧍"
            title="Wie?"
            subtitle="100+ mensen uit Strijp-S"
            classes=" bg-white"
          ></TextBox>
          <TextBox
            icon="🤨"
            title="Wat?"
            subtitle="Een spel-achtig gesprek met leuke buren."
            classes=" bg-white"
          ></TextBox>
          <TextBox
            icon="🗓"
            title="Wanneer?"
            subtitle="19:00 tot 21:00. 24 november 2022"
            classes=" bg-white"
          ></TextBox>
          <TextBox
            icon="📍"
            title="Waar?"
            subtitle="Een bijzondere locatie op Strijp-S"
            classes=" bg-white"
          ></TextBox>
          <Button
            dataTallyOpen="mD469R"
            dataTallyLayout="modal"
            dataTallyWidth="720"
            dataTallyOverlay="1"
            dataTallyEmojiText="📝"
            dataTallyEmojiAnimation="heart-beat"
            classes="bg-white self-center md:col-span-2 w-48 m-auto"
          >
            Meld je aan
          </Button>
        </div>
      </section>
      <section className=" border-day-gray w-screen pt-16 pb-16 sm:pt-4 sm:pb-4">
        <div className="max-w-7xl m-auto p-4 gap-8 grid auto-cols-auto lg:grid-cols-3 sm:min-h-[80vh] lg:auto-rows-min content-center">
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
            classes="bg-white self-start"
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
            classes="bg-white self-start"
          >
            <TextBox
              icon="🎁"
              title="Donaties"
              subtitle="Steun aan onze missie wordt zeer op prijs gesteld!"
              classes=" hover:bg-day-teal"
            ></TextBox>
          </AnythingButton>
        </div>
      </section>

      <Footer />
    </div>
  )
}
