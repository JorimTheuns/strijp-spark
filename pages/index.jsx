import Head from "next/head"
import Link from "next/link"
import MyLink from "@components/MyLink"
import languages from "../assets/languages.json"
import { getSiblingValue } from "./_app"
import { useRouter } from "next/router"

import CenterHeader from "@components/Center-Header"
import StripHeader from "@components/StripHeader"
import Footer from "@components/Footer"
import BasicHeader from "@components/BasicHeader"
import TextBox from "@components/TextBox"
import Logos from "@components/Logos"
import Image from "next/image"
import AnythingButton from "@components/AnythingButton"
import LanguageToggle from "@components/LanguageToggle"
import { LanguageToggleFlag } from "@components/LanguageToggle"

import { useInView } from "react-intersection-observer"
import Button from "@components/Button"
import ScrollDown from "@components/ScrollDown"
import Divider from "@components/Divider"
import HeaderMenu from "@components/HeaderMenu"

export default function Home() {
  const { locale, locales, asPath } = useRouter()
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

  const content = {
    select: {
      "nl-NL": "Selecteer uw taal",
      "en-UK": "Please select your language",
    },
    welcome: {
      "nl-NL": "Welkom",
      "en-UK": "Welcome",
    },
    subTitle: {
      "nl-NL":
        "Brainstormen met heel Strijp-S, voor en door bewoners georganiseerd.",
      "en-UK":
        "A brainstorm for everyone living in Strijp-S, organised by residents.",
    },
    signUp: {
      text: {
        "nl-NL": "Meld je aan",
        "en-UK": "Sign up now!",
      },
      form: {
        "nl-NL": "mD469R",
        "en-UK": "w5BN06",
      },
      title: {
        "nl-NL": "Jou!",
        "en-UK": "You!",
      },
      subTitle: {
        "nl-NL": "Schrijf je in om mee te doen met een Strijp-Spark evenement.",
        "en-UK":
          "Sign up to join a Strijp-Spark event whenever there is space available.",
      },
    },
    helpUs: {
      text: {
        "nl-NL": "Help mee",
        "en-UK": "Volunteer",
      },
      form: {
        "nl-NL": "3ja4DR",
        "en-UK": "nrjX8l",
      },
      title: {
        "nl-NL": "Vrijwilligers",
        "en-UK": "Volunteers",
      },
      subTitle: {
        "nl-NL":
          "Wil je ook helpen bij het organiseren van bijeenkomsten in je wijk?",
        "en-UK":
          "Do you also want to help organise fun get-togethers in your neighborhood?",
      },
    },
    donate: {
      text: {
        "nl-NL": "Doneer",
        "en-UK": "Donate",
      },
      form: {
        "nl-NL": "wQKlq7",
        "en-UK": "mZjrAo",
      },
      title: {
        "nl-NL": "Donaties",
        "en-UK": "Donations",
      },
      subTitle: {
        "nl-NL": "Steun aan onze missie wordt zeer op prijs gesteld!",
        "en-UK": "Support for our mission is very much appreciated.",
      },
    },
    whatWeDo: {
      pre: {
        "nl-NL":
          "We organiseren bijeenkomsten waar je een impact kunt hebben op Strijp-S,",
        "en-UK": "We organize events where you can have an impact on Strijp-S,",
      },
      highlight: {
        "nl-NL":
          "door nieuwe mensen te ontmoeten en boeiende gesprekken te hebben.",
        "en-UK":
          "just by meeting new people and having interesting conversations.",
      },
    },
    threeSteps: {
      step1: {
        title: {
          "nl-NL": "1. Doe mee!",
          "en-UK": "1. Join in!",
        },
        subTitle: {
          "nl-NL":
            "Meld je aan om mee te doen! We zullen willekeurig 100 mensen selecteren voor de eerste sessie.",
          "en-UK":
            "Sign up to participate! We will randomly select 100 people to join the first session.",
        },
      },
      step2: {
        title: {
          "nl-NL": "2. Leuke gesprekken",
          "en-UK": "2. Have some fun converstations",
        },
        subTitle: {
          "nl-NL":
            "Tijdens het evenement zijn er veel kleine gesprekken waar je moet samenwerken om je idee met heel StrijpS te delen.",
          "en-UK":
            "During the event there will be many small conversations where you have to work together to share your ideas with StrijpS.",
        },
      },
      step3: {
        title: {
          "nl-NL": "3. Maak impact",
          "en-UK": "3. Make an impact",
        },
        subTitle: {
          "nl-NL":
            "Strijp-Spark geeft je inzichten en ideeën door aan organisaties in de omgeving, zodat zij hun diensten kunnen verbeteren op basis van uw input.",
          "en-UK":
            "Strijp-Spark passes on your insights and ideas to organizations in the area so that they can improve their services based on your input.",
        },
      },
    },
    aboutUs: {
      title: {
        "nl-NL": "Wie zijn wij?",
        "en-UK": "Who's behind this?",
      },
      subTitle: {
        "nl-NL":
          "Hi! Wij zijn Jor en Eve, we wonen in Haasje Over, en we hebben allebei een passie voor participatie. Jor is ontwerper bij een start-up, en Eve doet haar afstudeer onderzoek over burger participatie aan de TU/e.",
        "en-UK":
          "Hi! We are Jor and Eve, we live in Haasje Over (the orange building with the funny hat), and we both have a passion for participation. Jor is a designer at a start-up, and Eve is doing her graduation research on participation at TU/e.",
      },
    },
    partners: {
      title: {
        "nl-NL": "Onze partners",
        "en-UK": "Our partners",
      },
      subTitle: {
        "nl-NL": "Ook partner worden? Stuur een email aan",
        "en-UK": "Do you also want to become a partner? Send us an email at",
      },
    },
    quick: {
      title: {
        "nl-NL": "Strijp-Spark in een oogopslag",
        "en-UK": "Strijp-Spark event details",
      },
      buttonText: {
        "nl-NL": "Meld je binnen 30 seconden aan ⏳",
        "en-UK": "Sign up in 30 seconds ⏳",
      },
      who: {
        title: {
          "nl-NL": "Wie?",
          "en-UK": "Who?",
        },
        subTitle: {
          "nl-NL": "100+ bewoners van Strijp-S",
          "en-UK": "100+ residents of Strijp-S",
        },
      },
      what: {
        title: {
          "nl-NL": "Wat?",
          "en-UK": "What?",
        },
        subTitle: {
          "nl-NL": "Een spel-achtig gesprek met leuke buren.",
          "en-UK": "A game-like chat with some fun neighbors.",
        },
      },
      when: {
        title: {
          "nl-NL": "Wanneer?",
          "en-UK": "When?",
        },
        subTitle: {
          "nl-NL": "19:00 tot 21:00. 24 november 2022",
          "en-UK": "19:00 to 21:00. 24th November 2022",
        },
      },
      where: {
        title: {
          "nl-NL": "Waar?",
          "en-UK": "Where?",
        },
        subTitle: {
          "nl-NL": "Een bijzondere locatie op Strijp-S",
          "en-UK": "An extra special location on Strijp-S",
        },
      },
    },
    lookingFor: {
      title: {
        "nl-NL": "Wie zoeken we?",
        "en-UK": "Who are we looking for?",
      },
      subTitle: {
        "nl-NL": "Liever direct contact? Stuur een email aan",
        "en-UK": "Prefer to contact us directly? Send us an email at",
      },
    },
  }

  return (
    <div className="">
      <Head>
        <title>Strijp Spark</title>
      </Head>
      <HeaderMenu></HeaderMenu>
      <main className="grid">
        <section className="sm:min-h-screen pt-6 pb-16 sm:pt-4 sm:pb-4">
          <div className="grid p-4 max-w-5xl m-auto lg:grid-cols-2 grid-rows-section justify-items-center gap-8 sm:min-h-screen">
            <img
              ref={ref0}
              src="/SSLogo.svg"
              alt="icon"
              className={`h-[40vmin] w-[40vmin] self-end lg:self-center lg:justify-self-end  ${
                inView0 ? "animate-slidein" : ""
              }`}
            />
            <div className="grid self-start sm:grid-cols-3 lg:self-center lg:justify-self-start gap-4 max-w-md">
              <h1 className="title text-5xl text-center sm:text-left font-bold self-end sm:col-span-3">
                Strijp-Spark
              </h1>
              <h2 className="title text-2xl text-center sm:text-left font-bold sm:col-span-3">
                {content.subTitle[locale]}
              </h2>
              <Button
                dataTallyOpen={content.signUp.form[locale]}
                dataTallyLayout="modal"
                dataTallyWidth="720"
                dataTallyOverlay="1"
                dataTallyEmojiText="📝"
                dataTallyEmojiAnimation="heart-beat"
                classes="bg-day-green"
              >
                {content.signUp.text[locale]}
              </Button>
              <Button
                dataTallyOpen={content.helpUs.form[locale]}
                dataTallyLayout="modal"
                dataTallyWidth="720"
                dataTallyOverlay="1"
                dataTallyEmojiText="🤝"
                dataTallyEmojiAnimation="heart-beat"
                className=""
              >
                {content.helpUs.text[locale]}
              </Button>
              <Button
                dataTallyOpen={content.donate.form[locale]}
                dataTallyLayout="modal"
                dataTallyWidth="720"
                dataTallyOverlay="1"
                dataTallyEmojiText="☕️"
                dataTallyEmojiAnimation="heart-beat"
                className=""
              >
                {content.donate.text[locale]}
              </Button>
            </div>
            <ScrollDown></ScrollDown>
          </div>
        </section>
        <section
          id="Description"
          className="border-t-8 border-day-gray pt-16 pb-16 sm:pt-4 sm:pb-4"
        >
          <div className="max-w-5xl m-auto p-4 gap-8 grid lg:grid-cols-5 lg:auto-rows-min sm:min-h-screen content-center">
            <div
              ref={ref1}
              className={`text-4xl lg:col-span-3 self-end leading-tight transition-opacity" ${
                inView1 ? "animate-slidein" : ""
              }`}
            >
              {content.whatWeDo.pre[locale]}{" "}
              <span className="font-bold bg-day-green">
                {content.whatWeDo.highlight[locale]}
              </span>
            </div>
            <div
              ref={ref2}
              className={`lg:col-span-3 ${inView2 ? "animate-slidein" : ""}`}
            >
              <AnythingButton
                dataTallyOpen={content.signUp.form[locale]}
                dataTallyLayout="modal"
                dataTallyWidth="720"
                dataTallyOverlay="1"
                dataTallyEmojiText="📝"
                dataTallyEmojiAnimation="heart-beat"
                classes="bg-day-green"
              >
                <TextBox
                  icon="📝"
                  title={content.threeSteps.step1.title[locale]}
                  subtitle={content.threeSteps.step1.subTitle[locale]}
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
                title={content.threeSteps.step2.title[locale]}
                subtitle={content.threeSteps.step2.subTitle[locale]}
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
                title={content.threeSteps.step3.title[locale]}
                subtitle={content.threeSteps.step3.subTitle[locale]}
              ></TextBox>
            </div>
          </div>
        </section>
        <section className="border-t-8 border-day-gray pt-16 pb-16 sm:pt-4 sm:pb-4">
          <div className="max-w-5xl m-auto p-4 gap-8 grid grid-cols-1 lg:auto-rows-min  sm:min-h-[80vh] content-center">
            <div className="grid gap-8 md:grid-cols-2 items-center text-center md:text-right">
              <h1 className="text-5xl font-bold self-end">
                {content.aboutUs.title[locale]}
              </h1>
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
                {content.aboutUs.subTitle[locale]}
              </p>
            </div>
          </div>
        </section>
        <section className=" border-t-8 border-day-gray pt-16 pb-16 sm:pt-4 sm:pb-4">
          <div
            ref={ref5}
            id="Partners"
            className={`min-w-[80vw] max-w-7xl m-auto p-4 gap-8 grid lg:auto-rows-min content-center sm:min-h-[80vh] grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ${
              inView5 ? "animate-slidein" : ""
            }`}
          >
            <h1 className="text-4xl self-end leading-tight text-center font-bold col-span-full">
              {content.partners.title[locale]}
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
              {content.partners.subTitle[locale]}{" "}
              <a href="mailto:strijp.spark@gmail.com">strijp.spark@gmail.com</a>
            </p>
          </div>
        </section>
        <section className=" border-day-gray bg-day-green pt-16 pb-16 sm:pt-4 sm:pb-4">
          <div className=" max-w-7xl m-auto p-4 gap-8 grid md:grid-cols-2 sm:min-h-[80vh] lg:auto-rows-min content-center">
            <h1 className="text-4xl self-end leading-tight text-center font-bold col-span-full">
              {content.quick.title[locale]}
            </h1>
            <TextBox
              icon="🧍"
              title={content.quick.who.title[locale]}
              subtitle={content.quick.who.subTitle[locale]}
              classes=" bg-white"
            ></TextBox>
            <TextBox
              icon="🤨"
              title={content.quick.what.title[locale]}
              subtitle={content.quick.what.subTitle[locale]}
              classes=" bg-white"
            ></TextBox>
            <TextBox
              icon="🗓"
              title={content.quick.when.title[locale]}
              subtitle={content.quick.when.subTitle[locale]}
              classes=" bg-white"
            ></TextBox>
            <TextBox
              icon="📍"
              title={content.quick.where.title[locale]}
              subtitle={content.quick.where.subTitle[locale]}
              classes=" bg-white"
            ></TextBox>
            <Button
              dataTallyOpen={content.signUp.form[locale]}
              dataTallyLayout="modal"
              dataTallyWidth="720"
              dataTallyOverlay="1"
              dataTallyEmojiText="📝"
              dataTallyEmojiAnimation="heart-beat"
              classes="bg-white self-center md:col-span-2 w-48 m-auto"
            >
              {content.quick.buttonText[locale]}
            </Button>
          </div>
        </section>
        <section className=" border-day-gray pt-16 pb-16 sm:pt-4 sm:pb-4">
          <div className="max-w-7xl m-auto p-4 gap-8 grid auto-cols-auto lg:grid-cols-3 sm:min-h-[80vh] lg:auto-rows-min content-center">
            <h1 className="text-4xl self-end leading-tight text-center font-bold col-span-full">
              {content.lookingFor.title[locale]}
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
                title={content.signUp.title[locale]}
                subtitle={content.signUp.subTitle[locale]}
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
                title={content.helpUs.title[locale]}
                subtitle={content.helpUs.subTitle[locale]}
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
                title={content.donate.title[locale]}
                subtitle={content.donate.subTitle[locale]}
                classes=" hover:bg-day-teal"
              ></TextBox>
            </AnythingButton>
            <p className="self-end leading-tight text-center font-bold col-span-full">
              {content.lookingFor.subTitle[locale]}{" "}
              <a href="mailto:strijp.spark@gmail.com">strijp.spark@gmail.com</a>
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
