import React from "react";

const Languages = ({languages, sectionTitle}) => {
  return (
    <div>
      <h1 className="m-4 font-semibold text-xl shadow-md p-3 bg-white rounded-md shadow-gray-500/65 border border-slate-200">
        {sectionTitle}
      </h1>
      <div className="m-8 p-4 bg-gray-100/20 rounded-md shadow-inner shadow-gray-500/65 border border-slate-200">
        {languages.map((lan, index) => (
          <div key={index}>
            <p>
              {lan.languaje} - {lan.level}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
