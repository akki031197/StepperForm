import { useState, useEffect } from "react";
import { Accordion, Form, Row, Col, Button } from "react-bootstrap";

function Page4({ handleNext, handleBack, handleData, page4Data }) {
  const [page4DataToSend, setPage4DataToSend] = useState(page4Data);
  const [nameOfClient, setNameOfClient] = useState(
    page4Data?.nameOfClient || ""
  );
  const [address, setAddress] = useState(page4Data?.address || "");

  useEffect(() => {
    const accordionData = {
      nameOfClient: nameOfClient,
      address: address,
    };
    setPage4DataToSend(accordionData);
  }, [nameOfClient, address]);
  const handlePreviousButton = () => {
    handleBack();
    handleData(page4DataToSend);
  };

  const handleNextButton = () => {
    handleNext('Submit');
    handleData(page4DataToSend);
  };

  const handleChangeNameOfClient = () => {};
  const handleChangeAddress = () => {};

  return (
    <div>
      {" "}
      <Accordion defaultActiveKey="0" className="border-0">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="bg-secondary text-dark fw-bold border-0">
            SUBJECT: COMPLAINT REDRESSAL SYSTEM AND PROCESS - DETAILS
          </Accordion.Header>
          <Accordion.Body className="border-0">
            <Form>
              <Row className="align-items-center mb-3">
                <p className="heading  mb-3">Dear Sir / Madam,</p>
                <Col>
                  <p className="heading  mb-3">
                    Below are the details of the Complaint Redressal System and
                    Process for your reference:
                  </p>
                  <p className="heading  mb-3">
                    The registered email id with SEBI and SCORES for all
                    complaints is mimi@sinhasi.com.
                  </p>
                  <p className="heading  mb-3">
                    1. For all complaints you would like to make on any issues
                    please email mimi@sinhasi.com
                  </p>
                  <p className="heading mb-3">
                    2. Complaints can be registered with Sebi online on the
                    following site: http://scores.gov.in. SEBI Complaints
                    Redressal System is called SCORES. It is recommended by Sebi
                    in the event of such complaint you should first approach the
                    concerned company/ intermediary against whom you have a
                    complaint. However, if you may not be satisfied with their
                    response, you should know whom you should turn to, to get
                    your complaint redressed. SEBI takes up complaints related
                    to issue and transfer of securities and non-payment of
                    dividend with listed companies. In addition, SEBI also takes
                    up complaints against the various intermediaries registered
                    with it and related issues. SCORES facilitates you to lodge
                    your complaint online with SEBI and subsequently view its
                    status.
                  </p>
                  <p className="heading mb-3">
                    Thanking you <br />
                    Mimi Partha Sarathy <br />
                    Managing Director
                  </p>

                  <p className="heading mb-3">
                    <strong>Declaration from Client</strong>: I have read the
                    above details carefully and understood all the details and
                    content as mentioned. A copy of this letter has also been
                    handed over to me
                  </p>
                </Col>
              </Row>
              <Row className="align-items-center mb-3">
                <Col md={4}>
                  <Form.Group controlId="inputCity" className="mb-0">
                    <Form.Label className="fw-bold">Name of Client</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Name of Client"
                      value={nameOfClient}
                      onChange={handleChangeNameOfClient}
                    />
                  </Form.Group>
                </Col>

                <Col md={8}>
                  <Form.Group controlId="inputCity" className="mb-0">
                    <Form.Label className="fw-bold">Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Address"
                      value={address}
                      onChange={handleChangeAddress}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Accordion.Body>
        </Accordion.Item>{" "}
      </Accordion>
      <div className="d-flex justify-content-between mt-4">
        <Button variant="dark" onClick={handlePreviousButton}>
          Previous
        </Button>
        <Button variant="dark" onClick={handleNextButton}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Page4;
