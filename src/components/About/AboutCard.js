import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    Hi Everyone, I am <span className="purple">Ankit Patel</span> 
    from <span className="purple">Valsad, Gujarat, India.</span>
    <br />
    I am a passionate <b className="purple">Full Stack Developer</b> 
    specializing in the <b className="purple">MERN Stack</b>.
    <br />
    I have completed my <b className="purple">B.Sc. in Computer Science</b> 
    from DUIAS (Dolat Usha Institute of Applied Sciences), 
    graduating in 2017.
    <br />
    <br />
    I love building scalable web applications and have worked on 
    projects like <b className="purple">Workasana (project management tool)</b>, 
    <b className="purple"> CRM App</b>, and 
    <b className="purple"> ClothStore (E-Commerce app)</b>.
    <br />
    <br />
    Apart from coding, here are a few activities I enjoy:
  </p>
  <ul>
    <li className="about-activity">
      <ImPointRight /> Exploring new web technologies
    </li>
    <li className="about-activity">
      <ImPointRight /> Working on side projects
    </li>
    <li className="about-activity">
      <ImPointRight /> Learning about AI Agent & Chatbot
    </li>
  </ul>

  <p style={{ color:"#f2ff00ff" }}>
    "Code to create impactful solutions that help people."{" "}
  </p>
  <footer className="blockquote-footer">Ankit Patel</footer>
</blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
