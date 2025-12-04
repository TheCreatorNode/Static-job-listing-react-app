import React from "react";
import data from "../data.json";

const DisplayList = ({ filters }) => {
  const filteredJobs =
    filters.length === 0
      ? data
      : data.filter((d) =>
          filters.every(
            (tag) =>
              d.level == tag ||
              d.languages.includes(tag) ||
              d.tools.includes(tag) ||
              d.role == tag
          )
        );

  return (
    <ul className="w-full [&>li:nth-child(-n+2):border-l-4] [&>li:nth-child(-n+2):border-blue-500]">
      {filteredJobs.map((job) => (
        <List job={job} key={job.id} />
      ))}
    </ul>
  );
};

const List = ({ job }) => {
  const isNew = job.new;
  const isFeatured = job.featured;
  const newArray = [...job.languages, ...job.tools];

  return (
    <li className=" flex justify-center items-center mb-5">
      <div className="max-w-[80%] w-[70%]  bg-white shadow-xl border border-gray-200 p-4 flex justify-between items-start gap-4">
        <div className="flex gap-3">
          <img src={job.logo} alt="company logo" />

          <div className="flex flex-col flex-1">
            <div className="flex items-center gap-2 text-sm font-bold text-[hsl(180,29%,30%)] pt-3">
              <span className="text-sm">{job.company}</span>
              {isNew && (
                <span className="bg-[hsl(180,29%,30%)] text-white text-xs px-2 py-0.5 rounded-full">
                  NEW!
                </span>
              )}
              {isFeatured && (
                <span className="bg-green-950 text-white text-xs px-2 py-0.5 rounded-full">
                  FEATURED
                </span>
              )}
            </div>
            <h2 className="text-lg font-semibold text-gray-900 py-px  hover:text-[hsl(180,29%,30%)] cursor-pointer">
              {job.position}
            </h2>
            <div className="flex  items-center gap-3 text-sm text-gray-500 mt-1 ">
              <span>{job.postedAt}</span>
              <span>•</span>
              <span>{job.contract}</span>
              <span>•</span>
              <span>{job.location}</span>
            </div>
          </div>
        </div>

        <div className="flex  justify-center items-center gap-2 flex-wrap ml-auto pt-8">
          <span className="text-sm bg-gray-100 text-teal-700 px-3 py-1 rounded-md font-medium cursor-pointer hover:bg-[hsl(180,29%,30%)] hover:text-white">
            {job.role}
          </span>
          <span className="text-sm bg-gray-100 text-teal-700 px-3 py-1 rounded-md font-medium cursor-pointer hover:bg-[hsl(180,29%,30%)] hover:text-white">
            {job.level}
          </span>
          {newArray.map((lang) => (
            <span
              key={lang}
              className="text-sm bg-gray-100 text-teal-700 px-3 py-1 rounded-md font-medium cursor-pointer hover:bg-[hsl(180,29%,30%)] hover:text-white"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
};

export default DisplayList;
