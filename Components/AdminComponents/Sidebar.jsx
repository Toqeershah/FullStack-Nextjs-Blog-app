import Image from "next/image";
import React from "react";
import { assets } from "@/Assets/assets";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 sm:pl-14 py-3 border border-black">
        <Link href='/admin'>
          <Image src={assets.logo} width={120} alt="" />
        </Link>
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black ">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <Link href='/admin/addProduct' className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Image src={assets.add_icon} width={28} alt="" />
            <p>Add Blogs</p>
          </Link>
          <Link href='/admin/blogList' className="mt-5 flex items-center border border-black gap-3 font-medium py-3 py2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Image className="ml-3" src={assets.blog_icon} width={28} alt="" />
            <p>Blog Lists</p>
          </Link>
          <Link href='/admin/subscriptions' className=" mt-5 flex items-center border border-black gap-3 font-medium py-3 py2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Image src={assets.email_icon} width={28} alt="" />
            <p>Subscriptions</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
