import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "./style.css";
const Header = () => {
  return (
    <nav className="navbar">
      <div className="header-title">
        <h1>Ankit Patel</h1>
      </div>
      <ul className="header-link">
        <li style={{ fontSize: "1rem" }}>
          <FaPhoneSquareAlt />: 8306390568
        </li>
        <li style={{ fontSize: "1rem" }}>
          <FaLocationDot />
          Gujarat,India
        </li>
      </ul>
    </nav>
  );
};

export default Header;
