import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import anvayaCRM from "../../assets/Projects/anvayaCRM.png";
import clothStore from "../../assets/Projects/ClothStore.png";
import workasana from "../../assets/Projects/workasana.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workasana}
              isBlog={false}
              title="Workasana App"
              description="A comprehensive project management and team collaboration tool featuring robust task management, team assignment, and performance tracking. Securely built with JWT authentication for protected routes and user data."
              ghLink="https://github.com/AnkitPatel00/moon-W-A-fe"
              demoLink="https://workasanafe.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anvayaCRM}
              isBlog={false}
              title="Anvaya CRM App"
              description="A dynamic CRM dashboard for efficient agent and sales data management, offering real-time updates and full CRUD operations. Developed using React, Node.js, and Express for a seamless user experience."
              ghLink="https://github.com/AnkitPatel00/corp-mj-pr-two-fe"
              demoLink="https://anvayacrm.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clothStore}
              isBlog={false}
              title="E-Commerce ClothStore App "
              description="A fully responsive online clothing store enabling users to browse, add to cart, and checkout with ease. Built with React and Node.js, featuring REST API integration and secure JWT authentication."
              ghLink="https://github.com/AnkitPatel00/Rolex-Mj-Pr-Fr"
              demoLink="https://clothstoreapp.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
