import React from "react";
import LanguageSelector from "../LanguageSelector";
import Profile from "../Profile";
import InformationBanner from "../InformationBanner";
import OccupationalSkills from "./OccupationalSkills/OccupationalSkills";
import Details from "./Details/Details";

const Curriculum = () => {
  return (
    <div className="">
      <LanguageSelector />
      <Profile />
      <InformationBanner />

      <div className="flex flex-col md:flex-row">
        <OccupationalSkills />
        <Details />
      </div>
    </div>
  );
};

export default Curriculum;
