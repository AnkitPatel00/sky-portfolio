const Header = () => {
  return (
    <header>
      <nav
        className="navbar bg-transparent border-bottom border-body fixed-top"
        data-bs-theme="dark"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="me-2 text-success fs-6">SDE</span>
            <span className="fw-bold text-light-new">Ankit Patel</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
