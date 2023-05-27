import React from "react";
import firstImgAbout from "../assets/firstImgAbout.png";
import secondImgAbout from "../assets/secondImgAbout.png";

function AboutSection() {
  return (
    <div
      className="flex flex-col justify-center items-center pt-20 pb-20 space-y-16"
      id="about"
    >
      <div>
        <h1 className="text-3xl text-black font-bold">About app</h1>
      </div>
      <div className="flex items-center space-x-20 text-right">
        <p className="w-96 font-thin">
          Doplan is a web-based task management application designed to help
          users manage their to-do lists and increase productivity. It offers a
          clean and intuitive interface that allows users to easily create,
          prioritize, and organize their tasks. One of the key features of
          Doplan is its ability to categorize tasks. This allows users to
          separate their work and personal tasks.Doplan also offers a "Today"
          view that displays all tasks due for the current day, making it easy
          to prioritize and complete urgent tasks.
        </p>
        <img
          src={firstImgAbout}
          className="w-96 border-none rounded-lg hover:scale-110 transition ease-in-out"
        ></img>
      </div>
      <div className="flex items-center space-x-20">
        <img
          src={secondImgAbout}
          className="w-96 border-none rounded-lg hover:scale-110 transition ease-in-out"
        ></img>
        <p className="w-96 font-thin">
          Completed tasks are automatically moved to a "Done" list, which allows
          users to track their progress and stay motivated. In addition to its
          basic task management features, Doplan also offers advanced features
          such as the ability to add sub-tasks, tags, and comments to tasks.
          This makes it easy to break down complex tasks into smaller, more
          manageable steps, and collaborate with others on tasks.
        </p>
      </div>
    </div>
  );
}
export default AboutSection;
