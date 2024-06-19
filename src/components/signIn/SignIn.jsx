import React, { useState } from "react";
import axios from "axios";
import "./SignIn.css";
import logo from "./../../assets/image.png";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handlePageChange = async () => {
    try {
      const response = await axios.post("/user", { name, email });
      const { data } = response;
      // Assuming the response contains name, email, and id
      const { name, email, id } = data;

      // Save the data to state (or context, or any state management library)
      // For simplicity, using localStorage here
      localStorage.setItem("user", JSON.stringify({ name, email, id }));

      // Navigate to the next page
      navigate("/page");
    } catch (error) {
      navigate("/page");
      setError("Failed to sign up. Please try again.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handlePageChange();
  };

  return (
    <div className="container-body">
      <div className="text-center">
        <div className="mx-auto d-flex justify-content-center align-items-center logo-container mb-4">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div className="title">Welcome to SINHASI</div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">First Name and Last Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Harry Baker"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="harry_baker@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col d-flex justify-content-center">
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
          <Button variant="primary" size="lg" type="submit">
            Sign Up
          </Button>
        </div>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}

export default SignIn;
