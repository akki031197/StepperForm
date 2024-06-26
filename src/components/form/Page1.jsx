import React, { useState, useRef, useEffect } from "react";
import {
  Accordion,
  Button,
  Form,
  FormCheck,
  Container,
  Table,
  Row,
  Col,
} from "react-bootstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Page1.css";
import { SegmentedInput } from "./SegmentedInput";

function Page1({ handleNext, handleData, page1Data }) {
  const [page1DataToSend, setPage1DataToSend] = useState(page1Data);

  const handleChangeButton = () => {
    handleNext();
    handleData(page1DataToSend);
  };

  const [dob, setDob] = useState(page1Data.dob || "");
  const [firstName, setFirstName] = useState(page1Data.firstName || "");
  const [middleName, setMiddleName] = useState(page1Data.middleName || "");
  const [lastName, setLastName] = useState(page1Data.lastName || "");
  const [nationality, setNationality] = useState(page1Data.nationality || "");
  const [city, setCity] = useState(page1Data.city || "");
  const [accountNumber, setAccountNumber] = useState(
    page1Data.accountNumber || ""
  );
  const [selectedNamePrefix, setSelectedNamePrefix] = useState(
    page1Data.selectedNamePrefix || ""
  );

  const [employmentStatus, setEmploymentStatus] = useState(
    page1Data.employmentStatus || []
  );
  const [netWorth, setNetWorth] = useState(page1Data.netWorth || []);
  const [other, setOther] = useState(page1Data.other || []);
  const [otherCity, setOtherCity] = useState(page1Data.otherCity || "");

  const [age, setAge] = useState(page1Data.age || []);
  const [timeHorizonForFinancialPlan, settimeHorizonForFinancialPlan] =
    useState(page1Data.timeHorizonForFinancialPlan || []);
  const [liquidNetWorth, setLiquidNetWorth] = useState(
    page1Data.liquidNetWorth || []
  );
  const [timeHorizonForPortfolio, setTimeHorizonForPortfolio] = useState(
    page1Data.timeHorizonForPortfolio || []
  );
  const [requiredOutflowBegin, setRequiredOutflowBegin] = useState(
    page1Data.requiredOutflowBegin || []
  );
  const [investmentObjectives, setInvestmentObjectives] = useState(
    page1Data.investmentObjectives || []
  );
  const [abilityTotolarateRisk, setAbilityTotolarateRisk] = useState(
    page1Data.abilityTotolarateRisk || []
  );

  const [investmentExperience, setInvestmentExperience] = useState(
    page1Data.investmentExperience || ""
  );

  useEffect(() => {
    const accordian_data = {
      dob: dob,
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      nationality: nationality,
      city: city,
      accountNumber: accountNumber,
      selectedNamePrefix: selectedNamePrefix,
      employmentStatus: employmentStatus,
      other: other,
      otherCity: otherCity,
      netWorth: netWorth,
      age: age,
      timeHorizonForFinancialPlan: timeHorizonForFinancialPlan,
      liquidNetWorth: liquidNetWorth,
      timeHorizonForPortfolio: timeHorizonForPortfolio,
      requiredOutflowBegin: requiredOutflowBegin,
      investmentObjectives: investmentObjectives,
      abilityTotolarateRisk: abilityTotolarateRisk,
      investmentExperience: investmentExperience,
    };
    setPage1DataToSend(accordian_data);
  }, [
    firstName,
    middleName,
    lastName,
    nationality,
    dob,
    city,
    selectedNamePrefix,
    accountNumber,
    employmentStatus,
    netWorth,
    investmentExperience,
    age,
    timeHorizonForFinancialPlan,
    liquidNetWorth,
    timeHorizonForPortfolio,
    requiredOutflowBegin,
    investmentObjectives,
    abilityTotolarateRisk,
    other,
    otherCity,
  ]);

  const handleSelectChangeNamePrefix = (event) => {
    setSelectedNamePrefix(event.target.value);
  };
  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleChangeMiddleName = (event) => {
    setMiddleName(event.target.value);
  };
  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleChangeNationality = (event) => {
    setNationality(event.target.value);
  };
  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };
  const handleChangeDateOfBirth = (date) => {
    setDob(date);
  };
  const handleAccountNumberChange = (accountNumber) => {
    setAccountNumber(accountNumber);
  };
  const handleChangeotherCity = (event) => {
    setOtherCity(event.target.value);
  };

  const handleCheckboxChangeEmploymentStatus = (label) => {
    if (employmentStatus.includes(label)) {
      setEmploymentStatus(employmentStatus.filter((item) => item !== label));
    } else {
      setEmploymentStatus([...employmentStatus, label]);
    }
  };
  const handleCheckboxChangeNetWorth = (label) => {
    if (netWorth.includes(label)) {
      setNetWorth(netWorth.filter((item) => item !== label));
    } else {
      setNetWorth([...netWorth, label]);
    }
  };
  const handleCheckboxChangeOther = (label) => {
    if (other.includes(label)) {
      setOther(other.filter((item) => item !== label));
    } else {
      setOther([...other, label]);
    }
  };

  const handleCheckboxChangeAge = (label) => {
    if (age.includes(label)) {
      setAge(age.filter((item) => item !== label));
    } else {
      setAge([...age, label]);
    }
  };
  const handleCheckboxChangetimeHorizonForFinancialPlan = (label) => {
    if (timeHorizonForFinancialPlan.includes(label)) {
      settimeHorizonForFinancialPlan(
        timeHorizonForFinancialPlan.filter((item) => item !== label)
      );
    } else {
      settimeHorizonForFinancialPlan([...timeHorizonForFinancialPlan, label]);
    }
  };
  const handleCheckboxChangeLiquidNetWorth = (label) => {
    if (liquidNetWorth.includes(label)) {
      setLiquidNetWorth(liquidNetWorth.filter((item) => item !== label));
    } else {
      setLiquidNetWorth([...liquidNetWorth, label]);
    }
  };
  const handleCheckboxChangeTimeHorizonForPortfolio = (label) => {
    if (timeHorizonForPortfolio.includes(label)) {
      setTimeHorizonForPortfolio(
        timeHorizonForPortfolio.filter((item) => item !== label)
      );
    } else {
      setTimeHorizonForPortfolio([...timeHorizonForPortfolio, label]);
    }
  };
  const handleRequiredOutflowBegin = (label) => {
    if (requiredOutflowBegin.includes(label)) {
      setRequiredOutflowBegin(
        requiredOutflowBegin.filter((item) => item !== label)
      );
    } else {
      setRequiredOutflowBegin([...requiredOutflowBegin, label]);
    }
  };
  const handleInvestmentObjectives = (label) => {
    if (investmentObjectives.includes(label)) {
      setInvestmentObjectives(
        investmentObjectives.filter((item) => item !== label)
      );
    } else {
      setInvestmentObjectives([...investmentObjectives, label]);
    }
  };
  const handleAbilityTotolarateRisk = (label) => {
    if (abilityTotolarateRisk.includes(label)) {
      setAbilityTotolarateRisk(
        abilityTotolarateRisk.filter((item) => item !== label)
      );
    } else {
      setAbilityTotolarateRisk([...abilityTotolarateRisk, label]);
    }
  };

  const handleInvestmentExperience = (type) => {
    setInvestmentExperience(type);
  };

  const data = [
    {
      id: 1,
      Descriptions: "Safety Oriented",
      value1: "Up to 18",
      value2: "Up to 12",
    },
    {
      id: 2,
      Descriptions: "Conservative",
      value1: "19 to 24",
      value2: "13 to 18",
    },
    {
      id: 3,
      Descriptions: "Moderate",
      value1: "25 to 29",
      value2: "19 to 23",
    },
    {
      id: 4,
      Descriptions: "Aggressive",
      value1: "30 to 37",
      value2: "24 to 31",
    },
    {
      id: 5,
      Descriptions: "Very Aggressive",
      value1: "38 to 43",
      value2: "32 to 37",
    },
    {
      id: 6,
      Descriptions: "Specialized Investing",
      value1: "44 & Above",
      value2: "38 & Above",
    },
  ];

  return (
    <>
      <Accordion defaultActiveKey="0" className="border-0">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="bg-secondary text-dark fw-bold border-0">
            Investment, Portfolio and Financial plan Profiler
          </Accordion.Header>
          <Accordion.Body className="border-0">
            <Form>
              <Row className="align-items-center mb-3">
                <Col md={1}>
                  <Form.Group controlId="inputState" className="mt-1">
                    <Form.Label className="fw-bold"></Form.Label>
                    <Form.Control
                      as="select"
                      value={selectedNamePrefix}
                      onChange={handleSelectChangeNamePrefix}
                    >
                      <option>Mr.</option>
                      <option>Mrs.</option>
                      <option>Miss.</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId="inputCity" className="mb-0">
                    <Form.Label className="fw-bold">First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your first name"
                      value={firstName}
                      onChange={handleChangeFirstName}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="inputCity" className="mb-0">
                    <Form.Label className="fw-bold">Middle Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your middle name"
                      value={middleName}
                      onChange={handleChangeMiddleName}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="inputCity" className="mb-0">
                    <Form.Label className="fw-bold">Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your last name"
                      value={lastName}
                      onChange={handleChangeLastName}
                    />
                  </Form.Group>
                </Col>
                <span className="fw-bold">
                  Name should match details in PAN Card
                </span>
              </Row>
              <Row className="align-items-center mb-3">
                <Col md={4}>
                  <Form.Group controlId="inputCity" className="mb-0">
                    <Form.Label className="fw-bold">Nationality</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your nationality"
                      value={nationality}
                      onChange={handleChangeNationality}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="inputDob">
                    <Form.Label className="fw-bold">Date of Birth</Form.Label>
                    <div className="form-control p-0 ">
                      <DatePicker
                        selected={dob}
                        onChange={handleChangeDateOfBirth}
                        className="form-control border-0"
                        placeholderText="Select your date of birth"
                        wrapperClassName="d-block"
                      />{" "}
                    </div>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="inputCity" className="mb-0">
                    <Form.Label className="fw-bold">City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your city"
                      value={city}
                      onChange={handleChangeCity}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={6}>
                  <Form.Group controlId="inputDob">
                    <Form.Label className="fw-bold">Date of Birth</Form.Label>
                    <div className="form-control p-0 ">
                      <DatePicker
                        selected={dob}
                        onChange={handleChangeDateOfBirth}
                        className="form-control "
                        placeholderText="Select your date of birth"
                        wrapperClassName="d-block"
                      />{" "}
                    </div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="inputDob">
                    <Form.Label className="fw-bold nunito-sans">
                      Account Number
                    </Form.Label>

                    <SegmentedInput
                      inputValue={accountNumber}
                      segments={7}
                      onChange={handleAccountNumberChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header className="bg-secondary text-dark fw-bold border-0">
            Basic Financial Information
          </Accordion.Header>
          <Accordion.Body className="border-0">
            <Form>
              <Row className="align-items-center mb-3">
                <Col md={5}>
                  <Form.Group controlId="inputLiquidNetWorth" className="mb-0">
                    <Form.Label className="fw-bold">
                      1.What is your current Liquid Net Worth?
                    </Form.Label>
                    <Row>
                      <Col md={6}>
                        <Form.Check
                          type="checkbox"
                          label="Upto Rs. 25 lakhs"
                          onChange={() =>
                            handleCheckboxChangeNetWorth("a")
                          }
                          checked={netWorth.includes("a")}
                        />
                      </Col>{" "}
                      <Col md={6}>
                        <Form.Check
                          type="checkbox"
                          label="Rs. 25 lakhs - 1 Crore"
                          onChange={() =>
                            handleCheckboxChangeNetWorth(
                              "b"
                            )
                          }
                          checked={netWorth.includes("b")}
                        />
                      </Col>
                      <Col md={6}>
                        <Form.Check
                          type="checkbox"
                          label="1 Crore - 2.5 Crore"
                          onChange={() =>
                            handleCheckboxChangeNetWorth("c")
                          }
                          checked={netWorth.includes("c")}
                        />
                      </Col>
                      <Col md={6}>
                        <Form.Check
                          type="checkbox"
                          label="2.5 Crore and above"
                          onChange={() =>
                            handleCheckboxChangeNetWorth("d")
                          }
                          checked={netWorth.includes("d")}
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                </Col>
                <Col md={7} className=" mt-5">
                  <Form.Group controlId="inputCurrentEmploymentStatus">
                    <Form.Label className="fw-bold">
                      {" "}
                      2.What is your current Employment Status?
                    </Form.Label>
                    <Row>
                      <Col md={6}>
                        <Form.Check
                          type="checkbox"
                          label="Self-employed/Own business"
                          onChange={() =>
                            handleCheckboxChangeEmploymentStatus(
                              "a"
                            )
                          }
                          checked={employmentStatus.includes(
                            "a"
                          )}
                        />
                      </Col>
                      <Col md={6}>
                        <Form.Check
                          type="checkbox"
                          label="Employee"
                          onChange={() =>
                            handleCheckboxChangeEmploymentStatus("b")
                          }
                          checked={employmentStatus.includes("b")}
                        />
                      </Col>
                      <Col md={6}>
                        <Form.Check
                          type="checkbox"
                          label="Retired"
                          onChange={() =>
                            handleCheckboxChangeEmploymentStatus("c")
                          }
                          checked={employmentStatus.includes("c")}
                        />
                      </Col>
                      <Col md={6}>
                        <Form.Check
                          type="checkbox"
                          label="Student"
                          onChange={() =>
                            handleCheckboxChangeEmploymentStatus("d")
                          }
                          checked={employmentStatus.includes("d")}
                        />
                      </Col>
                      <Col md={6}>
                        <Form.Check
                          type="checkbox"
                          label="Homemaker"
                          onChange={() =>
                            handleCheckboxChangeEmploymentStatus("e")
                          }
                          checked={employmentStatus.includes("e")}
                        />
                      </Col>
                      <Col md={3}>
                        <Form.Check
                          type="checkbox"
                          label="Other(pls.specify)"
                          onChange={() =>
                            handleCheckboxChangeOther("f")
                          }
                          checked={other.includes("f")}
                        />
                      </Col>
                      <Col md={3}>
                        <Form.Control
                          type="text"
                          placeholder="Enter your city"
                          value={otherCity}
                          onChange={handleChangeotherCity}
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="bg-secondary text-dark fw-bold border-0">
            Your Personal Rating quiz - Related to Risk
          </Accordion.Header>
          <Accordion.Body className="border-0">
            <Form>
              <Row className="align-items-center mb-3">
                <Form.Group controlId="inputLiquidNetWorth" className="mb-0">
                  <Form.Label className="fw-bold">
                    1. What is your age? (N.A. for corporates)
                  </Form.Label>
                  <Row>
                    <Col md={3}>
                      <Form.Check
                        type="checkbox"
                        label="Below 35 years"
                        onChange={() =>
                          handleCheckboxChangeAge("a")
                        }
                        checked={age.includes("a")}
                      />
                    </Col>{" "}
                    <Col md={3}>
                      <Form.Check
                        type="checkbox"
                        label="Between 35 years and 45 years"
                        onChange={() =>
                          handleCheckboxChangeAge(
                            "b"
                          )
                        }
                        checked={age.includes("b")}
                      />
                    </Col>
                    <Col md={3}>
                      <Form.Check
                        type="checkbox"
                        label="Between 45 years and 55 years"
                        onChange={() =>
                          handleCheckboxChangeAge(
                            "c"
                          )
                        }
                        checked={age.includes("c")}
                      />
                    </Col>
                    <Col md={3}>
                      <Form.Check
                        type="checkbox"
                        label="Between 55 years and 65 years"
                        onChange={() =>
                          handleCheckboxChangeAge(
                            "d"
                          )
                        }
                        checked={age.includes("d")}
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        label="Above 65 years"
                        onChange={() =>
                          handleCheckboxChangeAge("e")
                        }
                        checked={age.includes("e")}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Row>
              <Row className="align-items-center mb-3">
                <Form.Group controlId="inputLiquidNetWorth" className="mb-0">
                  <Form.Label className="fw-bold">
                    2. What is total time horizon that you are planning to have
                    for your financial plan/investments portfolio with Sinhasi?
                    (N.A. for corporates)
                  </Form.Label>
                  <Row>
                    <Col md={3}>
                      <Form.Check
                        type="checkbox"
                        label="Less than 3 years"
                        onChange={() =>
                          handleCheckboxChangetimeHorizonForFinancialPlan(
                            "a"
                          )
                        }
                        checked={timeHorizonForFinancialPlan.includes(
                          "a"
                        )}
                      />
                    </Col>{" "}
                    <Col md={3}>
                      <Form.Check
                        type="checkbox"
                        label="Between 3 years to 10 years"
                        onChange={() =>
                          handleCheckboxChangetimeHorizonForFinancialPlan(
                            "b"
                          )
                        }
                        checked={timeHorizonForFinancialPlan.includes(
                          "b"
                        )}
                      />
                    </Col>
                    <Col md={3}>
                      <Form.Check
                        type="checkbox"
                        label="10 years and Above"
                        onChange={() =>
                          handleCheckboxChangetimeHorizonForFinancialPlan(
                            "c"
                          )
                        }
                        checked={timeHorizonForFinancialPlan.includes(
                          "c"
                        )}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Row>
              <Row className="align-items-center mb-3">
                <Form.Group controlId="inputLiquidNetWorth" className="mb-0">
                  <Form.Label className="fw-bold">
                    3. What percentage of your liquid net worth are you
                    investing through your financial plan/investments/portfolio
                    in this association with Sinhasi?
                  </Form.Label>
                  <Row>
                    <Col md={3}>
                      <Form.Check
                        type="checkbox"
                        label="Less than 25%"
                        onChange={() =>
                          handleCheckboxChangeLiquidNetWorth("a")
                        }
                        checked={liquidNetWorth.includes("a")}
                      />
                    </Col>{" "}
                    <Col md={3}>
                      <Form.Check
                        type="checkbox"
                        label="Between 25% and 50%"
                        onChange={() =>
                          handleCheckboxChangeLiquidNetWorth(
                            "b"
                          )
                        }
                        checked={liquidNetWorth.includes("b")}
                      />
                    </Col>
                    <Col md={3}>
                      <Form.Check
                        type="checkbox"
                        label="More than 50%"
                        onChange={() =>
                          handleCheckboxChangeLiquidNetWorth("c")
                        }
                        checked={liquidNetWorth.includes("c")}
                      />
                    </Col>
                    <Col md={3}>
                      <Form.Check
                        type="checkbox"
                        label="100%"
                        onChange={() =>
                          handleCheckboxChangeLiquidNetWorth("d")
                        }
                        checked={liquidNetWorth.includes("d")}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Row>
              <Row className="align-items-center mb-3">
                <Form.Group controlId="inputLiquidNetWorth" className="mb-0">
                  <Form.Label className="fw-bold">
                    4. Keeping in mind the overall time horizon that you are
                    planning for your portfolio with Sinhasi (stated in question
                    no 2), what is the intermediate cash outflow required from
                    the portfolio.
                  </Form.Label>
                  <Row>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        label="Not at all. I do not require funds from the portfolio during the stated period."
                        onChange={() =>
                          handleCheckboxChangeTimeHorizonForPortfolio(
                            "a"
                          )
                        }
                        checked={timeHorizonForPortfolio.includes(
                          "a"
                        )}
                      />
                    </Col>{" "}
                  </Row>
                  <Row>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        label="I will require 25% of the invested capital, during the stated period."
                        onChange={() =>
                          handleCheckboxChangeTimeHorizonForPortfolio(
                            "b"
                          )
                        }
                        checked={timeHorizonForPortfolio.includes(
                          "b"
                        )}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        label="I will require 50% of the invested capital, during the stated period."
                        onChange={() =>
                          handleCheckboxChangeTimeHorizonForPortfolio(
                            "c"
                          )
                        }
                        checked={timeHorizonForPortfolio.includes(
                          "c"
                        )}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        label="I will require 100% of the invested capital, during the stated period."
                        onChange={() =>
                          handleCheckboxChangeTimeHorizonForPortfolio(
                            "d"
                          )
                        }
                        checked={timeHorizonForPortfolio.includes(
                          "d"
                        )}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Row>
              <Row className="align-items-center mb-3">
                <Form.Group controlId="inputLiquidNetWorth" className="mb-0">
                  <Form.Label className="fw-bold">
                    5. In relation to the previous question, when do you want
                    the required out flow to begin?
                  </Form.Label>
                  <Row>
                    <Col md={2}>
                      <Form.Check
                        type="checkbox"
                        label="Immediately"
                        onChange={() =>
                          handleRequiredOutflowBegin("a")
                        }
                        checked={requiredOutflowBegin.includes("a")}
                      />
                    </Col>{" "}
                    <Col md={3}>
                      <Form.Check
                        type="checkbox"
                        label="Between 1st & 3rd Year"
                        onChange={() =>
                          handleRequiredOutflowBegin("b")
                        }
                        checked={requiredOutflowBegin.includes(
                          "b"
                        )}
                      />
                    </Col>
                    <Col md={3}>
                      <Form.Check
                        type="checkbox"
                        label="Between 3rd & 5th Year"
                        onChange={() =>
                          handleRequiredOutflowBegin("c")
                        }
                        checked={requiredOutflowBegin.includes(
                          "c"
                        )}
                      />
                    </Col>
                    <Col md={2}>
                      <Form.Check
                        type="checkbox"
                        label="After 5th Year"
                        onChange={() =>
                          handleRequiredOutflowBegin("d")
                        }
                        checked={requiredOutflowBegin.includes(
                          "d"
                        )}
                      />
                    </Col>
                    <Col md={1}>
                      <Form.Check
                        type="checkbox"
                        label="None"
                        onChange={() => handleRequiredOutflowBegin("e")}
                        checked={requiredOutflowBegin.includes("e")}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Row>
              <Row className="align-items-center mb-3">
                <Form.Group controlId="inputLiquidNetWorth" className="mb-0">
                  <Form.Label className="fw-bold">
                    6. Which of the following statements best describes your
                    investment objectives for your financial plan/invest
                    ments/portfolio with Sinhasi?`
                  </Form.Label>

                  <Row>
                    <Col md={8}>
                      <Form.Check>
                        <FormCheck.Input
                          type="checkbox"
                          onChange={() =>
                            handleInvestmentObjectives("a")
                          }
                          checked={investmentObjectives.includes("a")}
                        />
                        <FormCheck.Label>
                          <span className="fw-bold">Defensive</span>: My primary
                          objective is to protect capital and seek regular
                          stream of income returns
                        </FormCheck.Label>
                      </Form.Check>
                    </Col>
                    <Col md={4}>
                      <Form.Label className="fw-bold">
                        | 100% Cash equivalent/Debt
                      </Form.Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8}>
                      <Form.Check>
                        <FormCheck.Input
                          type="checkbox"
                          onChange={() =>
                            handleInvestmentObjectives("b")
                          }
                          checked={investmentObjectives.includes(
                            "b"
                          )}
                        />
                        <FormCheck.Label>
                          <span className="fw-bold">Income oriented</span>: I
                          primarily seek a regular stream of income returns and
                          also some capital appreciation as a secondary
                          consideration.
                        </FormCheck.Label>
                      </Form.Check>
                    </Col>
                    <Col md={4}>
                      {" "}
                      <Form.Label className="fw-bold">
                        | 75% Debt / 25% Equities
                      </Form.Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8}>
                      <Form.Check>
                        <FormCheck.Input
                          type="checkbox"
                          onChange={() =>
                            handleInvestmentObjectives("c")
                          }
                          checked={investmentObjectives.includes(
                            "c"
                          )}
                        />
                        <FormCheck.Label>
                          <span className="fw-bold">Growth and income</span>: I
                          seek a balance of regular income returns and capital
                          appreciation over a medium / long term.
                        </FormCheck.Label>
                      </Form.Check>
                    </Col>
                    <Col md={4}>
                      {" "}
                      <Form.Label className="fw-bold">
                        | 50% Bonds / 50% Equities
                      </Form.Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8}>
                      <Form.Check>
                        <FormCheck.Input
                          type="checkbox"
                          onChange={() =>
                            handleInvestmentObjectives("d")
                          }
                          checked={investmentObjectives.includes(
                            "d"
                          )}
                        />
                        <FormCheck.Label>
                          <span className="fw-bold">Growth oriented</span>: I
                          predominately seek capital growth over time and also
                          some regular income returns as a secondary
                          consideration.
                        </FormCheck.Label>
                      </Form.Check>
                    </Col>{" "}
                    <Col md={4}>
                      {" "}
                      <Form.Label className="fw-bold">
                        | 25% Debt / 75% Equities
                      </Form.Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8}>
                      <Form.Check>
                        <FormCheck.Input
                          type="checkbox"
                          onChange={() => handleInvestmentObjectives("e")}
                          checked={investmentObjectives.includes("e")}
                        />
                        <FormCheck.Label>
                          <span className="fw-bold">Growth</span>: I seek only
                          capital appreciation over time and I do not seek any
                          regular income from my investments
                        </FormCheck.Label>
                      </Form.Check>
                    </Col>{" "}
                    <Col md={4}>
                      {" "}
                      <Form.Label className="fw-bold">
                        | 100% Equities
                      </Form.Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8}>
                      <Form.Check>
                        <FormCheck.Input
                          type="checkbox"
                          onChange={() =>
                            handleInvestmentObjectives("f")
                          }
                          checked={investmentObjectives.includes(
                            "f"
                          )}
                        />
                        <FormCheck.Label>
                          <span className="fw-bold">Specialist investing</span>
                          :I seek to invest in specialist investments that maybe
                          subject to substantial fluctuations in the capital
                          value, uncertain pricing, limited liquidity and/or
                          lack of redemption rights.
                        </FormCheck.Label>
                      </Form.Check>
                    </Col>{" "}
                    <Col md={4}>
                      {" "}
                      <Form.Label className="fw-bold">
                        | 100% derivatives, specialised structured products, PE
                        funds, etc
                      </Form.Label>
                    </Col>
                  </Row>
                </Form.Group>
              </Row>
              <Row className="align-items-center mb-3">
                <Form.Group controlId="inputLiquidNetWorth" className="mb-0">
                  <Form.Label className="fw-bold">
                    7. Which of the following statements best describes your
                    ability to tolerate different types of risk with your
                    financial plan / investments / portfolio with Sinhasi?
                  </Form.Label>
                  <Row>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        label="My preference is for investments with no or negligible price movements, and with the ability to sell my  investments at short notice  
                      i.e. within one week or a maximum period of one year"
                        onChange={() => handleAbilityTotolarateRisk("a")}
                        checked={abilityTotolarateRisk.includes("a")}
                      />
                    </Col>{" "}
                  </Row>
                  <Row>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        label="I can tolerate limited negative price movements on my investments and prefer investments that I can sell at  short notice  
                      i.e within one week or for a price that is certain and close to the recent market average"
                        onChange={() => handleAbilityTotolarateRisk("b")}
                        checked={abilityTotolarateRisk.includes("b")}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        label="I can tolerate negative price movements on my total investments and prefer debt investments that I can sell for a  price that is certain and close to the recent market average, and equity investments that may suffer substantial  negative price movement, having a risk of losing their entire value, may be difficult to sell or have an uncertain  price at any given time, or do not allow me to sell my investment over an extended period."
                        onChange={() => handleAbilityTotolarateRisk("c")}
                        checked={abilityTotolarateRisk.includes("c")}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        label="I can tolerate investments that may suffer substantial negative price movements having a small risk of losing  their entire value, may be difficult to sell or have an uncertain price at any given time, such that I may only be  able to sell at a price below the recent market average."
                        onChange={() => handleAbilityTotolarateRisk("d")}
                        checked={abilityTotolarateRisk.includes("d")}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        label="I can tolerate investments or financial contracts that may suffer substantial negative price movements, have a  significant risk of losing their entire value, that may be difficult to sell or have an uncertain value at any given  time, or do not allow me to sell my investment over an extended period."
                        onChange={() => handleAbilityTotolarateRisk("e")}
                        checked={abilityTotolarateRisk.includes("e")}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        label="I can tolerate investments or financial contracts that may have a high risk of losing their entire value or may even  lose more than my initial investment, that may be very difficult to sell or have a highly uncertain value at any given  time, or do not allow me to sell my investment over an extended period."
                        onChange={() => handleAbilityTotolarateRisk("f")}
                        checked={abilityTotolarateRisk.includes("f")}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Row>
            </Form>

            <Container
              className="text-center mt-5 mb-5 text-dark p-3"
              style={{ background: " #EDEDED" }}
            >
              Your total score:
              <span className="fw-bold">120</span>
            </Container>
            <Container className="tableData">
              <Table hover className="table-striped">
                <thead className="tableHeader">
                  <tr>
                    <th
                      colSpan="2"
                      style={{
                        background: "#562a74",
                        color: "#fff",
                        border: "1px solid rgba(160, 160, 160, 1)",
                      }}
                    >
                      <Row className="text-center  ">
                        <Col>For Individual</Col>
                      </Row>
                    </th>
                    <th
                      colSpan="2"
                      style={{
                        background: "#562a74",
                        color: "#fff",
                        border: "1px solid rgba(160, 160, 160, 1)",
                      }}
                    >
                      <Row className="text-center">
                        <Col>For Corporates</Col>
                      </Row>
                    </th>
                    <th
                      rowSpan="2"
                      className=" text-center align-middle"
                      style={{
                        background: "#562a74",
                        color: "#fff",
                        border: "1px solid rgba(160, 160, 160, 1)",
                      }}
                    >
                      <Row className="text-center">
                        <Col>Your Category</Col>
                      </Row>
                    </th>
                  </tr>
                  <tr>
                    <th
                      style={{
                        background: "#562a74",
                        color: "#fff",
                        border: "1px solid rgba(160, 160, 160, 1)",
                      }}
                      className=" text-center"
                    >
                      Score Range
                    </th>
                    <th
                      className=" text-center"
                      style={{
                        background: "#562a74",
                        color: "#fff",
                        border: "1px solid rgba(160, 160, 160, 1)",
                      }}
                    >
                      Discription
                    </th>
                    <th
                      className=" text-center"
                      style={{
                        background: "#562a74",
                        color: "#fff",
                        border: "1px solid rgba(160, 160, 160, 1)",
                      }}
                    >
                      Score Range
                    </th>
                    <th
                      className=" text-center"
                      style={{
                        background: "#562a74",
                        color: "#fff",
                        border: "1px solid rgba(160, 160, 160, 1)",
                      }}
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.value1}</td>
                      <td>{item.Descriptions}</td>
                      <td>{item.value2}</td>
                      <td>{item.Descriptions}</td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header className="bg-secondary text-dark fw-bold border-0">
            Your Knowledge and Experience
          </Accordion.Header>
          <Accordion.Body className="border-0">
            <Form>
              <Row className="align-items-center mb-3">
                <Form.Group controlId="inputLiquidNetWorth" className="mb-0">
                  <Form.Label className="fw-bold">
                    1. Your investment knowledge and experience is best
                    described as follows:
                  </Form.Label>
                  <Row>
                    <Col>
                      <Form.Check
                        inline
                        id="inline-radio-1"
                        name="group1"
                        type="radio"
                        value="Limited" // Store the selected option value
                        // Set checked state based on selectedOption
                      >
                        <FormCheck.Input
                          type="radio"
                          onChange={() => {
                            handleInvestmentExperience("a");
                          }}
                          checked={investmentExperience === "a"}
                        />
                        <FormCheck.Label>
                          <span className="fw-bold">Limited -</span> I have
                          little or no knowledge of products outside traditional
                          bank savings accounts or time-deposits.
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
                        type="radio"
                        value="Moderate" // Store the selected option value
                        // onChange={handleInvestmentExperience}
                        checked={investmentExperience === "b"} // Set checked state based on selectedOption
                      >
                        <FormCheck.Input
                          type="radio"
                          onChange={() => {
                            handleInvestmentExperience("b");
                          }}
                          checked={investmentExperience === "b"}
                        />
                        <FormCheck.Label>
                          <span className="fw-bold">Moderate -</span> I have
                          general knowledge and understanding of investment
                          products...
                        </FormCheck.Label>
                      </Form.Check>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Check
                        inline
                        id="inline-radio-3"
                        name="group1"
                        type="radio"
                        value="Extensive" // Store the selected option value
                        // onChange={handleInvestmentExperience}
                        checked={investmentExperience === "c"} // Set checked state based on selectedOption
                      >
                        <FormCheck.Input
                          type="radio"
                          onChange={() => {
                            handleInvestmentExperience("c");
                          }}
                          checked={investmentExperience === "c"}
                        />
                        <FormCheck.Label>
                          <span className="fw-bold">Extensive -</span> I have
                          extensive knowledge...
                        </FormCheck.Label>
                      </Form.Check>
                    </Col>
                  </Row>
                </Form.Group>
              </Row>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="mt-4 text-right">
        <Button variant="dark" onClick={handleChangeButton}>
          Next
        </Button>
      </div>
    </>
  );
}

export default Page1;
