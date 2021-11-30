import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  const { img, title, github, site, details } = props.data;

  return (
    <>
      <Col>
        <Card
          className="border-0"
          style={{
            minHeight: "500px",
          }}
        >
          <Card.Img
            style={{ height: "200px", width: "400px" }}
            variant="top"
            src={img}
          />
          <Card.Body className="text-center mt-2">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <div className="d-flex justify-content-between">
            <a className="text-decoration-none mt-3 rounded px-4 fs-5 bg-danger text-light" href={github} target="_blank" rel="noopener noreferrer">
              {" "}
              Source Code
            </a>
            <a className="text-decoration-none mt-3 rounded px-4 fs-5 bg-danger text-light" href={site} target="_blank" rel="noopener noreferrer">
              {" "}
              Live Site
            </a>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ProjectCard;
