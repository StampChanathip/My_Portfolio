import Chula from "../Assets/Chula.png";

export default function Education() {
  const onClickDownload = () => {
    fetch("Chanathip_Transcript.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Chanathip_Transcript.pdf";
        alink.click();
      });
    });
  };

  return (
    <section
      id="Education"
      className="flex flex-col items-center justify-center bg-yellow-100 px-8"
    >
      <div className="flex flex-col justify-center items-center py-6 text-xl">
        <h1 className="text-2xl font-bold md:text-3xl">Education</h1>
        <div className="my-2 w-24 h-24 drop-shadow-lg md:w-32 md:h-32 ">
          <img
            src={Chula}
            className="object-contain"
            alt="Education logo"
          ></img>
        </div>
        <h2 className="text-lg md:text-2xl">Chulalongkorn University</h2>
        <h2 className="text-base md:text-2xl">
          Bachelor of Engineering in Civil Engineering
        </h2>
        <p className="text-base md:text-xl">August 2020 - Present</p>
        <button
          className="text-base items-center p-2 rounded-lg mt-2 border-2 border-black font-semibold bg-yellow-200 hover:bg-yellow-300 md:text-lg  "
          onClick={onClickDownload}
        >
          Transcript
        </button>
      </div>
    </section>
  );
}
