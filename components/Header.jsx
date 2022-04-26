import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UsersIconer,
  MenuAlt1Icon,
  MenuIcon,
} from "@heroicons/react/solid";
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
      <div className=" flex items-center w-80 rounded-full border-2 border-gray-300 pr-1">
        <input
          type="text"
          placeholder="Start your search"
          className="border-0 outline-none w-64 ml-6 mr-3"
        />
        <SearchIcon className="h-8 p-2 bg-red-400 text-white rounded-full cursor-pointer" />
      </div>
      <div className="flex items-center justify-end space-x-3">
        <span>Become a host</span>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center border-2 border-gray-400 rounded-full p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </div>
  );
};

export default Header;
