import React, { useEffect } from "react";
import { faFacebook, faInstagramSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import TypeAnimation from 'react-type-animation';

const Banner = () => {
  
  useEffect(() => {
		Aos.init({ duration: 2000 });
	}, [])
  return (
    <div  className="bg-dark banner d-flex flex-column justify-content-center align-items-center">
     <div>
     <TypeAnimation
            cursor={true}
            sequence={[
              'I am Nazmul Hasan.',
              2000,
              'I am full stack Web Developer.',
          2000
            ]}
            wrapper="h2"
            repeat={Infinity}
           />
     </div>
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
