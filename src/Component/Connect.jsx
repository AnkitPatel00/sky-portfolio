const Connect = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container py-5">
        {/* Header */}
        <div className="mb-5">
          <h2 className="display-4 fw-bold">Connect</h2>
          <p className="fs-5 text-muted-light">
            Let's collaborate on something amazing together
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

        {/* Cards */}
        <div className="row g-4">
          {/* Email */}
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm project-card p-4 bg-dark project-hover">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-envelope-fill text-success fs-3 me-3"></i>
                <h3 className="fs-4 mb-0 text-light-new">Email</h3>
              </div>
              <p className="mb-0 text-muted-light">ankitpatel.web@gmail.com</p>
            </div>
          </div>

          {/* GitHub */}
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm project-card p-4 bg-dark project-hover">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-github text-success fs-3 me-3"></i>
                <h3 className="fs-4 mb-0 text-light-new">GitHub</h3>
              </div>
              <p className="mb-0 social-links">
                <a
                  className="text-muted-light "
                  href="github.com/AnkitPatel00"
                  target="_blank"
                >
                  Follow on GitHub
                </a>
              </p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm project-card p-4 bg-dark project-hover">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-linkedin text-success fs-3 me-3"></i>
                <h3 className="fs-4 mb-0 text-light-new">LinkedIn</h3>
              </div>
              <p className="mb-0 social-links">
                <a
                  className="text-muted-light "
                  href="linkedin.com/in/ankitpatel001/"
                  target="_blank"
                >
                  Connect on LinkedIn
                </a>
              </p>
            </div>
          </div>

          {/* Youtube */}
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm project-card p-4 bg-dark project-hover">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-youtube text-success fs-3 me-3"></i>
                <h3 className="fs-4 mb-0 text-light-new">Youtube</h3>
              </div>
              <p className="mb-0 social-links">
                <a
                  className="text-muted-light "
                  href="https://www.youtube.com/@AnkitPatelDevloper"
                  target="_blank"
                >
                  Subscribe on Youtube
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-5 pt-5 text-center">
          <p className="mb-0">© 2025 Ankit Patel • All rights reserved</p>
        </div>

        {/* Scroll to top button */}
        <div className="position-fixed bottom-0 end-0 p-3">
          <a
            href="#home"
            className="btn btn-success rounded-circle p-3"
            style={{
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i className="bi bi-arrow-up"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Connect;
