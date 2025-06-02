import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    passWord: "",
    confirmPassWord: "",
    gender: "",
  });

  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleForm = (e) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.passWord === "" ||
      formData.confirmPassWord === "" ||
      formData.gender === ""
    ) {
      setError("Please fill the form");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setError("Invalid email. Please include @ and domain like .com");
      return;
    }
    if (!formData.passWord || !formData.confirmPassWord) {
      setError("Password fields cannot be empty");
      return;
    }
    if (formData.passWord.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (formData.passWord !== formData.confirmPassWord) {
      setError("Passwords do not match");
      return;
    }
    if (!formData.gender) {
      setError("Please select your gender");
      setSuccess("");
      return;
    }
    setError("");
    console.log(formData);
    setSubmittedData({ ...formData });
    alert("form is submit thank you!");

    setFormData({
      name: "",
      email: "",
      passWord: "",
      confirmPassWord: "",
      gender: "",
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Form Validation</h1>
      <form onSubmit={handleForm}>
        <div className="mb-2">
          <label>Name :</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            placeholder="Naam likh bhai"
            className="border-2 border-black rounded ml-2"
          />
        </div>

        <div className="mb-2">
          <label>Email :</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            placeholder="Type your email"
            className="border-2 border-black rounded ml-2"
          />
        </div>

        <div className="mb-2">
          <label>Password :</label>
          <input
            type="password"
            name="passWord"
            value={formData.passWord}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            placeholder="Enter password"
            className="border-2 border-black rounded ml-2"
          />
        </div>

        <div className="mb-2">
          <label>Confirm Password :</label>
          <input
            type="password"
            name="confirmPassWord"
            value={formData.confirmPassWord}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            placeholder="Confirm password"
            className="border-2 border-black rounded ml-2"
          />
        </div>

        <div className="mb-2">
          <label>Gender : </label>
          <select
            name="gender"
            className="border-2 border-black rounded ml-2"
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-2 px-4 py-1 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </form>
      <p className="text-red-600">{error} </p>
      <p></p>
      {/* 👇 Only show data after submission */}
      {submittedData && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Form Data:</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.passWord}</p>
          <p>Confirm Password: {submittedData.confirmPassWord}</p>
          <p>Gender: {submittedData.gender}</p>
        </div>
      )}
    </div>
  );
}
