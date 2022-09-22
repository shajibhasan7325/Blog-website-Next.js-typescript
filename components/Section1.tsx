import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import fetcher from "../lib/fetcher";
import Spinner from "./Spinner";
import ErrorComponent from "./ErrorComponent";

const Section1 = () => {
  const { data, isLoading, isError } = fetcher("api/posts");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <ErrorComponent></ErrorComponent>;
  SwiperCore.use([Autoplay]);
  const Bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };
  return (
    <section className="py-16" style={Bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="pb-12 text-4xl font-bold text-center ">Trending</h1>

        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
        >
          {data.map((value: any) => (
            <SwiperSlide key={value.id}>
              {" "}
              <Slide data={value} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Section1;

function Slide({ data }: any) {
  const { id, title, subtitle, category, img, published, author } = data;
  console.log(author);
  return (
    <div className="grid md:grid-cols-2">
      <div className="img">
        <Link href={`/post/${id}`}>
          <a>
            <Image src={img || "/images/img1.jpg"} width={500} height={500} />
          </a>
        </Link>
      </div>

      <div className="flex flex-col justify-center info">
        <div className="cat">
          <Link href={`/post/${id}`}>
            <a className="text-orange-600 ">{category || "unknown"}</a>
          </Link>
          <Link href={`/post/${id}`}>
            <a className="text-gray-600 hover:text-gray-400">
              - {published || "unknown"}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/post/${id}`}>
            <a className="text-3xl text-gray-800 text-bold md:text-6xl hover:text-gray-400">
              {title || "unknown"}
            </a>
          </Link>
        </div>
        <p className="py-3 text-gray-500 ">{subtitle || "subtitle"}</p>
        {author ? <Author {...author} /> : <></>}
      </div>
    </div>
  );
}
