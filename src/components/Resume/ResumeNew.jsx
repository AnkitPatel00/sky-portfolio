import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import resume from "../../assets/AnkitPatelResume.pdf";

// Download Icon
const DownloadIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: "20px", height: "20px", marginRight: "8px" }}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

const ResumeNew = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    setWidth(window.innerWidth);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Full viewport height minus padding
  const pdfHeight = width > 786 ? "95vh" : "85vh";

  return (
    <Container fluid className="py-5" style={{ backgroundColor: "#1a1a1a" }}>
      {/* Top Download Button */}
      <Row className="justify-content-center my-4">
        <Col xs="auto">
          <Button
            href={resume}
            download="AnkitPatelResume.pdf"
            variant="primary"
            className="d-flex align-items-center shadow"
            style={{ minWidth: "200px" }}
          >
            <DownloadIcon />
            Download CV
          </Button>
        </Col>
      </Row>

      {/* PDF Preview */}
      <Row className="justify-content-center mb-4">
        <Col xs={12} md={10} lg={10}>
          <Card
            className="shadow-lg border-0 rounded"
            style={{
              minHeight: pdfHeight,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <embed
              src={resume}
              type="application/pdf"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "0.5rem",
              }}
            />
          </Card>
        </Col>
      </Row>

      {/* Bottom Download Button */}
      <Row className="justify-content-center">
        <Col xs="auto">
          <Button
            href={resume}
            download="AnkitPatelResume.pdf"
            variant="primary"
            className="d-flex align-items-center shadow"
            style={{ minWidth: "200px" }}
          >
            <DownloadIcon />
            Download CV
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ResumeNew;
