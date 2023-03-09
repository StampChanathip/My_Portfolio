import Wang from "../Assets/Wang.png";

export default function Experience() {
  return (
    <section
      id="Experiences"
      className="flex flex-col justify-center items-center bg-yellow-100 p-8"
    >
      <div className="flex flex-col justify-center items-center text-xl">
        <h1 className="text-2xl font-bold md:text-3xl ">Working Experience</h1>
        <div className="my-2 w-24 h-24 drop-shadow-lg md:w-32 md:h-32 ">
          <img src={Wang} className="object-contain" alt="Working logo"></img>
        </div>
        <h2 className="text-lg md:text-2xl ">Wang Data Market</h2>
        <h2 className="text-base md:text-2xl">PR & Marketing Internship</h2>
        <p className="text-base md:text-xl ">1 May 2022 - 31 July 2022</p>
        <ol className="list-disc px-6 mt-2 text-base md:text-xl ">
          <li>Responsible creating weekly content for Wang's Facebook page</li>
          <li>Operate and coordinate Wang's data-collecting project</li>
          <li>Attend full-stack developer workshop provided by company</li>
        </ol>
      </div>
    </section>
  );
}
