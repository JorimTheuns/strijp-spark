export default function ({ authors }) {
  return (
    <div className="my-5 flex gap-2 items-center flex-wrap">
      {authors.map((author) => (
        <div className=" box-content my-5 max-h-10 min-h-min border-[#37352f] border-b-[5px] flex gap-2 rounded-r-[2.5rem] items-center">
          <p className="leading-tight text-right pl-2 pb-1 pt-1 font-bold w-fit">
            {author.fullName}
          </p>
          <img
            className="overflow-visible h-20 border-[#37352f] rounded-[100%] border-[5px]"
            src={author.profilePhoto}
          ></img>
        </div>
      ))}
    </div>
  );
}
