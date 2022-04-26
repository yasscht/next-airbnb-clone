import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";
const Header = () => {
  return (
    <div className="sticky top-0 p-4 md:px-10 grid grid-cols-3 z-50 bg-white shadow-md ">
      <div className="relative h-10 flex items-center  cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className=" flex items-center w-80 rounded-full border-2 border-gray-400">
        <input
          type="text"
          placeholder="Start your search"
          className="border-0 outline-none w-64 ml-6 mr-3"
        />
        <SearchIcon className="h-6 p-1 bg-red-400 text-white rounded-full cursor-pointer" />
      </div>
      <div>actions</div>
    </div>
  );
};

export default Header;
