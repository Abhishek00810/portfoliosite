import React from "react";
import axios from "axios"

function Contact() {
  function onsubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8080/portfoliosite", {
        name: e.target[2].value,
        email: e.target[3].value,
        message: e.target[4].value
      })
      .then(function (response) {
        console.log(response);
      });
  }
  return (
    <div id="contact">
      <div id="contactTitle" data-aos="fade-up">
        <h1>Contact</h1>
        <form
          data-aos="fade-up"
          onSubmit={onsubmit}
          method="POST"
          name="contact"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="hidden">
            <label>
              Fill this if you are not human: <input name="bot-field" />
            </label>
          </div>
          <div className="group">
            <input type="text" name="name" required="required" />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Name</label>
          </div>
          <div className="group">
            <input type="text" name="email" required="required" />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Email</label>
          </div>
          <div className="group">
            <textarea
              type="textarea"
              name="message"
              rows="5"
              required="required"
            ></textarea>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Message</label>
          </div>
          <div className="btn-box">
            <button className="btn btn-submit" type="submit">
              Send Message
              <img src={require("./assests/download.png")} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
