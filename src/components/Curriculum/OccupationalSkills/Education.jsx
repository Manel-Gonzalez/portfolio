import React from "react";

const Education = ({education, sectionTitle}) => {
  return (
    <div>
      <h2 className="w-100 m-4 font-semibold text-xl shadow-md p-3 bg-white rounded-md shadow-gray-500/65 border border-slate-200">
        {sectionTitle}
      </h2>
      {education.map((e) => (
        <div
          key={e.name}
          className="flex flex-col gap-2 m-8 p-4 bg-gray-100/20 rounded-md shadow-inner shadow-gray-500/65 border border-slate-200"
        >
          <h3 className="font-bold text-xl h-fit align-middle">{e.name}</h3>
          <div className="flex flex-row gap-4 align-middle items-center">
            <h4 className="font-medium text-lg h-fit align-middle">
              {e.center}
            </h4>
            <img className="w-12 rounded-md" src={e.logo} alt={e.logo} />
          </div>
          <h4>{e.location}</h4>
          <p>
            {e.i_year} - {e.f_year}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Education;
