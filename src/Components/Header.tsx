import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import "../App.css";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {}, [isNavOpen]);

  return (
    <header>
      <nav className="flex flex-col justify-between  px-8 pt-8 pb-4 bg-yellow-200 md:flex-row md:items-center md:px-12 md:py-8">
        <div className="flex flex-row justify-between">
          <Link to="/">
            <h1 className="text-3xl ">My Portfolio</h1>
          </Link>

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
          className={`flex flex-col items-start md:flex-row space-x-6 text-2xl md:items-center ${
            !isNavOpen ? "md:flex hidden " : ""
          }`}
        >
          <Link to="/">About me</Link>
          <Link to="/">Activities</Link>
          <Link to="/">Experiences</Link>
          <Link to="/">Education</Link>
        </div>
      </nav>
    </header>
  );
}
