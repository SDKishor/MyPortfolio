import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../hooks/CustomLink";
import "./header.css";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <header>
      <div className="logo_container">
        <Link to="/">Kishor</Link>
      </div>
      <div className="links_container">
        <nav>
          <ul>
            <li>
              <CustomLink to="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink to="/projects">Projects</CustomLink>
            </li>
            <li>
              <CustomLink to="/blogs">Blogs</CustomLink>
            </li>
            <li>
              <button>
                {isDarkMode ? (
                  <FontAwesomeIcon icon={faSun} />
                ) : (
                  <FontAwesomeIcon icon={faMoon} />
                )}
              </button>
            </li>
          </ul>
        </nav>

        <button className="contactBtn">Contact me</button>
      </div>
    </header>
  );
}
