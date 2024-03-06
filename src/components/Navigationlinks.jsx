import React, { useState } from "react";
import { RiMenuLine, RiSearch2Line } from "@remixicon/react";
const Navigationlinks = () => {
  const [isOpen, setIsOpen] = useState("false");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full flex justify-center items-center lg:flex-row flex-col lg:gap-6 uppercase poppins-regular text-[1.4vw]">
      <div className="icons lg:hidden flex justify-center items-center gap-6 w-full border-b-2 border-zinc-400 py-4">
        <RiMenuLine size={24} onClick={toggleMenu} />
        <RiSearch2Line size={24} />
      </div>
      <div
        className={`mobilenav ${
          isOpen ? "" : "openMenu"
        }  border-b-2 lg:h-20 overflow-hidden border-zinc-400 w-full flex lg:justify-center items-start flex-col
       lg:py-2 pl-4 lg:pl-0 text-[1rem] lg:text-[1.4vw] lg:flex-row lg:items-center lg:gap-6`}
      >
        {["home", "local", "tech", "articles", "write your own?"].map(
          (link, index) => (
            <a href="" className="border-b-2 border-zinc-500" key={index}>
              {link}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Navigationlinks;
