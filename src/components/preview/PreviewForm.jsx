import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './preview.css'
import Page1 from '../form/Page1';

function PreviewForm({ showPreview, hidePreview, dataPage1, dataPage2, dataPage3, dataPage4 }) {

    const [dob, setDob] = useState('')

    useEffect(() => {
        const date = new Date(dataPage1.dob);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        setDob(formattedDate)
    }, []);



    return (
        <Modal
            size="xl"
            show={showPreview}
            onHide={hidePreview}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <div className="section">
                    <div className="preview-heading">Investment, Portfolio and Financial plan Profiler</div>
                    <b>First Name</b> : {dataPage1.firstName}<br />
                    <b>Middle Name</b> : {dataPage1.middleName}<br />
                    <b>Last Name</b> : {dataPage1.lastName}<br />
                    <b>Nationality</b> : {dataPage1.nationality}<br />
                    <b>Date of Birth</b> : {dob}<br />
                    <b>City</b> : {dataPage1.city}<br />
                    <b>Account Number</b> : {dataPage1.accountNumber}<br />
                </div>


                <div className="section">
                    <div className="preview-heading">Basic Financial Information</div>

                    <b>1. What is your current Liquid Net Worth?</b> :
                    <div>{dataPage1.netWorth.includes("a") ? "Upto Rs. 25 lakhs" : ""}</div>
                    <div>{dataPage1.netWorth.includes("b") ? "Rs. 25 lakhs - 1 Crore" : ""}</div>
                    <div>{dataPage1.netWorth.includes("c") ? "1 Crore - 2.5 Crore" : ""}</div>
                    <div>{dataPage1.netWorth.includes("d") ? "2.5 Crore and above" : ""}</div>

                    <b>2. What is your current Employment Status?</b> :
                    <div>{dataPage1.employmentStatus.includes("a") ? "Self-employed/Own business" : ""}</div>
                    <div>{dataPage1.employmentStatus.includes("b") ? "Employee" : ""}</div>
                    <div>{dataPage1.employmentStatus.includes("c") ? "Retired" : ""}</div>
                    <div>{dataPage1.employmentStatus.includes("d") ? "Student" : ""}</div>
                    <div>{dataPage1.employmentStatus.includes("e") ? "Homemaker" : ""}</div>
                    <div>{dataPage1.employmentStatus.includes("f") ? "Other (pls. specify)" : ""} &nbsp;{dataPage1.otherCity}</div>
                </div>

                <div className="section">
                    <div className="preview-heading">Your Personal Rating Quiz - Related to Risk</div>

                    <b>1. What is your age? (N.A. for corporates)</b> :
                    <div>{dataPage1.age.includes("a") ? "Below 35 years" : ""}</div>
                    <div>{dataPage1.age.includes("b") ? "Between 35 years and 45 years" : ""}</div>
                    <div>{dataPage1.age.includes("c") ? "Between 45 years and 55 years" : ""}</div>
                    <div>{dataPage1.age.includes("d") ? "Between 55 years and 65 years" : ""}</div>
                    <div>{dataPage1.age.includes("e") ? "Above 65 years" : ""}</div>

                    <b>2. What is the total time horizon that you are planning to have for your financial plan/investments portfolio with Sinhasi? (N.A. for corporates)</b> :
                    <div>{dataPage1.timeHorizonForFinancialPlan.includes("a") ? "Less than 3 years" : ""}</div>
                    <div>{dataPage1.timeHorizonForFinancialPlan.includes("b") ? "Between 3 years to 10 years" : ""}</div>
                    <div>{dataPage1.timeHorizonForFinancialPlan.includes("c") ? "10 years and Above" : ""}</div>

                    <b>3. What percentage of your liquid net worth are you investing through your financial plan/investments/portfolio in this association with Sinhasi?</b> :
                    <div>{dataPage1.liquidNetWorth.includes("a") ? "Less than 25%" : ""}</div>
                    <div>{dataPage1.liquidNetWorth.includes("b") ? "Between 25% and 50%" : ""}</div>
                    <div>{dataPage1.liquidNetWorth.includes("c") ? "More than 50%" : ""}</div>
                    <div>{dataPage1.liquidNetWorth.includes("d") ? "100%" : ""}</div>

                    <b>4. Keeping in mind the overall time horizon that you are planning for your portfolio with Sinhasi (stated in question no 2), what is the intermediate cash outflow required from the portfolio?</b> :
                    <div>{dataPage1.timeHorizonForPortfolio.includes("a") ? "Not at all. I do not require funds from the portfolio during the stated period." : ""}</div>
                    <div>{dataPage1.timeHorizonForPortfolio.includes("b") ? "I will require 25% of the invested capital, during the stated period." : ""}</div>
                    <div>{dataPage1.timeHorizonForPortfolio.includes("c") ? "I will require 50% of the invested capital, during the stated period." : ""}</div>
                    <div>{dataPage1.timeHorizonForPortfolio.includes("d") ? "I will require 100% of the invested capital, during the stated period." : ""}</div>

                    <b>5. In relation to the previous question, when do you want the required outflow to begin?</b> :
                    <div>{dataPage1.requiredOutflowBegin.includes("a") ? "Immediately" : ""}</div>
                    <div>{dataPage1.requiredOutflowBegin.includes("b") ? "Between 1st & 3rd Year" : ""}</div>
                    <div>{dataPage1.requiredOutflowBegin.includes("c") ? "Between 3rd & 5th Year" : ""}</div>
                    <div>{dataPage1.requiredOutflowBegin.includes("d") ? "After 5th Year" : ""}</div>
                    <div>{dataPage1.requiredOutflowBegin.includes("e") ? "None" : ""}</div>

                    <b>6. Which of the following statements best describes your investment objectives for your financial plan/investments/portfolio with Sinhasi?</b> :
                    <div>{dataPage1.investmentObjectives.includes("a") ? <div><span className="fw-bold">Defensive</span>: My primary objective is to protect capital and seek regular stream of income returns | 100% Cash equivalent/Debt</div> : ""}</div>
                    <div>{dataPage1.investmentObjectives.includes("b") ? <div><span className="fw-bold">Income oriented</span>: I primarily seek a regular stream of income returns and also some capital appreciation as a secondary consideration. | 75% Debt / 25% Equities</div> : ""}</div>
                    <div>{dataPage1.investmentObjectives.includes("c") ? <div><span className="fw-bold">Growth and income</span>: I seek a balance of regular income returns and capital appreciation over a medium / long term. | 50% Bonds / 50% Equities</div> : ""}</div>
                    <div>{dataPage1.investmentObjectives.includes("d") ? <div><span className="fw-bold">Growth oriented</span>: I predominately seek capital growth over time and also some regular income returns as a secondary consideration.| 25% Debt / 75% Equities</div> : ""}</div>
                    <div>{dataPage1.investmentObjectives.includes("e") ? <div><span className="fw-bold">Growth</span>: I seek only capital appreciation over time and I do not seek any regular income from my investments | 100% Equities</div> : ""}</div>
                    <div>{dataPage1.investmentObjectives.includes("f") ? <div><span className="fw-bold">Specialist investing</span>: I seek to invest in specialist investments that may be subject to substantial fluctuations in the capital value, uncertain pricing, limited liquidity and/or lack of redemption rights. | 100% derivatives, specialised structured products, PE funds, etc</div> : ""}</div>

                    <b>7. Which of the following statements best describes your ability to tolerate different types of risk with your financial plan / investments / portfolio with Sinhasi?</b> :
                    <div>{dataPage1.abilityTotolarateRisk.includes("a") ? "My preference is for investments with no or negligible price movements, and with the ability to sell my investments at short notice i.e. within one week or a maximum period of one year" : ""}</div>
                    <div>{dataPage1.abilityTotolarateRisk.includes("b") ? "I can tolerate limited negative price movements on my investments and prefer investments that I can sell at short notice i.e within one week or for a price that is certain and close to the recent market average" : ""}</div>
                    <div>{dataPage1.abilityTotolarateRisk.includes("c") ? "I can tolerate negative price movements on my total investments and prefer debt investments that I can sell for a price that is certain and close to the recent market average, and equity investments that may suffer substantial negative price movement, having a risk of losing their entire value, may be difficult to sell or have an uncertain price at any given time, or do not allow me to sell my investment over an extended period." : ""}</div>
                    <div>{dataPage1.abilityTotolarateRisk.includes("d") ? "I can tolerate investments that may suffer substantial negative price movements having a small risk of losing their entire value, may be difficult to sell or have an uncertain price at any given time, such that I may only be able to sell at a price below the recent market average." : ""}</div>
                    <div>{dataPage1.abilityTotolarateRisk.includes("e") ? "I can tolerate investments or financial contracts that may suffer substantial negative price movements, have a significant risk of losing their entire value, that may be difficult to sell or have an uncertain value at any given time, or do not allow me to sell my investment over an extended period." : ""}</div>
                    <div>{dataPage1.abilityTotolarateRisk.includes("f") ? "I can tolerate investments or financial contracts that may have a high risk of losing their entire value or may even lose more than my initial investment, that may be very difficult to sell or have a highly uncertain value at any given time, or do not allow me to sell my investment over an extended period." : ""}</div>
                </div>

                <div className="section">
                    <div className="preview-heading">Your Knowledge and Experience</div>

                    <b>1. Your investment knowledge and experience is best described as follows</b> :
                    <div>{dataPage1.investmentExperience.includes("a") ? <div><span className="fw-bold">Limited -</span> I have little or no knowledge of products outside traditional bank savings accounts or time-deposits.</div> : ""}</div>
                    <div>{dataPage1.investmentExperience.includes("b") ? <div><span className="fw-bold">Moderate -</span> I have general knowledge and understanding of investment products...</div> : ""}</div>
                    <div>{dataPage1.investmentExperience.includes("c") ? <div><span className="fw-bold">Extensive -</span> I have extensive knowledge...</div> : ""}</div>
                </div>


            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={hidePreview}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PreviewForm

