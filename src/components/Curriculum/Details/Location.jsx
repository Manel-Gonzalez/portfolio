import React from "react";

const Location = ({details}) => {
  return (
    <div>
      {details.map((detail, index) => (
        <div
          key={index}
          className="flex flex-col m-8 p-4 bg-gray-100/20 rounded-md shadow-inner shadow-gray-500/65 border border-slate-200"
        >
          <p>{detail.location}</p>
          <p>{detail.country}</p>
          <p>{detail.phone}</p>
          <p className="break-words">{detail.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Location;
