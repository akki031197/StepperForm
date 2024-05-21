import { Accordion, Form, Row, Col, FormCheck } from "react-bootstrap";
import "./Page1.css";
function Page3() {
  return (
    <div>
      {" "}
      <div>
        <Accordion defaultActiveKey="0" className="border-0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="bg-secondary text-dark fw-bold border-0">
              Investment, Portfolio and Financial plan Profiler
            </Accordion.Header>
            <Accordion.Body className="border-0">
              <Form>
                <Row className="align-items-center mb-3">
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
      </div>
    </div>
  );
}

export default Page3;
