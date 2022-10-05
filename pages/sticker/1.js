import Head from "next/head"
import CenterHeader from "@components/Center-Header"
import Footer from "@components/Footer"
import { useEffect } from "react"
import { useRouter } from "next/router"

import LanguageToggle from "@components/LanguageToggle"
import { LanguageToggleFlag } from "@components/LanguageToggle"
import FullScreenUI from "@components/FullScreenUI"

export default function Sticker() {
  const { locale, locales, asPath } = useRouter()
  const route = useRouter()

  const content = {
    select: {
      "nl-NL": "Selecteer uw taal",
      "en-UK": "Please select your language",
    },
    welcome: {
      "nl-NL": "Welkom",
      "en-UK": "Welcome",
    },
  }
  return (
    <div className="min-h-screen">
      <Head>
        <title>Strijp Spark</title>
      </Head>
      <FullScreenUI>
        <div className="grid gap-8 content-center justify-center items-center text-center">
          <img
            src="/SSLogo.svg"
            className="max-w-[15rem] place-self-center"
          ></img>
          <div className="grid justify-center content-center gap-2">
            <LanguageToggle
              click={"redirect"}
              locales={locales}
              locale={locale}
              asPath={""}
            ></LanguageToggle>
          </div>
        </div>
      </FullScreenUI>
    </div>
  )
}
