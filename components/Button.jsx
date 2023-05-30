export default function Button({
  classes,
  children,
  dataTallyOpen,
  dataTallyLayout,
  dataTallyWidth,
  dataTallyOverlay,
  dataTallyEmojiText,
  dataTallyEmojiAnimation,
}) {
  return (
    <button
      data-tally-open={dataTallyOpen}
      data-tally-layout={dataTallyLayout}
      data-tally-width={dataTallyWidth}
      data-tally-overlay={dataTallyOverlay}
      data-tally-emoji-text={dataTallyEmojiText}
      data-tally-emoji-animation={dataTallyEmojiAnimation}
      type="button"
      className={`px-4 py-2 shadow-md backdrop-blur border-blackish border-4 text-blackish hover:bg-day-teal hover:scale-105 focus:ring-2 ring-day-teal active:scale-95 transition-all duration-150 ease-in-out" ${classes}`}
    >
      {children}
    </button>
  )
}
