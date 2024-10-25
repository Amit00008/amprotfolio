import React from "react";
import {
  Chat_app,
  Moodi_fy,
  File_share,
  Test,
} from "../../Components/Projects/ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <Chat_app
          title="ChatApp"
          main="A sleek chat application built with React and Firebase, offering real-time messaging. Users can create accounts, send messages, and view chat history instantly. "
        />

        <Moodi_fy
          title="Moodify"
          main="Moodify is a music player that plays songs based on your mood. It uses the Spotify API to fetch songs and playlists, allowing users to listen to music that suits their mood. "
        />

        <File_share
          title="FileShare"
          main="FileShare is a file-sharing platform that allows users to upload and share files securely. Users can upload files of any format and size, ensuring easy and quick sharing.."
        />
        <Test
          title="More Projects Coming Soon"
          main="I am currently working on some projects and they will be uploaded soon so stay tuned!"
        />
      </div>
    </div>
  );
};

export default Projects;
