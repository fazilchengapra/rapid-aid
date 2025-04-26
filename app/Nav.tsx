import Image from "next/image";
import React from "react";
import Logo from "@/asset/RapidAid Logo Design.png";
import { Avatar } from "@radix-ui/themes";

const Nav = () => {
  return (
    <div className="w-[80%] top-5 left-1/11 fixed z-10 rounded-xl shadow-sm bg-gray-50 items-center flex justify-between">
      <div className="h-24 w-24 mx-3">
        <Image src={Logo} alt="logo" />
      </div>
      <div className="h-12 w-12 mx-3">
      <Avatar fallback="A" radius="full"/>
      </div>
    </div>
  );
};

export default Nav;
