import ecom from "../assets/E-Commerce App.png";
import crm from "../assets/CRM App.png";
import Workasana from "../assets/Workasana App.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";

const ProjectsArray = [
  {
    title: "E-Commerce App",
    url: "https://clothstoreapp.vercel.app/",
    thumbnail: ecom,
    githubFe: "https://github.com/AnkitPatel00/Rolex-Mj-Pr-Fr",
    githubBe: "https://github.com/AnkitPatel00/Rolex-Mj-Pr-Fr",
  },
  {
    title: "CRM App",
    url: "https://anvayacrm.vercel.app/",
    thumbnail: crm,
    githubFe: "https://github.com/AnkitPatel00/corp-mj-pr-two-fe",
    githubBe: "https://github.com/AnkitPatel00/corp-mj-pr-two-be",
  },
  {
    title: "Workasana App",
    url: "https://workasanafe.vercel.app/",
    thumbnail: Workasana,
    githubFe: "https://github.com/AnkitPatel00/moon-W-A-fe",
    githubBe: "https://github.com/AnkitPatel00/moon-W-A-be",
  },
];
const Projects = () => {
  return (
    <div className="projects">
      {ProjectsArray.map(({ title, thumbnail, url, githubFe, githubBe }) => {
        return (
          <div key={title} className={`project`}>
            <h3>{title}</h3>
            <img src={thumbnail} alt={`${title} image`} />
            <div className={"links"}>
              <a href={url} target="_blank">
                <FaExternalLinkAlt />
              </a>
              <a href={githubFe} target="_blank">
                <RiReactjsLine />
              </a>
              <a href={githubBe} target="_blank">
                <RiNodejsLine />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
