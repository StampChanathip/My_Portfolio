export default function Card(props: any) {
  return (
    <div className="flex flex-col items-center w-[24rem] h-[30rem] mb-6 border-2 border-gray-500 rounded-xl md:w-[28rem] md:h-[32rem]">
      <div className="flex flex-col justify-start items-center pt-4 bg-yellow-200 w-full h-[108px] md:h-[128px] drop-shadow-lg ">
        <h1 className="text-lg font-semibold md:text-2xl">{props.orgName}</h1>
        <div className="relative  my-2 w-24 h-24 md:w-28 md:h-28">
          <img
            src={props.logo}
            className="object-contain"
            alt="Activty logo"
          ></img>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mx-6 mt-4 mb-6 pt-8 md:pt-10">
        <h2 className="text-base md:text-xl">{props.role}</h2>
        <p className="">{props.date}</p>
        <ol className="list-disc px-6 mt-2">
          <DetailList detail={props.detail} />
        </ol>
      </div>
    </div>
  );
}

function DetailList(props: any) {
  return (
    <div>
      {props.detail.map((value: string) => {
        return <li>{value}</li>;
      })}
    </div>
  );
}
