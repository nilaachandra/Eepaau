import React from "react";
import Datetime from "./Datetime";
import { RiUser3Fill } from "@remixicon/react";

const Topnav = () => {
  return (
    <div className="flex px-[4vw] lg:px-[2vw] text-[2vw] lg:text-[1vw] text-black w-full justify-between items-center border-b-2 border-zinc-500">
      <Datetime />
      <p className="">
        Want to contribute?{" "}
        <a href="" className="text-blue-500">
          Login/Signup
        </a>{" "}
        as a Contributor!
      </p>
    </div>
  );
};

export default Topnav;
