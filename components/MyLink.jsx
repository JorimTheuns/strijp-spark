import Link from "next/link"

export default function MyLink({
  children,
  href,
  currentLocale,
  type,
  select,
}) {
  var classes =
    "px-6 py-2.5 border-blackish border-4 text-blackish font-bold text-xl shadow-lg  hover:bg-day-teal hover:scale-105 focus:ring-2 ring-day-teal active:scale-95 transition-all duration-150 ease-in-out cursor-pointer"
  if (type == "emoji") {
    classes =
      "px-2 py-0.5 border-blackish border-4 text-blackish font-bold text-2xl shadow-lg  hover:bg-day-teal hover:scale-105 focus:ring-2 ring-day-teal active:scale-95 transition-all duration-150 ease-in-out cursor-pointer"
  }
  var background = "bg-white"
  if (select) {
    background = "bg-day-green"
  }
  return (
    <Link overlay type="button" href={href} locale={currentLocale}>
      <div className={`${classes} ${background}`}>{children}</div>
    </Link>
  )
}
