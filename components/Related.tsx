import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
import Spinner from "./Spinner";
import ErrorComponent from "./ErrorComponent";
import fetcher from "../lib/fetcher";

const Related = () => {
  const { data, isLoading, isError } = fetcher("api/trending");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <ErrorComponent></ErrorComponent>;
  return (
    <section className="pt-20 ">
      <h1 className="py-10 text-3xl font-bold ">Related</h1>
      <div className="flex flex-col gap-10 ">
        {data.map((value: any) => (
          <Post key={value.name} data={value}></Post>
        ))}
      </div>
    </section>
  );
};

export default Related;

function Post({ data }: any) {
  const { id, title, category, img, published, author } = data;
  return (
    <div className="flex gap-5 ">
      <div className="flex flex-col justify-start ">
        <Link href={`/post/${id}`}>
          <a>
            <Image
              src={img || "/images/img2.jpg"}
              width={300}
              height={200}
              alt="h"
            />
          </a>
        </Link>
      </div>
      <div className="flex flex-col justify-center">
        <div className="cat">
          <Link href={`/post/${id}`}>
            <a className="text-orange-600 ">{category}</a>
          </Link>
          <Link href={`/post/${id}`}>
            <a className="text-gray-600 hover:text-gray-400">- {published}</a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/post/${id}`}>
            <a className="text-xl text-gray-800 text-bold hover:text-gray-400">
              {title}
            </a>
          </Link>
        </div>

        {author ? <Author {...Author} /> : <></>}
      </div>
    </div>
  );
}
