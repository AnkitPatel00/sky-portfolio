import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiBootstrap,
  SiExpress,
  SiJsonwebtokens,
  SiCss3,
  SiGithub,
  SiPostman
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
   <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  <Col xs={4} md={2} className="tech-icons">
    <DiJavascript1 /> {/* JavaScript */}
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <DiReact /> {/* React.js */}
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <DiNodejs /> {/* Node.js */}
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiExpress /> {/* Express.js */}
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <DiMongodb /> {/* MongoDB */}
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiJsonwebtokens /> {/* JWT Authentication */}
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiCss3 /> {/* CSS */}
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiBootstrap /> {/* Bootstrap */}
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <DiGit /> {/* Git */}
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiGithub /> {/* GitHub */}
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiPostman /> {/* Postman (API testing) */}
  </Col>
</Row>

  );
}

export default Techstack;
