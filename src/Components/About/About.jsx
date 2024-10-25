import React from "react";
import AboutImg from "../../assets/pfp2.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96 hover:underline hover:underline-offset-4 hover:text-blue-500 transition-all duration-300 ease-in-out">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I build responsive, user-friendly interfaces using HTML, CSS,
                  JavaScript, and React, ensuring smooth and engaging web
                  experiences across all devices.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96 hover:underline hover:underline-offset-4 hover:text-blue-500 transition-all duration-300 ease-in-out">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Programmer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I have a strong foundation in JavaScript, from basics to
                  advanced concepts. I’m also familiar with Python and currently
                  expanding my skills in C++.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96 hover:underline hover:underline-offset-4 hover:text-blue-500 transition-all duration-300 ease-in-out">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Experienced with Node.js and Firebase for building
                  server-side applications, APIs, and real-time databases
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96 hover:underline hover:underline-offset-4 hover:text-blue-500 transition-all duration-300 ease-in-out">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Student
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I am a student of PCM Stream , currently Studying in Jagiroad collage , Assam
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
