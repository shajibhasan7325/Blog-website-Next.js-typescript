import React from "react";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import NewsLatter from "./NewsLatter";

const Footer = () => {
  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
  };
  return (
    <footer className=" bg-gray-50">
      <NewsLatter />
      <div className="container flex justify-center mx-auto ">
        <div className="py-5 ">
          <div className="flex justify-center gap-6">
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

          <p className="py-5 text-gray-400">
            Copyright ©2022 All rights reserved | This template is made with by
            Daily Tuition
          </p>
          <p className="text-center text-gray-400">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
