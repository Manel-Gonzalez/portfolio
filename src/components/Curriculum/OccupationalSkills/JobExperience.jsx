import React from "react";

const JobExperience = ({jobs, sectionTitle}) => {
  return (
    <div>
      <h2 className="my-12 m-4 font-semibold text-lg shadow-md p-3 bg-white rounded-md shadow-gray-500/65 border border-slate-200">
        {sectionTitle}
      </h2>
      {jobs.map((job) => (
        <div
          key={job.company_name}
          className="m-8 p-4 bg-gray-100/20 rounded-md shadow-inner shadow-gray-500/65 border border-slate-200"
        >
          <div className="flex flex-row items-center gap-4">
            <h3 className="font-bold text-xl h-fit align-middle">
              {job.company_name}
            </h3>
            <div className="w-20">
              <img className="w-1/3" src={job.logo} alt={job.logo} />
            </div>
          </div>
          <h4 className="font-medium text-lg">{job.position}</h4>
          <p className="text-md">{job.location}</p>
          <div className="flex flex-row">
            <p>
              {job.i_year} - {job.f_year}
            </p>
          </div>
          <div>
            {job.desc.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobExperience;
