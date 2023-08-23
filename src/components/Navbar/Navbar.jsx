import React, { useState } from "react";
import { Link } from "react-router-dom";
import th from "../../assets/th.jpeg";
import Button from "../Button";
import NavLinks from "./NavLinks";
import { AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50  md:w-auto w-full flex justify-between">
          <img src={th} alt="logo" className="md:cursor-pointer h-20" />
          <h1 className="pt-6">KempTechnologies</h1>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center ">
          <NavLinks />
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              <AiOutlineSearch size={30}/>
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <NavLinks />
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
