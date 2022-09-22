import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
import fetcher from "../lib/fetcher";
import Spinner from "./Spinner";
import ErrorComponent from "./ErrorComponent";

const Section2 = () => {
  const { data, isLoading, isError } = fetcher("api/trending");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <ErrorComponent></ErrorComponent>;

  return (
    <section className="container py-10 mx-auto md:px-20">
      <h1 className="py-12 text-4xl font-bold text-center capitalize">
        latest post
      </h1>
      {/* grid  */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-14">
        {data.map((value: any) => (
          <Post data={value} key={value.id}></Post>
        ))}
      </div>
    </section>
  );
};

export default Section2;

function Post({ data }: any) {
  const { id, title, subtitle, category, img, published, author } = data;
  return (
    <div className="item">
      <div className="image">
        <Link href={`/post/${id}`}>
          <Image
            src={img || "/images/img2.jpg"}
            className="rounded "
            width={500}
            height={350}
            alt="img"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center py-4 info">
        <div className="cat">
          <Link href={`/post/${id}`}>
            <a className="text-orange-600 ">{category || "unknown"}</a>
          </Link>
          <Link href={`/post/${id}`}>
            <a className="text-gray-600 hover:text-gray-400">
              {published || "unknown"}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/post/${id}`}>
            <a className="text-xl text-gray-800 text-bold hover:text-gray-400">
              {title || "title"}
            </a>
          </Link>
        </div>
        <p className="py-3 text-gray-500 ">{subtitle || "subtitle"}</p>
        {author ? <Author {...Author} /> : <></>}
      </div>
    </div>
  );
}
