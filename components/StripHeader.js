export default function StripHeader({ title, image }) {
  return (
    <div className="max-h-full w-screen flex flex-col flex-nowrap py-6 justify-center align-middle space-y-6">
      <img
        src="/Pattern-banner.svg"
        className="min-h-[100px] object-cover lg:min-h-[120px] animate-slider"
      ></img>
      <div className="flex flex-col gap-x-6 p-1 sm:p-2 sm:flex-row sm:mx-auto">
        <img src="/STRIJP.svg" className="min-w-[290px] sm:basis-1/3"></img>
        <img
          src="/Spark-logo.svg"
          className="transition shrink scale-0 w-0 h-8 sm:h-[initial] md:scale-100 lg:w-[initial] lg:h-[initial]"
        ></img>
        <img src="/SPARK.svg" className="min-w-[290px] sm:basis-1/3"></img>
      </div>
      <img
        src="/Pattern-banner-2.svg"
        className="min-h-[100px] object-cover lg:min-h-[120px] animate-slidel"
      ></img>
    </div>
  );
}
