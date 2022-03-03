import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/SymptomForm.css";

import AlertModal from "./AlertModal";
import { render } from "react-dom";

function SymptomsForm() {

  const [additionalInfo, setAdditionalInfo] = useState("");
  const [modalState, setModalState] = useState(false);

  const [symptomsList, setSymptomsList] = useState([
    {
      symptom: "",
      severity: "",
    },
  ]);


  console.log(symptomsList);
  console.log(additionalInfo);

  const handleSymptomsAdd = () => {
    setSymptomsList([
      ...symptomsList,
      {
        symptom: "",
        severity: "",
      },
    ]);
  };

  const handleSymptomsRemove = (index) => {
    const list = [...symptomsList];
    list.splice(index, 1);
    setSymptomsList(list);
  };

  const handleSymptomsChange = (e, index) => {
    const { name, value } = e.target;

    const list = [...symptomsList];
    list[index][name] = value;
    setSymptomsList(list);
  };

  const handleSeverityChange = (e, index) => {
    const { name, value } = e.target;

    const list = [...symptomsList];
    list[index][name] = value;
    setSymptomsList(list);
  };


  const displayAlert = () => {
    console.log("alert displayed!");

    
  };

  const showModal = () => {
    this.setModalState( true );
  }

  const hideModal = () => {
    this.setModalState( false );
  }

  return (
    <>
      <Container className="symptoms-container">
        <Row>
          <div className="title-div">
            <h2>Enter Symtoms</h2>
          </div>
        </Row>
        <Row>
          <div className="details-div">
            Please enter current symptoms along with severity of 1-5
          </div>
        </Row>
        <Row>
          <Col>
            <Form>
              {symptomsList.map((singleSymptom, index) => (
                <div key={index} className="group">
                  <InputGroup className="symptomGroup">
                    <Form.Control
                      type="text"
                      name="symptom"
                      placeholder="Enter Symptom"
                      value={singleSymptom.service}
                      onChange={(e) => handleSymptomsChange(e, index)}
                    />
                    <Form.Select
                      name="severity"
                      onChange={(e) => handleSeverityChange(e, index)}
                    >
                      <option defaultChecked>Severity</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Form.Select>

                    {symptomsList.length > 1 && (
                      <Button
                        className="remove-btn"
                        variant="outline-secondary"
                        onClick={() => handleSymptomsRemove(index)}
                      >
                        <span>x</span>
                      </Button>
                    )}
                  </InputGroup>
                  {symptomsList.length - 1 === index &&
                    symptomsList.length < 5 && (
                      <Button
                        className="add-btn btn-light"
                        onClick={handleSymptomsAdd}
                      >
                        <span>Add Symptom</span>
                      </Button>
                    )}
                </div>
              ))}
              <div className="additional-info">
                <Form.Label>Additional Information</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => setAdditionalInfo(e.target.value)} />
              </div>
              <div>
                <Button className="submit-btn btn-light" onClick={displayAlert}>
                  <span>Submit Symptoms</span>
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SymptomsForm;
