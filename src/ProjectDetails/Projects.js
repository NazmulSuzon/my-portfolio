import React, { useEffect, useState } from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import { useParams } from "react-router";
import projectsData from "../Data/ProjectsData.json";

const Projects = () => {
  const [details, setDetails] = useState([]);
  const { detailsId } = useParams();
  useEffect(() => {
    setDetails(projectsData);
  }, []);
  const singleItemsData = details.filter((data) => data.id === detailsId);
  console.log(singleItemsData[0])
  return (
    <Container className="text-center">
     <h3 className="mt-4 text-center d-inline-block m-auto border-bottom pb-2"><span className="text-secondary">Project Name</span> </h3>
     <p className="fw-bold fs-4 text-center mt-3">{singleItemsData[0]?.title}</p>
     <h3 className="my-3 d-inline-block m-auto border-bottom pb-2"><span className="text-secondary">Technologies:</span></h3>
     <ul className='' style={{
         maxWidth:'300px',
         margin:'0 auto'
     }}>
         {
             singleItemsData[0]?.technologies.map(data => {
                 return (
                     <li>{data}</li>
                 )
             })
         }
     </ul>
     <h3 className="my-4 text-secondary">Details:</h3>
     <ul className='' style={{
         maxWidth:'400px',
         margin:'0 auto'
     }}>
         {
             singleItemsData[0]?.description.map(data => {
                 return (
                     <li>{data}</li>
                 )
             })
         }
     </ul>
     
     <h3 className="my-4 text-secondary">Project Screenshot</h3>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={singleItemsData[0]?.img1} />
        </Card>
        <Card>
          <Card.Img variant="top" src={singleItemsData[0]?.img2} />
        </Card>
        <Card>
          <Card.Img variant="top" src={singleItemsData[0]?.img3} />
        </Card>
      </CardGroup>
    </Container>
  );
};

export default Projects;
