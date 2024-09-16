import Image from "next/image";
import { assets } from "../Assets/assets";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row py-5 bg-black items-center">
      <Link href="/">
        <Image src={assets.logo_light} width={120} alt="" />
      </Link>
      <p className="text-md text-white font-bold">
        All Rights Reserved &copy; {new Date().getFullYear()} Blogger
      </p>
      <div className="flex">
        <Link href="https://www.facebook.com" rel="noopener noreferrer">
          <Image src={assets.facebook_icon} alt="Facebook" width={40} />
        </Link>
        <Link href="https://www.twitter.com" rel="noopener noreferrer">
          <Image src={assets.twitter_icon} alt="Twitter" width={40} />
        </Link>
        <Link href="https://www.google.com" rel="noopener noreferrer">
          <Image src={assets.googleplus_icon} alt="Google" width={40} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
