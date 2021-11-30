import React from "react";
import { Button } from "react-bootstrap";
import { Link } from 'react-scroll';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagramSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Banner = () => {
  return (
    <div className="bg-dark banner d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center">Hi! I am <span className="text-danger">Nazmul Hasan.</span></h1>
      <h4>I am full stack web developer</h4>
      <a
        className="text-decoration-none mt-3 rounded px-4 py-2 fs-3 bg-danger text-light"
        href="https://drive.google.com/file/d/12UvmQlPIJQxAc--01LJJnTDRRVbBhdet/view?usp=sharing"
        target="_blank" rel="noopener noreferrer"
      >
        My Resume
      </a>
      <div className="brand-icon-design" data-aos="fade-up" >
				<a className="d-flex" href="https://www.facebook.com/nazmul.suzon.79/" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="brand-icon m-auto brand-icon-fb" icon={faFacebook} /></a>
				<a href="https://www.instagram.com/nazmul.suzon/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="brand-icon m-auto brand-icon-insta" icon={faInstagramSquare} /></a>
				<a href="https://github.com/NazmulSuzon" target="_blank" rel="noreferrer"><FontAwesomeIcon className="brand-icon m-auto brand-icon-git" icon={faGithubSquare} /></a>
				<a href="https://linkedin.com/in/nazmul-hasan-a122b3162" target="_blank" rel="noreferrer"><FontAwesomeIcon className="brand-icon m-auto brand-icon-in" icon={faLinkedin} /></a>
			</div>
    </div>
  );
};

export default Banner;
