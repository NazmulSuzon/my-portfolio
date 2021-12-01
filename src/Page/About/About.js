import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../image/suzon.jpg";
import Aos from "aos";

const About = () => {
    useEffect(() => {
		Aos.init({ duration: 1000 });
	}, [])
  return (
    <Container name="about" className="my-5" data-aos="fade-up"
    data-aos-offset="100">
      <h3 className="text-center pt-5 mt-5">About Me</h3>
      <Row xs={2} md={4} lg={6} className=" py-5 d-flex justify-content-around">
        <Col data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <img className="img-fluid" src={image} alt="" />
        </Col>
        <Col className="my-auto" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
            <p className="fw-bold fs-5">Hello, I am Nazmul Hasan. I am a full stack web developer. I have Serious passion for making Interactive Websites.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
