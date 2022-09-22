import React from "react";
import { BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";

const Header = () => {
  return (
    <header className="bg-gray-100 ">
      <div className="flex flex-col items-center py-3 text-center xl:container xl:mx-auto sm:flex-row sm:justify-between">
        <div className="flex justify-center order-2 py-4 md:flex-none w-96 sm:order-1 sm:py-0">
          <input type="text" placeholder="search..." className="input-class" />
        </div>
        <div className=" shrink w-80 sm:order-2">
          <a className="text-3xl font-bold uppercase ">Design</a>
        </div>
        <div className="flex justify-center order-3 w-96">
          <div className="flex gap-6">
            <a>
              <BsFacebook color="#888888" />
            </a>
            <a>
              <BsYoutube color="#888888" />
            </a>
            <a>
              <BsTwitter color="#888888" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
