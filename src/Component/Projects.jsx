import React from "react";
import WAimage from "../assets/Workasana App.png";
import ECom from "../assets/E-Commerce App.png";
import CRMapp from "../assets/CRM App.png";

const projects = [
  {
    title: "Workasana App",
    description:
      "A comprehensive project management and team collaboration tool featuring robust task management, team assignment, and performance tracking. Securely built with JWT authentication for protected routes and user data.",
    image: WAimage,
    tech: ["React", "Node.js", "MongoDB", "Redux", "JWT"],
    demo: "https://workasanafe.vercel.app/",
    github: "https://github.com/AnkitPatel00/moon-W-A-fe",
  },
  {
    title: "CRM App",
    description:
      "A dynamic CRM dashboard for efficient agent and sales data management, offering real-time updates and full CRUD operations. Developed using React, Node.js, and Express for a seamless user experience.",
    image: CRMapp,
    tech: ["React", "Node.js", "MongoDB", "Redux", "Bootstrap"],
    demo: "https://anvayacrm.vercel.app/",
    github: "https://github.com/AnkitPatel00/corp-mj-pr-two-fe",
  },
  {
    title: "E-Commerce App",
    description:
      "A fully responsive online clothing store enabling users to browse, add to cart, and checkout with ease. Built with React and Node.js, featuring REST API integration and secure JWT authentication.",
    image: ECom,
    tech: ["React", "Node.js", "MongoDB", "Redux", "JWT"],
    demo: "https://clothstoreapp.vercel.app/",
    github: "https://github.com/AnkitPatel00/Rolex-Mj-Pr-Fr",
  },
];

const Projects = () => (
  <section id="projects" className="py-5 ">
    <div className="container py-5">
      <div className="mb-5">
        <h2 className="display-4 fw-bold ">Projects</h2>
        <p className="fs-5 text-muted-light">
          Building solutions that solve real-world problems
        </p>
        <div
          className="bg-success"
          style={{
            height: "4px",
            width: "80px",
            marginTop: "2rem",
            marginBottom: "3rem",
          }}
        ></div>
      </div>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card bg-dark  h-100 border-0 shadow-sm project-hover">
              <div className="position-relative">
                <img
                  alt={project.title}
                  src={project.image}
                  className="card-img-top"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="card-body p-4">
                <h4 className="card-title fw-bold text-light-new">
                  {project.title}
                </h4>
                <p className="card-text text-muted-light">
                  {project.description}
                </p>
                <div className="mb-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="badge bg-black  text-light-new me-1 mb-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="d-flex gap-2">
                  <a href={project.demo} className="btn btn-dark">
                    <i className="bi bi-eye me-1"></i> Demo
                  </a>
                  <a href={project.github} className="btn btn-dark">
                    <i className="bi bi-code-slash me-1"></i> Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
