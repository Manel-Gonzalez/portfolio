import { useEffect, useRef, useState } from "react";
import diccionario from "./data/test.json";

import { usePDF } from "react-to-pdf";
import "./App.css";
import { json } from "react-router";

export default function App() {
  const [language, setLanguage] = useState("en");
  const [jsonData, setData] = useState([]);
  const section1 = "section1";
  const section2 = "section2";
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  useEffect(() => {
    setData(diccionario[language]);
    /*     fetch('../test.json')
    .then(res => res.json())
    .then(res => res[language])
    .then(json => setData(json)) */
  }, [language]);
  console.log(jsonData.curriculum.downloadCV);
  return (
    <div className="">
      <div ref={targetRef} className="p-4 w-100">
        <div className="p-4 py-2 flex flex-row gap-2">
          <button
            className=" bg-white p-2 shadow-lg shadow-gray-500/65 border border-slate-200 hover:bg-slate-100 cursor-pointer rounded-lg 
                                transform transition duration-500 
                                hover:scale-110"
            onClick={() => setLanguage("ca")}
          >
            CA
          </button>
          <button
            className="bg-white p-2 shadow-lg shadow-gray-500/65 border border-slate-200 hover:bg-slate-100 cursor-pointer rounded-lg 
            transform transition duration-500 
            hover:scale-110 "
            onClick={() => setLanguage("es")}
          >
            ES
          </button>
          <button
            className="bg-white p-2 shadow-lg shadow-gray-500/65 border border-slate-200 hover:bg-slate-100 cursor-pointer rounded-lg 
                                transform transition duration-500 
                                hover:scale-110  "
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </div>

        <div className="flex flex-col md:flex-row bg-white m-4 rounded-md shadow-lg shadow-gray-500/65 border border-slate-200">
          <div className=" p-8 w-100 md:w-2/5 md:row-span-3 col-span-1">
            <div className="w-100 rounded-x p-1 flex justify-center">
              <img
                className="rounded-xl p-1"
                src={jsonData.img}
              />
            </div>
          </div>
          
          <div className="md:w-3/5 p-4">
            <div className=" ">
              <h1 className="text-lg font-bold">{jsonData.name}</h1>
              <h2 className="text-lg font-medium">{jsonData.titulation}</h2>
            </div>

            <div className="p-2 md:p-4">
              <p className="text-justify">{jsonData.about_me}</p>
            </div>
          </div>

        </div>

        <div className="flex justify-between flex-row w-100   bg-white mx-4n rounded-md shadow-lg shadow-gray-500/65 border border-slate-200 ">
          <div className="w-6 m-3 transform transition duration-500 
            hover:scale-125 ">
            <a href={jsonData.curriculum?.downloadCV} download>
              <img src={jsonData.curriculum?.img} alt={jsonData.curriculum?.name} />
            </a>
         </div>
         <div className="flex flex-row">
          {jsonData.banner?.map((banner_item) => (
            <div
              className="w-6 m-3 transform transition duration-500 
            hover:scale-125">
              <a href={banner_item.url}>
                <img
                  src={banner_item.img}
                  alt={banner_item.name}
                />
              </a>
            </div>
          ))}

         </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 m-4 rounded-md  bg-white  shadow-lg shadow-gray-500/65 border border-slate-200 col-span-3">
            <div className="">
              <h2 className="my-12 m-4 font-semibold text-lg shadow-md  p-3 bg-white  rounded-md shadow-gray-500/65 border border-slate-200 ">
                {jsonData[section1]?.section_titles.job_title}
              </h2>
              {jsonData[section1]?.jobs.map((job) => (
                <div className="m-8 p-4 bg-gray-100/20 rounded-md shadow-inner shadow-gray-500/65 border border-slate-200">
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
                  <div className="">
                    {job.desc.map((desc) => (
                      <p>{desc}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2 className="w-100 m-4 font-semibold text-xl shadow-md  p-3 bg-white  rounded-md shadow-gray-500/65 border border-slate-200 ">
                {jsonData[section1]?.section_titles.education_title}
              </h2>
              {jsonData[section1]?.education.map((e) => (
                <div className=" flex flex-col  gap-2 m-8 p-4 bg-gray-100/20 rounded-md shadow-inner shadow-gray-500/65 border border-slate-200">
                  <h3 className="font-bold text-xl h-fit align-middle">{e.name}</h3>
                  <div className="flex flex-row gap-4 align-middle items-center">
                  <h4 className=" font-medium text-lg h-fit align-middle">{e.center}</h4>
                  <img className="w-12 rounded-md" src={e.logo} alt={e.logo} />

                  </div>
                  <h4>{e.location}</h4>
                  <p>
                    {e.i_year} - {e.f_year}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="m-4 font-semibold text-xl shadow-md  p-3 bg-white  rounded-md shadow-gray-500/65 border border-slate-200 ">
                {jsonData[section1]?.section_titles.course_title}
              </h2>
              {jsonData[section1]?.courses.map((course) => (
                <div className="m-8 p-4 bg-gray-100/20 rounded-md shadow-inner shadow-gray-500/65 border border-slate-200">
                  <h3>{course.name}</h3>
                  <h4>{course.center}</h4>
                  <h4>{course.location}</h4>
                  <p>
                    {course.i_date} - {course.f_date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/3 p-2 col-span-1  bg-white m-4 rounded-md shadow-lg shadow-gray-500/65 border border-slate-200">
            {jsonData[section2]?.details.map((details) => (
              <div className=" flex flex-col m-8 p-4 bg-gray-100/20 rounded-md shadow-inner shadow-gray-500/65 border border-slate-200 ">
                <p>{details.location}</p>
                <p>{details.country}</p>
                <p>{details.phone}</p>
                <p className="break-words">{details.email}</p>
              </div>
            ))}

            <h1 className="m-4 font-semibold text-xl  shadow-md  p-3 bg-white  rounded-md shadow-gray-500/65 border border-slate-200 ">
              {jsonData[section2]?.section_titles.skills_title}
            </h1>
            <div className="grid grid-cols-3 m-4 p-4 justify-items-center bg-gray-100/20 rounded-md shadow-inner shadow-gray-500/65 border border-slate-200">
              {jsonData[section2]?.skills.map((skill) => (
                <div className="my-4 ">
                  <img src={skill.img} alt="" className="w-10" />
                </div>
              ))}
            </div>
            <h1 className="m-4 font-semibold text-xl shadow-md  p-3 bg-white  rounded-md shadow-gray-500/65 border border-slate-200 ">
              {jsonData[section2]?.section_titles.languages_title}
            </h1>
            <div className="m-8 p-4 bg-gray-100/20 rounded-md shadow-inner shadow-gray-500/65 border border-slate-200">
              {jsonData[section2]?.languages.map((lan) => (
                <div className="">
                  <p>
                    {lan.languaje} - {lan.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
