const Hero = () => {
  return (
    <section id="home" className="py-5">
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-lg-8">
            <h1 className="display-2 fw-bold mb-2">Ankit Patel</h1>
            <p className="fs-3 text-white-50 mb-3">Full Stack Developer</p>
            <div
              className="bg-success mb-4"
              style={{ height: "4px", width: "80px" }}
            ></div>
            <div className="mb-4">
              <p className="lead mb-2">
                I’m a full-stack developer who loves building with JavaScript,
                React, Node.js, and MongoDB.
              </p>
              <p className="lead mb-4">
                Whether it’s the frontend interface or backend logic, I enjoy
                creating fast, functional, and user-focused solutions that solve
                real-world problems.
              </p>
            </div>
            <div className="d-flex gap-3">
              <a href="#contact" className="btn btn-success px-4 py-2">
                Contact Me
              </a>

              <a
                href="https://drive.google.com/file/d/1no99QJjItXZJXL6Docjv0-SvyUPgMRx9/view"
                className="btn btn-outline-secondary px-4 py-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
