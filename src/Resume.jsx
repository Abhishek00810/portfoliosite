import React from "react";

function Resume() {
  return (
    <div>
      <div className="resume-content">
        <h1 className="heading">Resume</h1>
        <a id="resumeView" href="/assets/ChrisChinResume.pdf" target="_blank">
          View Resume
          <img src={require("./assests/share.png")} />
        </a>
        <a id="resumeView" href={require("./assests/AbhishekResume2023.pdf")}target="_blank">
          Download Resume
          <img src={require("./assests/share.png")} />
        </a>
      </div>
    </div>
  );
}

export default Resume;
