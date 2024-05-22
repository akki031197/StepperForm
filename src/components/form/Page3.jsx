import { useState, useEffect } from "react";
import { Accordion, Form, Row, Col, Button } from "react-bootstrap";
import "./Page1.css";
function Page3({ handleNext, handleBack, handleData, page3Data }) {
  const [page3DataToSend, setPage3DataToSend] = useState(page3Data);
  const [primaryEmailId, setPrimaryEmailId] = useState(
    page3Data.primaryEmailId || ""
  );
  const [primaryContactNumber, setPrimaryContactNumber] = useState(
    page3Data.primaryContactNumber || ""
  );
  const [secondaryEmailId, setSecondaryEmailId] = useState(
    page3Data.secondaryEmailId || ""
  );
  const [secondaryContactNumber, setSecondaryContactNumber] = useState(
    page3Data.secondaryContactNumber || ""
  );
  const [firstHolderName, setFirstHolderName] = useState(
    page3Data.firstHolderName || ""
  );
  const [address, setAddress] = useState(page3Data.address || "");

  useEffect(() => {
    const accordionData = {
      primaryEmailId: primaryEmailId,
      primaryContactNumber: primaryContactNumber,
      secondaryEmailId: secondaryEmailId,
      secondaryContactNumber: secondaryContactNumber,
      firstHolderName: firstHolderName,
      address: address,
    };
    setPage3DataToSend(accordionData);
  }, [
    primaryEmailId,
    primaryContactNumber,
    secondaryEmailId,
    secondaryContactNumber,
    firstHolderName,
    address,
  ]);
  const handlePreviousButton = () => {
    handleBack();
    handleData(page3DataToSend);
  };

  const handleNextButton = () => {
    handleNext();
    handleData(page3DataToSend);
  };

  const handleChangePrimaryEmailId = (event) => {
    setPrimaryEmailId(event.target.value);
  };

  const handleChangePrimaryContactNumber = (event) => {
    setPrimaryContactNumber(event.target.value);
  };

  const handleChangeSecondaryEmailId = (event) => {
    setSecondaryEmailId(event.target.value);
  };

  const handleChangeSecondaryContactNumber = (event) => {
    setSecondaryContactNumber(event.target.value);
  };

  const handleChangeFirstHolderName = (event) => {
    setFirstHolderName(event.target.value);
  };

  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
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
                        value={primaryEmailId}
                        onChange={handleChangePrimaryEmailId}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="inputCity" className="mb-0">
                      <Form.Label className="fw-bold">Contact No</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Contact No"
                        value={primaryContactNumber}
                        onChange={handleChangePrimaryContactNumber}
                      />
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
                        value={secondaryEmailId}
                        onChange={handleChangeSecondaryEmailId}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="inputCity" className="mb-0">
                      <Form.Label className="fw-bold">Contact No</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Contact No"
                        value={secondaryContactNumber}
                        onChange={handleChangeSecondaryContactNumber}
                      />
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
                        value={firstHolderName}
                        onChange={handleChangeFirstHolderName}
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
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page3;
