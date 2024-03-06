import React, { useEffect, useState } from "react";

const Datetime = () => {
  const [datetime, setDatetime] = useState(new Date());

  useEffect(() => {
    const inerval = setInterval(() => {
      setDatetime(new Date());
    }, 24 * 60 * 60 * 1000); //this will update every 24hour
    return () => clearInterval(inerval);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-IN", {
      timeZone: "Asia/Kolkata",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex py-2">
      <p className="poppins-regular text-[2vw] lg:text-[1vw] text-black">
        {formatDate(datetime)}
      </p>
    </div>
  );
};

export default Datetime;
