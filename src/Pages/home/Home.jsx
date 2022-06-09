import React from "react";
import "./home.css";
import blob from "../../Assets/blob.png";
import mypic from "../../Assets/mypic.png";
import aboutpic from "../../Assets/mySelf.png";
import projects from "../../Assets/projects.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faChain,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main>
      <div className="heroSec">
        <div className="herocontent">
          <h3>Hello, I am</h3>
          <h1>Kishor Sutradhar</h1>
          <p>SHAPING YOU IMAGINATION IS MY JOB</p>
          <div className="socialMedia">
            <span>Follow Me</span>
            <a
              href="https://www.linkedin.com/in/kishor-sutradhar-930a6a224/"
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className="icon"
              href="https://github.com/SDKishor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </div>
          <a
            className="heroBtn"
            href="https://drive.google.com/file/d/19Ax61xXwENUo0jHM81gTfPvrUIOFZ1dd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faArrowDown} />
            Resume
          </a>
        </div>
        <div className="heroImagecontent">
          <div className="image_container">
            <div
              style={{
                backgroundImage: `url(${blob})`,
              }}
              className="blob"
            ></div>
            <img src={mypic} alt="" />
          </div>
        </div>
      </div>
      <div className="aboutSec">
        <div className="aboutImage">
          <div className="aboutmeImage">
            <img src={aboutpic} alt="" />
          </div>
        </div>
        <div className="aboutContent">
          <h1>ABOUT ME</h1>
          <h4>I'm A Front-End Website Designer & Developer </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            qui praesentium, saepe alias eum voluptate laboriosam consequuntur
            inventore accusamus ea deserunt exercitationem temporibus, quam
            debitis!
          </p>
          <div className="btnContainer">
            <button className="ResumeBtn">VIEW RESUME</button>
            <FontAwesomeIcon className="chain" icon={faChain} />
            <button className="DownloadBtn">DOWNLOAD</button>
          </div>
        </div>
      </div>
      <div className="projectSec">
        <div className="projectContent">
          <h1>Projects</h1>
          <div className="projectContainer">
            <div className="project1"></div>
            <div className="project2"></div>
            <div className="project3"></div>
            <div className="moreBtn">
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </div>
          </div>
        </div>
        <div className="projectImagesec">
          <div className="projectImage">
            <img src={projects} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}
