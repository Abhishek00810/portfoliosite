import React from "react";


function technology()
{
    return(
    <div id="skillsDiv">
    <div 
    id="techTitle" data-aos="fade-up" class="aos-init aos-animate">
      <h3>Technologies I've Worked With</h3>
    </div>
    <div id="skillsMain">
      <div class="techDiv aos-init aos-animate" id="frontend" data-aos="fade-up">
        <div class="techDivTitle">
          Frontend
        </div>
        <div class="tech tooltip">
        <img src={require("./assests/react.png")} />
        </div>
        <div class="tech tooltip">
        <img src={require("./assests/react.png")} />
        </div>
        </div>
    </div>
    </div>
    );
}

export default technology