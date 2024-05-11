import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Stepper } from "react-form-stepper";
import Page1 from "./Page1";
import Page2 from "./Page2";

function Form() {
  const [step, setStep] = useState(1);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setStep(step + 1);
    setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
    setActiveStep(activeStep - 1);
  };

  const [dataPage1, setDataPage1] = useState({})

  const handleDataPage1 = (data) => {
    setDataPage1(data)
    console.log('data', data)
  }

  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return (
          <>
            <Page1 handleNext={handleNext} handleBack={handlePrev} handleData={handleDataPage1} page1Data={dataPage1} />
          </>
        );
      case 2:
        return (
          <>
            <Page2 handleNext={handleNext} handleBack={handlePrev} />
          </>
        );
      case 3:
        return (
          <>
            <Page1 handleNext={handleNext} handleBack={handlePrev} />
          </>
        );
      default:
        return <page1 />;
    }
  };
  return (
    <div>
      <Container className="d-flex justify-content-center">
        <div
          style={{
            boxShadow: " 0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
            padding: "2rem",
          }}
          className={step === 4 ? "background-image-calculate" : ""}
        >
          <Stepper
            steps={[
              { title: "Step 1" },
              { title: "Step 2" },
              { title: "Step 3" },
              { title: "Step 4" },
            ]}
            activeStep={activeStep}
          />
          {renderStepContent(step)}
        </div>
      </Container>{" "}
    </div>
  );
}

export default Form;
