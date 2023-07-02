import { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({ search, setSearch }) => {
  return (
    <div className="bg-gray-50 px-[40px] h-[100px] flex justify-between items-center">
      <p className="text-lg cursor-pointer font-bold hover:text-green-600 duration-300 ease-in-out">
        Music Sansar
      </p>

      <div className="w-full bg-white flex rounded max-w-[50%]">
        <input
          type="text"
          className="peer block w-full rounded border-0 bg-transparent p-2 focus:outline-none"
          placeholder="search Music.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="py-2 px-4 rounded bg-green-500 focus:outline hover:bg-green-400">
          Search
        </button>
      </div>

      <div className="flex gap-4">
        <button className="py-2 px-4 rounded hover:text-green-500 duration-300 ease-in-out">
          Log in
        </button>
        <button className="py-2 px-4 rounded bg-green-500 focus:outline hover:bg-green-400 duration-300 ease-in-out">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
