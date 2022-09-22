import React from "react";

const NewsLatter = () => {
  return (
    <section className="mt-20 bg-gray-50">
      <div className="container py-16 mx-auto text-center md:px-20">
        <h1 className="text-3xl font-bold ">Subscribe Newsletter</h1>

        <div className="py-4 ">
          <input
            type="text"
            className="w-9/12 px-3 py-3 text-gray-400 border rounded shadow shadow-outline focus:outline-none focus:"
            placeholder="enter your email now"
          />
        </div>
        <button className="px-20 py-3 bg-orange-400 rounded-full text-gray-50">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default NewsLatter;
