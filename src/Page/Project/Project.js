import Aos from "aos";
import React, { useEffect, useState, Component  } from "react";
import Slider from "react-slick";
import { Container, Row } from "react-bootstrap";
import projectsData from "../../Data/ProjectsData.json";
import ProjectCard from "./ProjectCard";
import './Project.css'

const Project = () => {
  const [project, setproject] = useState([]);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  useEffect(() => {
		Aos.init({ duration: 1000 });
	}, [])

  useEffect(() => {
    setproject(projectsData);
  }, []);

  console.log(project);

  return (
    <Container id="projects" data-aos="fade-up"
    data-aos-offset="100">
      <h1 className="text-center my-5">Project</h1>

      <Slider {...settings}>
          
        {project.map((data) => {
          return (
            <div className='project-card'>
              <ProjectCard 
          key={data.id} data={data} className={settings.className}/>
            </div>
          );
        })}
        </Slider>

      {/* <Row xs={1} md={2} lg={3} className="g-5 mt-5">
        {project.map((data) => {
          return <ProjectCard 
          key={data.id} data={data}></ProjectCard>;
        })}
      // </Row> */}
    </Container>
  );
};

export default Project;
