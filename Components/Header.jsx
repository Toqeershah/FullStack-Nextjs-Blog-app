import Image from "next/image";
import React, { useState } from "react";
import { assets } from "@/Assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Header = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post("/api/email", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    } else {
      toast.error("Failed to Subscribe Email");
    }
    if (!email) {
      toast.error("Please enter an email address");
      return;
    }
  };

  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src={assets.logo}
            width={180}
            alt="Logo"
            className="w-[130px] sm:w-auto"
          />
        </Link>

        {/* Signed-in State */}
        <SignedIn>
          <div className=" flex items-center gap-8">
            <Link href="/admin">
              <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
                Get Started <Image src={assets.arrow} alt="Arrow" />
              </button>
            </Link>
            <UserButton />
          </div>
        </SignedIn>
        

        {/* Signed-out State */}
        <SignedOut>
          <SignInButton mode="modal">
            <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
      </div>

      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blog</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xsm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, autem
          reprehenderit necessitatibus nostrum fugit ipsum quis, expedita et
          deleniti, esse eos sequi aliquid adipisci delectus provident quam at
          excepturi libero!
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter Your Email"
            className="pl-4 outline-none"
          />
          <button
            type="submit"
            className="py-4 px-4 border-l  border-black sm:px-8 active:bg-gray-600 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
