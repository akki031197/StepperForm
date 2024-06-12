import { useState } from "react";
import { Container } from "react-bootstrap";
import { Stepper } from "react-form-stepper";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

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

  const [dataPage1, setDataPage1] = useState({});
  const [dataPage2, setDataPage2] = useState({});
  const [dataPage3, setDataPage3] = useState({});
  const [dataPage4, setDataPage4] = useState({});

  const handleDataPage1 = (data) => {
    setDataPage1(data);
  };

  const handleDataPage2 = (data) => {
    setDataPage2(data);
  };

  const handleDataPage3 = (data) => {
    setDataPage3(data);
  };

  const handleDataPage4 = (data) => {
    setDataPage4(data);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return (
          <>
            <Page1
              handleNext={handleNext}
              handleBack={handlePrev}
              handleData={handleDataPage1}
              page1Data={dataPage1}
            />
          </>
        );
      case 2:
        return (
          <>
            <Page2
              handleNext={handleNext}
              handleBack={handlePrev}
              handleData={handleDataPage2}
              page2Data={dataPage2}
            />
          </>
        );
      case 3:
        return (
          <>
            <Page3
              handleNext={handleNext}
              handleBack={handlePrev}
              handleData={handleDataPage3}
              page3Data={dataPage3}
            />
          </>
        );

      case 4:
        return (
          <>
            <Page4
              handleNext={handleNext}
              handleBack={handlePrev}
              handleData={handleDataPage4}
              page4Data={dataPage4}
            />
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
            width: "90vw"
          }}
          className={step === 4 ? "background-image-calculate" : ""}
        >
          <Stepper
            steps={[
              { label: "Step 1" },
              { label: "Step 2" },
              { label: "Step 3" },
              { label: "Step 4" },
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
