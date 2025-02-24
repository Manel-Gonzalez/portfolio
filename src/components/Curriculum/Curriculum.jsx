import React from "react";
import LanguageSelector from "../LanguageSelector";
import Profile from "../Profile";
import InformationBanner from "../InformationBanner";
import OccupationalSkills from "./OccupationalSkills/OccupationalSkills";
import Details from "./Details/Details";
import ToggleThemeButton from "../ToggleThemeButton";
import Projects from "../Projects";

const Curriculum = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <LanguageSelector />
        <ToggleThemeButton />
      </div>
      <Profile />
      <InformationBanner />
      <Projects />

      <div className="flex flex-col md:flex-row">
        <OccupationalSkills />
        <Details />
      </div>
    </div>
  );
};

export default Curriculum;
