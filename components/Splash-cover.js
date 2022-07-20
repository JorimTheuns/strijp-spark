export default function Splash({ image, title}) {
    return (
      <div className="">
        <img src={image} alt="Splash-cover" className="max-h-[20vh] w-max border-4 border-neutral-900 object-cover object-[0,-217px]" />
        <h1 className="text-4xl relative font-bold bottom-[1em] max-w-fit mx-auto border-4 border-neutral-900 bg-white p-4 w-">{title}</h1>
      </div>
    )
  }
  