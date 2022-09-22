import React from "react";
import Image from "next/image";
import Link from "next/link";
const Author = ({ name, img, designation }: any) => {
  if (!name && !img) return <></>;
  return (
    <div className="flex py-5">
      <Image
        className="rounded-full "
        src={img || "/images/author/author1.jpg"}
        height={60}
        width={60}
        alt="img"
      />
      <div className="flex flex-col justify-center px-4 ">
        <Link href={"/"}>
          <a className="font-bold text-gray-800 hover:text-gray-600">{name}</a>
        </Link>
        <span className="text-sm text-gray-500 ">{designation}</span>
      </div>
    </div>
  );
};

export default Author;
