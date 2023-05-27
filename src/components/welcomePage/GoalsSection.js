import React from "react";
import goalsImg from "../assets/goalsImg.png";

function GoalsSection() {
  return (
    <div
      className="flex flex-col justify-center items-center pt-20 pb-20 space-y-16 bg-goals-bg"
      id="goals"
    >
      <div>
        <h1 className="text-3xl text-black font-bold">Our Goals</h1>
      </div>
      <div className="flex items-center space-x-20 text-right">
        <div className="flex flex-col items-end space-y-6">
          <p className="w-96 font-thin">
            At Doplan, our goal is to help individuals and teams increase their
            productivity and achieve their goals through effective task
            management. We believe that by providing a user-friendly and
            customizable task management tool, we can help users stay organized
            and focused on what matters most.Ultimately, our goal is to help
            users achieve their goals and get more done in less time. We believe
            that by providing a powerful and customizable task management tool,
            we can make productivity accessible to everyone.
          </p>
          <a
            href="/Register"
            className="bg-transperent p-2 border-4 border-button-header text-button-header rounded-md font-medium hover:bg-button-header transition hover:text-white ease-in-out"
          >
            Get started
          </a>
        </div>
        <div>
          <img
            src={goalsImg}
            className="w-96 border-none rounded-lg hover:scale-110 transition ease-in-out"
          ></img>
        </div>
      </div>
    </div>
  );
}
export default GoalsSection;
