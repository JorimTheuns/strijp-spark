import { LanguageToggleFlag } from "./LanguageToggle"
import { useRouter } from "next/router"

export default function HeaderMenu({ title }) {
  const { locale, locales, asPath } = useRouter()
  return (
    <div className="fixed top-0 left-0 p-2">
      <div className="grid">
        <div className=""></div>
        <LanguageToggleFlag
          locales={locales}
          locale={locale}
          asPath={asPath}
        ></LanguageToggleFlag>
      </div>
    </div>
  )
}
