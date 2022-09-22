export default function AnythingButton({
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
      className={` text-left hover:scale-105 focus:ring-2 ring-day-teal active:scale-95 transition-all duration-150 ease-in-out" ${classes}`}
    >
      {children}
    </button>
  )
}
