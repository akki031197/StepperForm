import React from "react";
import "./SignIn.css";
import logo from "./../../assets/image.png";
import Button from "react-bootstrap/Button";

function SignIn() {
  return (
    <div className="container-body">
      <div className="text-center">
        <div className="mx-auto d-flex justify-content-center align-items-center logo-container mb-4">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className="title">Welcome to SINHASI</div>
      <form>
        <div className="input-group">
          <label htmlFor="name">First Name and Last Name</label>
          <input type="text" id="name" name="name" placeholder="Akshay Kumar" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="akshay@example.com"
          />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-md-8 col-lg-6 d-flex justify-content-center">
              <div className="checkbox-group p-4">
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    className="form-check-input"
                  />
                  <label htmlFor="terms" className="form-check-label">
                    I accept terms and conditions
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-grid mt-3">
          <Button variant="primary" size="lg">
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
