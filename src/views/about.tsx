/** @format */

import { Achievements } from "../components/about/achievement";
import { InfoGrid } from "../components/about/info-grid";
import { Mentor } from "../components/about/mentor";
import { OurStory } from "../components/about/our-story";
import { TeamMembers } from "../components/about/teamMembers";
import { Vision } from "../components/about/vision";
import { Map } from "../components/about/map";
import { AboutContact } from "../components/about/aboutPageContact";

export const About = () => {
  return (
    <div className=" flex flex-col items-center bg-primary ">
      {/* video section */}
      <div className="w-full h-screen grid place-items-center p-8 ">
        <h1 className="text-secondary text-3xl"> Video placeholder</h1>
      </div>

      {/* grid information section */}

      <InfoGrid />

      {/* our story section  */}

      <OurStory />

      <Mentor />
      <Achievements />
      <Map />
      <Vision />
      <TeamMembers />
      <AboutContact/>
    </div>
  );
};
