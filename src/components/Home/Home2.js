import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/anusha.jpg";


 // ✅ Your personal image here
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ textAlign: "justify" }}>
              I'm a results-driven MCA graduate with a passion for tech innovation and creative problem-solving.
              My experience spans across IT consulting, data analytics, and full-stack development.
              I’ve built AI-powered advertising platforms and tourism management systems using technologies like React, PHP, and MongoDB.
              I'm especially interested in combining backend logic with engaging frontend design to create seamless user experiences.
              <br />
              <br />
              I am fluent in technologies like{" "}
              <b className="purple">JavaScript, C++, PHP, Python</b> and have hands-on experience in frameworks such as{" "}
              <b className="purple">React.js, Node.js, and Express.js</b>.
              <br />
              <br />
              I’m currently exploring areas like{" "}
              <b className="purple">AI integration in web applications</b> and have worked on automation of ad video generation using AI.
              <br />
              <br />
              I enjoy balancing my logical thinking with creativity – whether it’s working on UI design in Figma or developing intelligent backend systems.
              My passion also extends into entrepreneurship and project-based learning.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-circle" alt="avatar" />
              {/* Added rounded-circle for circular image styling */}
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AnushaGowda13"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anusha-gowda-320129311/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/anusha_gowda_g?igsh=MTZlajFhYmkxMXdqNA=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
