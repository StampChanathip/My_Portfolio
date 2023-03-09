import { AiOutlineToTop } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";

export default function Back2Top() {
  return (
    <Link
      to="#Header"
      smooth
      className="fixed bottom-10 right-6 flex justify-center items-center w-[56px] h-[56px] 
       rounded-xl bg-yellow-300 border-yellow-400 border-4 md:right-10 md:w-[64px] md:h-[64px]"
    >
      <AiOutlineToTop size="2rem" />
    </Link>
  );
}
