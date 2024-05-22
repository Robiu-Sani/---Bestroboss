import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="w-full py-10 px-2 bg-slate-700 flex justify-around items-center">
          <span></span>
          <div className="p-4 flex flex-col justify-center items-center">
            <h1 className="text-2xl mb-2 text-white">CONTACT US</h1>
            <p className="text-white">123 ABS Street, Uni 21, Bangladesh</p>
            <p className="text-white">+88 123456789</p>
            <p className="text-white">Mon - Fri: 08:00 - 22:00</p>
            <p className="text-white">Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        <div className="w-full pt-8 pb-3 px-2 bg-slate-800 flex justify-around items-center">
          <div className="p-4 flex flex-col justify-center items-center gap-3">
            <h1 className="text-2xl mb-2 text-white">FOLLOW US</h1>
            <p className="text-white">Join us on social media</p>
            <div className="flex justify-center items-center gap-5">
              <FaFacebookF className="text-white text-2xl" />
              <FaInstagram className="text-white text-2xl" />
              <FaTwitter className="text-white text-2xl" />
            </div>
          </div>
          <span></span>
        </div>
      </div>
      <div className="w-full p-3 bg-slate-950">
        <p className="text-center text-white">
          Copyright © CulinaryCloud {new Date().getFullYear()}. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
