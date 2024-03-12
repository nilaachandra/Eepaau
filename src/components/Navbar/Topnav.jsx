import React from "react";
import Datetime from "./Datetime";
import { RiUser3Fill } from "@remixicon/react";
import {Link} from "react-router-dom"
import Logout from '../Authentication/Logout'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Topnav = () => {

  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate();
  
  const navItems = [
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    }
  ]

  return (
    <div className="flex px-[4vw] lg:px-[2vw] text-[2vw] lg:text-[1vw] text-black w-full justify-between items-center border-b-2 border-zinc-500">
      <Datetime />
      <p className="">
        Want to contribute?{" "}

        {
          navItems.map((item) => item.active ? (<span onClick={() => navigate(item.slug)}>{item.name}</span>) : null)
        }

       {" "}
        as a Contributor!
      </p>
    </div>
  );
};

export default Topnav;
