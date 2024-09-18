import React, {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext";
import diccionario from "../../../data/test.json";
import Location from "./Location";
import Skills from "./Skills";
import Languages from "./Languages";

const Details = () => {
  const {language} = useContext(LanguageContext);
  const jsonData = diccionario[language];
  const section2 = "section2";

  return (
    <div className="md:w-1/3 p-2 col-span-1 bg-white m-4 rounded-md shadow-lg shadow-gray-500/65 border border-slate-200">
      <Location details={jsonData[section2]?.details} />
      <Skills
        skills={jsonData[section2]?.skills}
        sectionTitle={jsonData[section2]?.section_titles.skills_title}
      />
      <Languages
        languages={jsonData[section2]?.languages}
        sectionTitle={jsonData[section2]?.section_titles.languages_title}
      />
    </div>
  );
};

export default Details;
