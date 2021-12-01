import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import projectsData from "../Data/ProjectsData.json";
import Projects from './Projects'

const ProjectDetails = () => {
    const [projectDetail, setProjectDetail] = useState([]);

    useEffect(() =>{
        setProjectDetail(projectsData);
    }, [])
    console.log(projectDetail);
    return (
        <Container>
            <h1>This is project details</h1>

        {projectDetail.map((data) => {
          return <Projects 
          key={data.id} data={data}></Projects>;
        })}
        
       </Container>
        
    );
};

export default ProjectDetails;