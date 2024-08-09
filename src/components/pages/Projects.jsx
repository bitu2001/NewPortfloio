import React, { useEffect } from "react";
import "./projects.css";

const Projects = () => {
  useEffect(() => {
    const windows = document.querySelectorAll(".window");

    windows.forEach((window, index) => {
      setTimeout(() => {
        window.classList.add("zoom-in");
      }, index * 100);
    });
  }, []);

  return (
    <div className="work">
      <h1> Have a look at my work 💞 💻 </h1>

      <div className="work_cards">
        <div className="window">
          <h2>BookHub</h2>

          <div className="languages">
            <span id="pink">Java</span>
            <span id="purple">JSP</span>
            <span id="yellow">Servlet</span>
            <span id="blue">MySQL</span>
            <span id="green">Bootstrap</span>
          </div>

          <br />

          <div className="btn">
            <a href="#">
              <i className="ri-github-fill"></i>
            </a>
            <a href="#">
              <i className="ri-links-fill"></i>
            </a>
          </div>
        </div>

        <div className="window">
          <h2>Helpdesk Management</h2>

          <div className="languages">
            <span id="pink">Java</span>
            <span id="purple">JSP</span>
            <span id="yellow">Servlet</span>
            <span id="blue">MySQL</span>
            <span id="green">Bootstrap</span>
          </div>

          <br />

        </div>

        <div className="window">
          <h2>Employee Management</h2>

          <div className="languages">
            <span id="pink">Java</span>
            <span id="purple">JSP</span>
            <span id="yellow">Servlet</span>
            <span id="blue">MySQL</span>
            <span id="green">Bootstrap</span>
          </div>

          <br />
        </div>
      </div>
    </div>
  );
};

export default Projects;
