const Header = () => {
  return (
    <header>
      <nav
        className="navbar bg-dark navbar-expand-sm border-bottom border-body fixed-top"
        data-bs-theme="dark"
      >
        <div className="container">
          <a className="navbar-brand" href="#home">
            <span className="me-2 text-success fs-6">SDE</span>
            <span className="fw-bold text-light-new">Ankit Patel</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav white-nav-link">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav
        className="navbar bg-dark border-bottom border-body fixed-top"
        data-bs-theme="dark"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="me-2 text-success fs-6">SDE</span>
            <span className="fw-bold text-light-new">Ankit Patel</span>
          </a>
        </div>
      </nav> */}
    </header>
  );
};

export default Header;
