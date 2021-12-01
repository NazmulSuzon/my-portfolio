import Aos from "aos";
import React, { useEffect } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Project.css'
const ProjectCard = (props) => {
  const { img, title, github, site, details,animation, id } = props.data;
  useEffect(() => {
		Aos.init({ duration: 1000 });
	}, [])
  return (
    <div className="mx-3 py-3 " data-aos={animation}>
      <>
        <Card
          className="border-0"
          style={{
            minHeight: "500px",
          }}
        >
          <Card.Img
            style={{ height: "200px", width: "100%" }}
            variant="top"
            src={img}
          />
          <Card.Body className="text-center mt-2">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <div className="d-flex justify-content-between mt-5">
            <a className="text-decoration-none mt-3 rounded px-4 fs-5 bg-danger text-light" href={github} target="_blank" rel="noopener noreferrer">
              {" "}
              Source Code
            </a>
            <a className="text-decoration-none mt-3 rounded px-4 fs-5 bg-danger text-light" href={site} target="_blank" rel="noopener noreferrer">
              {" "}
              Live Site
            </a>
            </div>
            <Link
            className="d-inline-block mx-auto w-100 mt-3"
            to={`/projectDetails/${id}`}
            >
              <Button className="w-100 bg-danger border-0 my-2">
                Details
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </>
    </div>
  );
};

export default ProjectCard;
