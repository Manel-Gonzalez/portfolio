import React, {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext";
import diccionario from "../../../data/test.json";
import JobExperience from "./JobExperience";
import Education from "./Education";
import Courses from "./Courses";

const OccupationalSkills = () => {
  const {language} = useContext(LanguageContext);
  const jsonData = diccionario[language];
  const section1 = "section1";

  return (
    <div className="md:w-2/3 m-4 rounded-md bg-white shadow-lg shadow-gray-500/65 border border-slate-200 col-span-3">
      <JobExperience
        jobs={jsonData[section1]?.jobs}
        sectionTitle={jsonData[section1]?.section_titles.job_title}
      />
      <Education
        education={jsonData[section1]?.education}
        sectionTitle={jsonData[section1]?.section_titles.education_title}
      />
      <Courses
        courses={jsonData[section1]?.courses}
        sectionTitle={jsonData[section1]?.section_titles.course_title}
      />
    </div>
  );
};

export default OccupationalSkills;
