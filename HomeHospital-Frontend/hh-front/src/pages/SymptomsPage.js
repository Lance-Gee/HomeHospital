import React from "react";
import SymptomsForm from "../components/SymptomsForm.js";
import Navigation from "../components/Navigation.js";
import PatientInfo from "../components/PatientInfo.js";
import BreadcrumbNav from "../components/BreadcrumbNav.js";
import ProgressNav from "../components/ProgressNav.js";
import AlertModal from "../components/AlertModal.js";
import logo from "../images/heartbeat.png";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";

function SymptomsPage() {
  return (
    <>
      <Navigation />
      <Container className="main-container">
        <Row>
          <Col>
            <BreadcrumbNav />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="progress-div">
              <ProgressNav />
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <div className="symptoms-div">
              <SymptomsForm />
            </div>
          </Col>
          <Col>
            <Row>
              <Col>
                <img
                  src={logo}
                  alt="heartbeat-logo"
                  className="heartbeat-logo"
                />
              </Col>
            </Row>
            <PatientInfo />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SymptomsPage;
