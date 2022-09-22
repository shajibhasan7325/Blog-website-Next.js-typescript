import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
import fetcher from "../lib/fetcher";
import Spinner from "./Spinner";
import ErrorComponent from "./ErrorComponent";

const Section4 = () => {
  const { data, isLoading, isError } = fetcher("api/trending");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <ErrorComponent></ErrorComponent>;
  return (
    <section className="container py-10 mx-auto md:px-20">
      <div className="grid xl:grid-cols-2">
        <div className="item">
          <h1 className="py-12 text-4xl font-bold ">Business</h1>
          <div className="flex flex-col gap-6 ">
            {/* post */}
            {data[1] ? <Post key={data[1].id} data={data[1]} /> : <></>}
            {data[2] ? <Post key={data[2].id} data={data[2]} /> : <></>}
            {data[3] ? <Post key={data[3].id} data={data[3]} /> : <></>}
          </div>
        </div>
        <div className="item">
          <h1 className="py-12 text-4xl font-bold ">Travel</h1>
          <div className="flex flex-col gap-6 ">
            {data[4] ? <Post key={data[4].id} data={data[4]} /> : <></>}
            {data[5] ? <Post key={data[5].id} data={data[5]} /> : <></>}
            {data[1] ? <Post key={data[1].id} data={data[1]} /> : <></>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;

function Post({ data }: any) {
  const { id, title, subtitle, category, img, published, author } = data;
  return (
    <div className="flex gap-5 ">
      <div className="flex flex-col justify-start images">
        <Link href={`/post/${id}`}>
          <Image
            src={img || "/images/img5.png"}
            className="rounded "
            width={300}
            height={250}
            alt="hello"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center info">
        <div className="cat">
          <Link href={`/post/${id}`}>
            <a className="text-orange-600 ">{category || "unknown"}</a>
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
