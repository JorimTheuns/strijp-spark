import { getSiblingValue } from "pages/_app"
import languages from "../assets/languages.json"
import MyLink from "./MyLink"

export default function LanguageToggle({ locale, locales, asPath, click }) {
  return (
    <div className="grid gap-2 justify-center">
      {locales.map((l, i) => {
        const lang = getSiblingValue("locale", l, "text", languages.languages)
        const href = asPath.toString() + click.toString()
        return (
          <MyLink key={i} href={href} currentLocale={l}>
            {lang}
          </MyLink>
        )
      })}
    </div>
  )
}

export function LanguageToggleFlag({ locale, locales, asPath }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {locales.map((l, i) => {
        var flag = getSiblingValue("locale", l, "emoji", languages.languages)
        var current = false
        if (locale == l) {
          current = true
        }
        return (
          <MyLink
            key={i}
            href={asPath}
            currentLocale={l}
            type="emoji"
            select={current}
          >
            {flag}
          </MyLink>
        )
      })}
    </div>
  )
}
