import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
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
    <section className="flex flex-col items-center p-4 bg-yellow-200 md:text-lg md:px-8 md:py-4">
      <p className="flex text-base justify-center items-center font-bold md:text-lg">
        Design and Developed by Chanathip Chuehome
      </p>
      <div className="flex flex-row justify-center items-center mt-2 space-x-6 ">
        <a href="https://github.com/StampChanathip">
          <FaGithub size="2rem" />
        </a>
        <a href="https://www.linkedin.com/in/chanathip-chuehome-693271137/">
          <FaLinkedin size="2rem" />
        </a>
        <a href="mailto:cchanathip.work@gmail.com">
          <HiOutlineMail size="2rem" />
        </a>
        <button
          className="flex justify-center bg-yellow-300 items-center p-2 rounded-lg hover:bg-yellow-400 border-2 border-black"
          onClick={onClickDownload}
        >
          Get my CV
        </button>
      </div>
    </section>
  );
}
