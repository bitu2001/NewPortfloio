import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <div className="left">
        <div className="info zoom-in">
          <h1>Suvendu Tripathy</h1>
          <p>Java Full Stack Developer</p>
          <p>tripathysuvendu5@gmail.com</p>
          <p>
            <i class="ri-map-pin-line"></i> Odisha | India
          </p>
        </div>

        <div className="buttons info zoom-in">
          <a href="https://github.com/bitu2001" target="_blank">
            <i class="ri-github-line"></i> Github
          </a>
          <a
            href="https://www.linkedin.com/in/suvendu-tripathy-07b6b5217"
            target="_blank"
          >
            <i class="ri-linkedin-line"></i> Linkedin
          </a>
          <a
            href="https://www.instagram.com/tripathy.suvendu/"
            target="_blank"
          >
            <i class="ri-instagram-line"></i> Instagram
          </a>
          <a href="#" target="_blank">
            <i class="ri-file-chart-line"></i> Resume
          </a>
        </div>
      </div>

      <div className="right fade-up">
        <div className="exprience">
          <h1>Experience</h1>
          <h4>Java Full Stack Developer</h4>
          <br />
          <p>PCS Global Pvt Ltd | 02/2024 - present</p>
          <ul>
            <li>
              I cultivated technical skills and teamwork while working with a
              dynamic team.
            </li>

            <li>
              Acquired valuable experience in operating effectively under
              pressure within challenging work environments.
            </li>

            <li>
              Got proficiency in latest technology trends and creative ideas.
            </li>

            <li>
              Gained a clear understanding of business application and websites.
            </li>
          </ul>

          <br />
          <br />
        </div>

        <div className="skills">
          <h1> Skills</h1>
          <ul>
            <li>Java</li>
            <li>JDBC</li>
            <li>Servlet</li>
            <li>JSP</li>
            <li>Rest API</li>
            <li>Spring Boot</li>
            <li>Collection Framework</li>
            <li>Hibernate & JPA</li>
            <li>Maven</li>
            <li>React js</li>
            <li>Html,Css</li>
            <li>Git / Github</li>
          </ul>
        </div>

        <div className="soft-skills">
          <h1> Soft Skills</h1>
          <ul>
            <li>Effective communication </li>
            <li>Problem solving</li>
            <li>Adaptility</li>
            <li>Ability to learn quickly</li>
            <li>Attention to details</li>
            <li>Team work & collaboration</li>
            <li>Critical thinking</li>
          </ul>
        </div>

        <div className="certificate">
          <h1> Certificates</h1>
          <ul>
            <li> Frontend Development (HTML) </li>
            <li>Javascript By Great Learning</li>
            <li>Java By Great Learning</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
