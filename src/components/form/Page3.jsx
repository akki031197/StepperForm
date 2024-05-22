import { Accordion, Form, Row, Col, Button } from "react-bootstrap";
import "./Page1.css";
function Page3({handleNext}) {
      const handleChangeButton = () => {
            handleNext();
            //     handleData(page1DataToSend);
          };
  return (
    <div>
      {" "}
      <div>
        <Accordion defaultActiveKey="0" className="border-0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="bg-secondary text-dark fw-bold border-0">
              SUBJECT: EMAIL ID & CONTACT DETAILS FOR SINHASI COMMUNICATIONS
            </Accordion.Header>
            <Accordion.Body className="border-0">
              <Form>
                <Row className="align-items-center mb-3">
                  <p className="heading  mb-3">
                    I/ we do hereby declare that M/S Sinhasi Consultants Pvt Ltd
                    can use the following Email ID & Contact details for all
                    there communication regarding my Portfolio Updates &
                    Financial Plan Updates & other Communications as and when
                    required.
                  </p>
                  <Col md={6}>
                    <Form.Group controlId="inputCity" className="mb-0">
                      <Form.Label className="fw-bold">
                        Primary Email ID
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=" Primary Email ID"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="inputCity" className="mb-0">
                      <Form.Label className="fw-bold">Contact No</Form.Label>
                      <Form.Control type="text" placeholder="Contact No" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="align-items-center mb-3">
                  <Col md={6}>
                    <Form.Group controlId="inputCity" className="mb-0">
                      <Form.Label className="fw-bold">
                        Secondary Email ID/ IDs
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Secondary Email ID/ IDs"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="inputCity" className="mb-0">
                      <Form.Label className="fw-bold">Contact No</Form.Label>
                      <Form.Control type="text" placeholder="Contact No" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="align-items-center mb-3">
                  <Col md={4}>
                    <Form.Group controlId="inputCity" className="mb-0">
                      <Form.Label className="fw-bold">
                        1st holder name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=" 1st holder name"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={8}>
                    <Form.Group controlId="inputCity" className="mb-0">
                      <Form.Label className="fw-bold">Address</Form.Label>
                      <Form.Control type="text" placeholder="Address" />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Accordion.Body>
          </Accordion.Item>{" "}
        </Accordion>
        <div className="text-center mt-4">
          <Button variant="dark" onClick={handleChangeButton}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page3;
