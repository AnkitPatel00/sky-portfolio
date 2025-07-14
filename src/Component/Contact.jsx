import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="contact">
      <p>
        <MdEmail /> <span>ankitpatel.web@gmail.com</span>
      </p>
      <p>
        <FaLinkedin /> <span>linkedin.com/in/ankitpatel001</span>
      </p>
      <p>
        <FaSquareGithub />
        <span>github.com/AnkitPatel00</span>
      </p>
    </div>
  );
};

export default Contact;
