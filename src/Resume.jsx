import React from "react";

function Resume() {
  return (
    <div>
      <div className="resume-content">
        <h1 className="heading">Resume</h1>
        <div className="res-content">
        <a id="resumeView" href={require("./assests/AbhishekResume2023.pdf")} target="_blank">
          View Resume 
          <img src={require("./assests/show.png")} />
        </a>
        <a id="resumeView" href={require("./assests/AbhishekResume2023.pdf")}target="_blank" download>
          Download Resume 
          <img src={require("./assests/download.png")} />
        </a>
        </div>

      </div>
    </div>
  );
}

export default Resume;
