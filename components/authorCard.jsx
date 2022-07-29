export default function ({ authors }) {
  return (
    <div className="flex space-x-5 items-center">
      {authors.map((author) => (
        <div className=" box-content my-10 max-h-10 border-[#37352f] border-b-[5px] flex space-x-6 rounded-r-[2.5rem] items-center">
          <p className=" pl-2 font-bold ">{author.fullName}</p>
          <img
            className="overflow-visible h-20 border-[#37352f] rounded-[100%] border-[5px]"
            src={author.profilePhoto}
          ></img>
        </div>
      ))}
    </div>
  );
}
