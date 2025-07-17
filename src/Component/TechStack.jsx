import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiTestinglibrary,
  SiCodemagic,
  SiSpeedtest,
} from "react-icons/si";

import { FaCode } from "react-icons/fa"; // 🔁 used instead of SiVisualstudiocode

const skills = [
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Mongoose", icon: <SiMongoose /> },
  { name: "JWT", icon: <SiJsonwebtokens /> },
  // { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  // { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "VS Code", icon: <FaCode /> },
  // { name: "Testing", icon: <SiTestinglibrary /> },
  // { name: "CI/CD", icon: <SiCodemagic /> },
  { name: "Performance", icon: <SiSpeedtest /> },
];

const TechStack = () => (
  <section id="skills" className="py-5 bg-dark">
    <div className="container py-5">
      <div className="mb-5">
        <h2 className="display-4 fw-bold text-light">Tech Stack</h2>
        <p className="fs-5 text-muted-light">
          Technologies and tools I work with
        </p>
        <div
          className="bg-success"
          style={{ height: "4px", width: "80px", marginTop: "2rem" }}
        />
      </div>

      <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-4">
        {skills.map((skill, index) => (
          <div
            className="col text-center d-flex align-items-center gap-3"
            key={index}
          >
            <span className="fs-1 text-light">{skill.icon}</span>
            <span className="fs-6 text-light-new">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
