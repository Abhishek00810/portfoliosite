import React from "react";

function Footer()
{
    return(
        <div className="footer-main">
        
        <a href="mailto:dadwalabhishek10@gmail.com" className="tech-images" target="_blank" >  
        <img src={require("./assests/mail.png")} /> 
        </a>
        <a href="https://leetcode.com/aavii/" target="_blank" className="tech-images" >  <img src={require("./assests/leetcode.png")} />  </a>
        <a href="https://github.com/Abhishek00810" target="_blank" className="tech-images" >  <img src={require("./assests/github.png")} />  </a>
        <a  href="https://www.linkedin.com/in/abhishek-dadwal-5565781b6/" target="_blank" className="tech-images" >  <img src={require("./assests/linkedin.png")} />  </a>
       <h2 className="right">© 2023 Abhishek Dadwal. All rights reserved.</h2>
    </div>
    );

    
}
export default Footer;