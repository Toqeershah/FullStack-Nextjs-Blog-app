"use client";
import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const response = await axios.get("/api/blog", {
      params: {
        id: params.id,
      },
    });
    setData(response.data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);
  return data ? (
    <>
      <div className="bg-gray-200 px-5 py-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo}
              alt=""
              width={180}
              className="w-[150px] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium  py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
            Get Started <Image src={assets.arrow} alt="" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 rounded-full border border-white"
            src={data.authorImage}
            width={60}
            height={60}
            alt=""
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          width={1280}
          height={720}
          alt=""
        />
        <div className="blog-content" dangerouslySetInnerHTML={{__html:data.description}}></div>
        {/* <h1 className="font-semibold text-[26px] my-8">Introduction:</h1> */}
        {/* <p>{data.description}</p> */}
        {/* <h3 className="my-5 font-semibold text-[18px]">
          Step 1: Self-reflection and goal setting
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear
          understanding what do you want to achieve it.
        </p>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear
          understanding what do you want to achieve it.
        </p>
        <h3 className="my-5 font-semibold text-[18px]">
          Step 2: Self motivation and guiding others
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear
          understanding what do you want to achieve it.
        </p>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear
          understanding what do you want to achieve it.
        </p>
        <h3 className="my-5 font-semibold text-[18px]">
          Step 3: Your Transparent success
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear
          understanding what do you want to achieve it.
        </p>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear
          understanding what do you want to achieve it.
        </p>
        <h3 className="my-5 font-semibold text-[18px]">Conclusion:</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          cum deleniti, at velit, quae blanditiis aliquam voluptatem iusto
          deserunt mollitia quos eos nemo, explicabo ut excepturi recusandae
          molestias. Aliquam, aperiam.
        </p> */}
        <div className="my-24">
          <p className="text-black font-semibold my-4">
            share this article on social media
          </p>
          <div className="flex ">
            <Image src={assets.facebook_icon} alt="" width={50} />
            <Image src={assets.twitter_icon} alt="" width={50} />
            <Image src={assets.googleplus_icon} alt="" width={50} />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  ) : (
    <></>
  );
};

export default page;
