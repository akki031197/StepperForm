import React from "react";
import { Accordion, Form, Row, Col, FormCheck, Button } from "react-bootstrap";
import "./Page1.css";

function Page2({ handleNext, handleData }) {
  const handleChangeButton = () => {
    handleNext();
    //     handleData(page1DataToSend);
  };
  return (
    <div>
      <Accordion defaultActiveKey="0" className="border-0">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="bg-secondary text-dark fw-bold border-0">
            SUBJECT : LETTER OF ENGAGEMENT - ADVISORY OR DISTRIBUTION SERVICES
          </Accordion.Header>
          <Accordion.Body className="border-0">
            <Form>
              <Row className="align-items-center">
                <p className="heading  mb-3">
                  I/we do hereby engage M/S Sinhasi Consultants Pvt Ltd for the
                  following service.
                </p>
                <Form.Group
                  controlId="inputLetterOfEngagement"
                  className="mb-0"
                >
                  <Row>
                    <Col>
                      <Form.Check
                        inline
                        id="inline-radio-1"
                        name="group1"
                        type="checkbox"
                        value="Limited" // Store the selected option value
                        // Set checked state based on selectedOption
                      >
                        <FormCheck.Input type="checkbox" />
                        <FormCheck.Label>
                          ONLY
                          <span className="fw-bold pl-1">
                            SINHASI - ADVISORY DIVISION
                          </span>{" "}
                          for planning and advisory services across various
                          asset classes and investments, holistic financial
                          planning and insurance planning.
                        </FormCheck.Label>
                      </Form.Check>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Check
                        inline
                        id="inline-radio-2"
                        name="group1"
                        type="checkbox"
                        value="Moderate" // Store the selected option value
                        // Set checked state based on selectedOption
                      >
                        <FormCheck.Input type="checkbox" />
                        <FormCheck.Label>
                          ONLY
                          <span className="fw-bold pl-1">
                            SINHASI - DISTRIBUTION DIVISION
                          </span>{" "}
                          for distribution services for various investment
                          products across various asset classes of health and
                          general insurance, life insurance, investments in all
                          mutual funds, shares and securities, PMS schemes,
                          bonds, FDs, structured proucts, PPF, PO Schemes,
                          Private Equity and Private Equity Funds , Real Estate
                          Funds etc. and other investment products and services.
                        </FormCheck.Label>
                      </Form.Check>
                    </Col>
                    <p className="footnote mt-2">
                      A copy of the table of commissions / brokerages received
                      by M/S Sinhasi Consultants Pvt Ltd for various products
                      distributed has been received by me / us and the same is
                      noted and accepted.
                    </p>
                  </Row>
                </Form.Group>
              </Row>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="text-center mt-4">
        <Button variant="dark" onClick={handleChangeButton}>
          Continue
        </Button>
      </div>
    </div>
  );
}

export default Page2;