import React from "react";
import "./Footer.css";
import { Alert } from "react-bootstrap";

function Footer() {
  return (
    <React.Fragment>
      {/* <Container fluid>
        <Button block theme="secondary">
          Footerrrr
        </Button>
      </Container> */}
      {/* <Alert theme="light"></Alert> */}
      <Alert theme="light" className="f-body">
        © 2019 SohoBlinds NZ | Website by Nathan Vo Design
      </Alert>
    </React.Fragment>
  );
}

export default Footer;
