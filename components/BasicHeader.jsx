import ScrollDown from "./ScrollDown"
import Button from "./Button"

export default function BasicHeader({ icon, title, subtitle }) {
  return (
    <div className="grid md:grid-cols-icon grid-rows-section justify-items-center gap-8 h-screen">
      <img
        src={icon}
        alt="icon"
        className="h-[40vmin] w-[40vmin] self-end md:self-center md:justify-self-end"
      />
      <div className="grid self-start sm:grid-cols-3 md:self-center gap-4 max-w-md">
        <h1 className="title text-5xl text-center sm:text-left font-bold self-end sm:col-span-3">
          {title}
        </h1>
        <h2 className="title text-2xl text-center sm:text-left font-bold sm:col-span-3">
          {subtitle}
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
  )
}
