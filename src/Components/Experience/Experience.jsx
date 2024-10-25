import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaPython } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandCpp } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";

const Experience = () => {
  return (
    <div
      id="Experience"
      className="p-10 md:p-24  rounded-lg shadow-lg"
      style={{ backgroundColor: "transparent" }}
    >
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center mb-8">
        Experience
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-around">
        <div className="flex flex-wrap justify-center md:w-1/2 gap-8 md:p-12 py-10">
          {[
            { icon: <FaHtml5 color="#E34F26" size={50} />, name: "HTML5" },
            { icon: <FaCss3 color="#1572B6" size={50} />, name: "CSS3" },
            { icon: <FaReact color="#61DAFB" size={50} />, name: "React" },
            { icon: <FaJs color="#F7DF1E" size={50} />, name: "JavaScript" },
            {
              icon: <IoLogoFirebase color="#E34F26" size={50} />,
              name: "Firebase",
            },
            { icon: <VscAzure color="#1572B6" size={50} />, name: "Azure" },
            { icon: <FaPython color="#cc963f" size={50} />, name: "Python" },
            { icon: <TbBrandCpp color="#61DAFB" size={50} />, name: "C++" },
            { icon: <DiMongodb color="#1e701e" size={50} />, name: "C++" },
          ].map((skill, index) => (
            <span
              key={index}
              className="p-4 bg-gray-800 hover:bg-gray-700 transition rounded-2xl shadow-md flex items-center justify-center animate-skill"
            >
              {skill.icon}
            </span>
          ))}
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="flex gap-10 bg-slate-950 bg-opacity-60 rounded-lg p-6 shadow-lg items-center">
            <SiFreelancer color="#931cc9" size={60} />
            <div className="text-white">
              <h2 className="text-lg font-semibold leading-tight">
                Improving skills
              </h2>
              <p className="text-sm leading-tight font-thin">
                July 2023 - Present
              </p>
              <ul className="text-sm p-2 list-disc list-inside">
                <li>Learning and Growing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
