import React from "react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import profile from "../Assets/circle_profile.png";

export default function Greetings() {
  return (
    <div className="flex flex-col items-center bg-yellow-100 px-8 py-8 md:px-12 md:py-16 md:flex-row-reverse md:items-start">
      <div className="md:w-1/2 flex items-start md:mt-0">
        <img
          src={profile}
          className="object-contain w-full h-80 md:h-96"
          alt="profile pic"
        ></img>
      </div>
      <div className="flex flex-col mt-4 md:mx-8 md:w-1/2">
        <h1 className="md:text-6xl text-4xl">Hello 👋</h1>
        <br />
        <h1 className="md:text-4xl text-2xl">I am Chanathip Chuehome</h1>
        <p className="md:text-2xl text-xl">
          A Civil Engineering student who is passionate about technology and
          seeking the opportunity to work as a software engineer
        </p>
        <div className="flex flex-row space-x-2 mt-6 justify-center items-center md:justify-start">
          <a href="https://github.com/StampChanathip">
            <FaGithub size="2.5rem" />
          </a>
          <a href="https://www.facebook.com/stamp.kritsanan/">
            <FaFacebook size="2.5rem" />
          </a>
          <a href="https://www.linkedin.com/in/chanathip-chuehome-693271137/">
            <FaLinkedin size="2.5rem" />
          </a>
          <a href="mailto:cchanathip.work@gmail.com">
            <HiOutlineMail size="2.5rem" />
          </a>
          <button className="text-sm md:text-lg bg-yellow-200 items-center p-2 rounded-lg">
            Get my CV
          </button>
        </div>
      </div>
    </div>
  );
}
