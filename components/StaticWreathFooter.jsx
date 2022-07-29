export default function StaticWreathFooter({ title }) {
  return (
    <div>
      <div className="mx-auto max-h-full flex flex-col flex-nowrap justify-center align-middle w-screen">
        <img
          src="/Pattern-banner.svg"
          className="min-h-[50px] object-cover lg:min-h-[120px] relative translate-y-[50%] object-top"
        ></img>
        <img
          src="/strijp-from-above.jpg"
          className="min-h-24 object-cover lg:min-h-36 max-h-52"
        ></img>
      </div>
    </div>
  );
}
