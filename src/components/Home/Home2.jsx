import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineYoutube, AiFillMail } from "react-icons/ai";
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
            <p className="home-about-body">
              Hi, I’m <b className="purple">Ankit Patel</b>, a passionate{" "}
              <b className="purple">Full Stack Developer</b> specialized in{" "}
              <b className="purple">MERN Stack</b> development.
              <br />
              <br />I enjoy building{" "}
              <i>
                <b className="purple">scalable web applications {"  "}</b>
              </i>
              and creating tools that solve real-world problems. My recent
              projects include:
              <br />
              <br />– <b className="purple">Workasana</b> – A project management
              & team collaboration app – <b className="purple">CRM Dashboard</b>{" "}
              – Manage agents and sales data with CRUD & filters –{" "}
              <b className="purple">ClothStore</b> – A full-fledged E-Commerce
              app
              <br />
              <br />
              I’m highly skilled with{" "}
              <i>
                <b className="purple">
                  JavaScript, React.js, Node.js, Express, and MongoDB
                </b>
              </i>{" "}
              along with modern tools like{" "}
              <i>
                <b className="purple">
                  Next.js, REST APIs, and JWT Authentication
                </b>
                .
              </i>
              <br />
              <br />
              My goal is to keep improving my craft, contribute to meaningful
              products, and explore advanced areas in{" "}
              <b className="purple">web technologies</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <p>
              <AiFillMail />{" "}
              <span className="purple">ankitpatel.web@gmail.com</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AnkitPatel00"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@AnkitPatelDevloper"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ankitpatel001/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
