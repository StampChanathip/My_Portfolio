import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import profile from "../Assets/circle_profile.png";
import Back2Top from "../Components/Back2Top";

export default function Greetings() {
  const onClickDownload = () => {
    fetch("Chanathip_Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Chanathip_Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <section
      id="Greeting"
      className="flex flex-col items-center bg-yellow-100 px-8 py-6 md:px-12 md:pt-16 md:p-8 md:flex-row-reverse md:items-start"
    >
      <div className="w-2/3 flex items-start md:w-1/2 ">
        <img
          src={profile}
          className="object-contain w-full h-64 md:h-96"
          alt="profile pic"
        ></img>
      </div>
      <div className="flex flex-col mt-4 md:mx-8 md:w-1/2">
        <h1 className="text-4xl mb-2 md:text-6xl">Hello👋</h1>

        <h1 className="text-2xl md:text-4xl ">I am Chanathip Chuehome</h1>
        <p className="text-base md:text-lg ">
          A Civil Engineering student who is passionate about technology and
          seeking the opportunity to work as a software engineer.
        </p>
        <div className="flex flex-row space-x-2 mt-6 justify-center items-center md:justify-start">
          <a href="https://github.com/StampChanathip">
            <FaGithub size="2.5rem" />
          </a>
          <a href="https://www.linkedin.com/in/chanathip-chuehome-693271137/">
            <FaLinkedin size="2.5rem" />
          </a>
          <a href="mailto:cchanathip.work@gmail.com">
            <HiOutlineMail size="2.5rem" />
          </a>
          <button
            className="text-base bg-yellow-200 items-center p-2 rounded-lg hover:bg-yellow-300 border-2 border-black font-semibold md:text-lg"
            onClick={onClickDownload}
          >
            Get my CV
          </button>
        </div>
      </div>
    </section>
  );
}
