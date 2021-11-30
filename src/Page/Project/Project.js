import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import projectsData from "../../Data/ProjectsData.json";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const [project, setproject] = useState([]);

  useEffect(() => {
    setproject(projectsData);
  }, []);

  console.log(project);

  return (
    <Container id="projects">
      <h1 className="text-center my-5">Project</h1>
      <Row xs={1} md={2} lg={3} className="g-5 mt-5">
        {project.map((data) => {
          return <ProjectCard key={data.id} data={data}></ProjectCard>;
        })}
      </Row>
    </Container>
  );
};

export default Project;
