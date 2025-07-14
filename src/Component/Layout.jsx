import Avatar from "./Avatar";
import Contact from "./Contact";
import Education from "./Education";
import HeroTitle from "./HeroTitle";
import Projects from "./Projects";
import Skills from "./Skills";
import "./style.css";
const Layout = () => {
  return (
    <div className="layout ">
      <div className="layout-row one">
        <div className="col-one row-one">
          <HeroTitle />
        </div>
        <div className="col-two row-one">
          <Avatar />
        </div>
      </div>

      <div className="layout-row">
        <div className="col-one">
          <p className="layout-title">Projetcs</p>
          <Projects />
        </div>
        <div className="col-two">
          <p className="layout-title">Skills</p>
          <Skills />
        </div>
      </div>

      <div className="layout-row three">
        <div className="col-one">
          <p className="layout-title">Education</p>
          <Education />
        </div>
        <div className="col-two">
          <p className="layout-title">Contact</p>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Layout;
