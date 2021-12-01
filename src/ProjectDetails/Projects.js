import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
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

     <div className="d-flex justify-content-center mt-5">
            <a className="text-decoration-none mt-3 me-3 flex-wrap rounded px-4 fs-5 bg-dark text-light" href={singleItemsData[0]?.github} target="_blank" rel="noopener noreferrer">
              {" "}
              Source Code
            </a>
            <a className="text-decoration-none mt-3 rounded px-4 fs-5 bg-dark text-light" href={singleItemsData[0]?.site} target="_blank" rel="noopener noreferrer">
              {" "}
              Live Site
            </a>
            </div>

     
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
      
      <Button className="bg-dark border-0 rounded my-5"><Link className="text-light text-decoration-none" to="/">Back To Home</Link></Button>
    </Container>
  );
};

export default Projects;
