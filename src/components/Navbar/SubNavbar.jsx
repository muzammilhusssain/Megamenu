import React from 'react';
import {  FaUser, FaCog } from 'react-icons/fa';
import { AiOutlineGlobal } from "react-icons/ai";

const SubNavBarWithDropdown = () => {
  return (
    <nav className=" p-2 mr-32">
      <ul className="flex space-x-4 justify-end" >
        <li className="relative group">
          <a href="#" className="flex items-center">
            Blog
          </a>
        </li>
        <li className="relative group">
          <a href="#" className="flex items-center">
             Support
          </a>
        </li>
        <li className="relative group">
          <a href="#" className="flex items-center">
             Partner
          </a>
          <div className="hidden group-hover:block absolute mt-2 bg-white border border-gray-300 p-2">
            <a href="#" className="block hover:bg-gray-100 p-1">Find A Partner</a>
            <a href="#" className="block hover:bg-gray-100 p-1">Become a Partner</a>
            <a href="#" className="block hover:bg-gray-100 p-1">Register Project</a>
            <a href="#" className="block hover:bg-gray-100 p-1">Partner Login</a>
            <a href="#" className="block hover:bg-gray-100 p-1">Strategic Alliances</a>
          </div>
        </li>
        <li className="relative group">
          <a href="#" className="flex items-center">
            <AiOutlineGlobal className="mr-1 mt-1" size={20}  /> 
          </a>
          <div className="hidden group-hover:block absolute mt-2 bg-white border border-gray-300 p-2">
            <a href="#" className="block hover:bg-gray-100 p-1">Englsih</a>
            <a href="#" className="block hover:bg-gray-100 p-1">Français</a>
            <a href="#" className="block hover:bg-gray-100 p-1">Deutsch</a>
            <a href="#" className="block hover:bg-gray-100 p-1">Español</a>
            <a href="#" className="block hover:bg-gray-100 p-1">日本語</a>
            <a href="#" className="block hover:bg-gray-100 p-1">繁體中文</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default SubNavBarWithDropdown;
