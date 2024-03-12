import React from "react";
import Newscard from "./Newscard";
const Newscontainer = () => {
  return (
    <div className="newsholder p-6 flex flex-col">
      <h1 className="reikna uppercase text-[3rem] leading-[2rem] lg:text-[6vw] lg:leading-[6vw]">
        Featured
        <Newscard/>
      </h1>
    </div>
  );
};

export default Newscontainer;
