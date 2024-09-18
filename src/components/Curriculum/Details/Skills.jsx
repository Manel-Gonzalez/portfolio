import React from "react";

const Skills = ({skills, sectionTitle}) => {
  return (
    <div>
      <h1 className="m-4 font-semibold text-xl shadow-md p-3 bg-white rounded-md shadow-gray-500/65 border border-slate-200">
        {sectionTitle}
      </h1>
      <div className="grid grid-cols-3 m-4 p-4 justify-items-center bg-gray-100/20 rounded-md shadow-inner shadow-gray-500/65 border border-slate-200">
        {skills.map((skill, index) => (
          <div key={index} className="my-4">
            <img src={skill.img} alt="" className="w-10" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
