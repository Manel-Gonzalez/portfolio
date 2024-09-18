import React from "react";

const Courses = ({courses, sectionTitle}) => {
  return (
    <div>
      <h2 className="m-4 font-semibold text-xl shadow-md p-3 bg-white rounded-md shadow-gray-500/65 border border-slate-200">
        {sectionTitle}
      </h2>
      {courses.map((course) => (
        <div
          key={course.name}
          className="m-8 p-4 bg-gray-100/20 rounded-md shadow-inner shadow-gray-500/65 border border-slate-200"
        >
          <h3>{course.name}</h3>
          <h4>{course.center}</h4>
          <h4>{course.location}</h4>
          <p>
            {course.i_date} - {course.f_date}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Courses;
