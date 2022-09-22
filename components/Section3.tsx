import Link from "next/link";
import React from "react";
import Author from "./Author";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import fetcher from "../lib/fetcher";
import Spinner from "./Spinner";
import ErrorComponent from "./ErrorComponent";

// Import Swiper styles
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";

const Section3 = () => {
  const { data, isLoading, isError } = fetcher("api/popular");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <ErrorComponent></ErrorComponent>;
  return (
    <section className="container py-10 mx-auto md:px-20">
      <h1 className="py-12 text-4xl font-bold text-center capitalize">
        most popular
      </h1>
      {/* grid */}

      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {data.map((value: any) => (
          <SwiperSlide key={value.id}>
            <Popular data={value} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Section3;

function Popular({ data }: any) {
  const { id, title, subtitle, category, img, published, author } = data;
  return (
    <div className="item">
      <div className="image">
        <Link href={`/post/${id}`}>
          <Image
            src={img || "/images/img3.png"}
            width={600}
            height={400}
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
            <a className="text-gray-600 hover:text-gray-400">- {published}</a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/post/${id}`}>
            <a className="text-3xl text-gray-800 md:text-4xl text-bold hover:text-gray-400">
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
