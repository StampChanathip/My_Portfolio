import Card from "../Components/Card";
import CUBS from "../Assets/CUBS.png";
import Champ from "../Assets/Champ.png";
import Bitkub from "../Assets/Bitkub.png";
import Investment from "../Assets/Investment.png";

export default function Activities() {
  return (
    <section
      id="Activities"
      className="flex flex-col justify-center items-center bg-yellow-100 p-6 "
    >
      <h1 className="flex justify-center items-center text-3xl mb-6 font-bold">
        Extra curriculum activities
      </h1>
      <div className="flex flex-col items-center w-full md:items-stretch md:justify-center md:flex-row md:space-x-6 ">
        <Card
          orgName="Chula Investment Forum"
          role="Head of event organizer"
          date="20 Jun 2022 - 10 Sep 2022"
          logo={Investment}
          detail={[
            "Determine and define project scope and objective",
            "Develop and manage deatailed project schedules and work plan",
            "Monitor progress and make adjustment as needed",
            "Lead organizer team to organize the event attended by 160 participants in total",
          ]}
        />
        <Card
          orgName="Bitkub Labs Co., Ltd."
          role="Bitkub Academy Blockathon Boot Camp"
          date="15 Nov 2022 - 18 Nov 2022"
          logo={Bitkub}
          detail={[
            "Participate in business pitching competition during bootcamp",
            "Responsible for technical research role in business pitching competition",
            "Completely attend all lessons and workshops provided in bootcamp",
          ]}
        />
      </div>
      <div className="flex flex-col items-center md:items-stretch md:justify-center md:flex-row md:space-x-6 w-full">
        <Card
          orgName="ChAMP Engineering"
          role="ChAMP Career Center | Software Engineer"
          date="12 Nov 2022 - Present"
          logo={Champ}
          detail={[
            "Participate in Sofware engineer career roadmap guidance session",
            "Participate in Frontend developer career roadmap guidance session",
            "Participate in Blockchain developer Engineer career roadmap guidance session",
          ]}
        />
        <Card
          orgName="CU Blockchain Society"
          role="PR & Marketing coreteam"
          date="12 Nov 2022 - 18 Nov 2022"
          logo={CUBS}
          detail={[
            "Responsible for the videos content productioon process",
            "Organize CUBS workshop as a live stream production crew",
          ]}
        />
      </div>
    </section>
  );
}
