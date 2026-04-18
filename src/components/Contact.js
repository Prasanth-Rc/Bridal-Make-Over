import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  // Initialize state for form inputs
  const [formData, setFormData] = useState({
    name: "",
    mobileno: "",
    email: "",
    makeupType: "",
    appointmentDate: "",
    place: "",
    remarks: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit triggered");
    try {
      const response = await axios.post(
        "http://localhost:8080/user/saveUser",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      setFormData({
        name: "",
        mobileno: "",
        email: "",
        makeupType: "",
        appointmentDate: "",
        place: "",
        remarks: "",
      });
      console.log("Response from server:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Contact Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
          <label htmlFor="name">Full Name</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="mobileno"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter Mobile Number"
            required
          />
          <label htmlFor="mobileno">Mobile Number</label>
        </div>

        {/* Email */}
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <label htmlFor="email">Email address</label>
        </div>

        {/* Type of Makeup */}
        <div className="form-floating mb-3">
          <select
            className="form-select"
            id="makeupType"
            value={formData.makeupType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select makeup type
            </option>
            <option value="bridal">Bridal</option>
            <option value="Engagement">Engagement</option>
            <option value="Puberty">Puberty</option>
            <option value="fashion">Fashion</option>
          </select>
          <label htmlFor="makeupType">Type of Makeup</label>
        </div>

        {/* Date */}
        <div className="form-floating mb-3">
          <input
            type="date"
            className="form-control"
            id="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />
          <label htmlFor="appointmentDate">Date</label>
        </div>

        {/* Place */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="place"
            value={formData.place}
            onChange={handleChange}
            placeholder="Enter the place of appointment"
            required
          />
          <label htmlFor="place">Place</label>
        </div>

        {/* Remarks */}
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            id="remarks"
            value={formData.remarks}
            onChange={handleChange}
            rows="4"
            placeholder="Enter any remarks"
          />
          <label htmlFor="remarks">Remarks</label>
        </div>

        {/* Submit Button */}
        <div align="center">
          <button type="submit" className="btn btn-primary w-25">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
