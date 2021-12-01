import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import { Col, FloatingLabel, Form, Row, Button } from "react-bootstrap";
import './Contact.css'
import Aos from "aos";

const Contact = () => {
  useEffect(() => {
		Aos.init({ duration: 1000 });
	}, [])
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n9t733j",
        "template_33119yv",
        e.target,
        "user_A8VE9EsK572vDaX3nAfdU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div name="contact" className="d-flex justify-content-center mt-5" style={{position:'relative',overflow:'hidden'}} data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <Form onSubmit={sendEmail} className="p-5 mt-5 contact-form" style={{ width: "800px" }}>
          <h3 className="text-center mb-5">Contact Me</h3>
        <Row className="mb-3">
          <Col>
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Name" name="name"/>
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Subject</Form.Label>
            <Form.Control type="subject" placeholder="Subject" name="subject" />
          </Form.Group>
        </Row>
        <FloatingLabel controlId="floatingTextarea2" label="Your Message">
          <Form.Control
          name="message"
            as="textarea"
            placeholder="Your Message"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <div className="d-flex justify-content-center">
          <Button
            className="primary-color border-0 mt-3"
            variant="dark"
            type="submit"
          >
            Send message
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Contact;
