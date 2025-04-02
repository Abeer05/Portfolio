import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center pink-bg py-4 px-8 text-white mx-5">
      Hello! My name is <span className="font-semibold">Abeer Malik</span>,
      <br /> an aspiring software developer from Toronto, ON!
    </h1>
  ),
  2: (
    <InfoBox
      text="Over the years, I've brought many projects to life. Want to see the results?"
      link={"/projects"}
      btnText={"Visit my Portfolio!"}
    />
  ),
  3: (
    <InfoBox
      text="Hiring a developer or need a project completed? I'm ready when you are!"
      link={"/contact"}
      btnText={"Let's Talk!"}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
