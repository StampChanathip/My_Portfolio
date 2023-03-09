import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { IoSchoolOutline } from "react-icons/io5";
import { BsInfoCircle, BsBriefcase } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import "../App.css";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {}, [isNavOpen]);

  return (
    <nav
      id="Header"
      className="flex flex-col justify-between w-full px-8 pt-8 pb-4 font-bold bg-yellow-200 md:flex-row md:items-center md:px-12 md:py-8"
    >
      <div className="flex flex-row justify-between">
        <h1 className="text-xl md:text-3xl ">My Portfolio</h1>

        <div className="mb-4 md:hidden lg:hidden">
          <button
            className="flex items-center"
            onClick={() => {
              setIsNavOpen(!isNavOpen);
              console.log(isNavOpen);
            }}
          >
            {!isNavOpen ? (
              <IoIosMenu size="2rem" />
            ) : (
              <IoMdClose size="1.5rem" className="m-1" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`flex flex-col items-center justify-start text-xl md:flex-row md:space-x-6 md:items-center ${
          !isNavOpen ? "hidden md:flex" : ""
        }`}
      >
        <Link
          className="flex flex-row space-x-2 items-center"
          to="#Greeting"
          smooth
        >
          <BsInfoCircle className="md:hidden" />
          <div>About me</div>
        </Link>
        <Link
          className="flex flex-row space-x-2 items-center"
          to="#Experiences"
          smooth
        >
          <BsBriefcase className="md:hidden" />
          <div>Experiences</div>
        </Link>
        <Link
          className="flex flex-row space-x-2 items-center"
          to="#Education"
          smooth
        >
          <IoSchoolOutline className="md:hidden" />
          <div>Education</div>
        </Link>
        <Link
          className="flex flex-row space-x-2 items-center"
          to="#Activities"
          smooth
        >
          <MdOutlineAssignment className="md:hidden" />
          <div>Activities</div>
        </Link>
      </div>
    </nav>
  );
}
