import Image from "next/image";
import React, { useState } from "react";
import { List, XCircle } from "@phosphor-icons/react";
import { HifadhiLogo, Logo } from "@/constants/svg";
import Link from "next/link";
import { useRef } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollRef = useRef<HTMLDivElement | null>();

  return (
    <div className="">
      <div className="flex justify-between items-center p-3 md:px-20 text-white">
        <div className=" w-auto flex items-center">
          <Image src={Logo} alt="atlas-logo" className="w-auto" width={50} height={50} />
        </div>
        <div className="block md:hidden">
          <List
            size={32}
            color="#000000"
            className="block lg:hidden"
            onClick={toggleMenu}
          />
        </div>
        <div
          className="absolute top-0 left-0 right-0 sm:block bg-white p-5 sm:p-0 min-w-[200px] w-[100%] min-h-[800px] h-[100%]  "
          style={showMenu ? { display: "block" } : { display: "none" }}
        >
          <XCircle
            size={32}
            color="#b8b8b8"
            weight="fill"
            onClick={toggleMenu}
          />
          <ul className="flex flex-col sm:flex-row justify-around text-base font-DM text-black w-auto">
            
            <li
              onClick={() => {
                window.scrollBy({
                  top: 1200,
                });
              }}
              className="my-2 mx-1 w-[100%] min-w-[100px] text-black hover:text-aqua hover:cursor-pointer "
            >
              Features
            </li>
            <li className="my-2 mx-2 w-[100%] min-w-[100px] text-black hover:text-aqua hover:cursor-pointer ">
              Roadmap
            </li>
            <li className="my-2 mx-2 w-[100%] min-w-[100px] text-black hover:text-aqua hover:cursor-pointer ">
              Team
            </li>
         
          </ul>
        </div>

        <div className="hidden md:flex items-center">
          <ul className=" flex flex-col sm:flex-row justify-around text-base font-DM text-[#A2A2A2] w-auto">
        
            <li
              onClick={() => {
                window.scrollBy({
                  top: 940,
                  behavior: "smooth",
                });
              }}
              className="mx-2 w-[100%] min-w-[100px] text-black hover:text-aqua hover:cursor-pointer "
            >
              Features
            </li>
            <li
              onClick={() => {
                window.scrollBy({
                  top: 1800,
                  behavior: "smooth",
                });
              }}
              className="mx-2 w-[100%] min-w-[100px] text-black hover:text-aqua hover:cursor-pointer "
            >
              Roadmap
            </li>
            <li
              onClick={() => {
                window.scrollBy({
                  top: 3000,
                  behavior: "smooth",
                });
              }}
              className="mx-2 w-[100%] min-w-[100px] text-black hover:text-aqua hover:cursor-pointer "
            >
              Team
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <Link
            href="https://social-saving-pool-bwc4-react-app.vercel.app/"
            className=" py-2 px-6 rounded-full border bg-aqua text-black font-semibold hover:bg-white hover:border-aqua hover:cursor-pointer"
          >
            Launch Beta App
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
