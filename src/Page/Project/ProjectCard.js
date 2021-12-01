import Aos from "aos";
import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Project.css";
const ProjectCard = (props) => {
  const { img, title, github, site, details, animation, id } = props.data;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="mx-3 py-3"

      data-aos={animation}
    >
        <Card className={`${props.className} card-active border p-2 `}>
          <div className=' d-flex flex-column justify-content-between'
                style={{
                  minHeight: "530px",
                }}
          >
          <div>
          <Card.Img
            style={{ height: "200px", width: "100%" }}
            variant="top"
            src={img}
          />
          <Card.Body className="text-center mt-2">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <div className="d-flex justify-content-between mt-5">
              <a
                className=" mt-3 rounded px-4 text-dark"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Source Code
              </a>
              <a
                className="mt-3 rounded px-4 text-dark"
                href={site}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Live Site
              </a>
            </div>
          </Card.Body>
          </div>
          <div className="">
          <Link
              className="d-inline-block mx-auto w-100 mt-3"
              to={`/projectDetails/${id}`}
            >
              <Button className="w-100 bg-dark border-0 my-2">Details</Button>
            </Link>
          </div>
          </div>
        </Card>
      
    </div>
  );
};

export default ProjectCard;
