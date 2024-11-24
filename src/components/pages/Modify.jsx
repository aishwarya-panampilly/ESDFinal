import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../presentation/Modify.css";

function Modify() {
    const [formData, setFormData] = useState({
        employeeId: "",
        firstName: "",
        lastName: "",
        email: "",
        title: "",
        department: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        console.log("Saved Data:", formData);
        alert("Details saved successfully!"); // Replace with save logic
    };

    const navigate = useNavigate();
    const handleExit = () => {
        navigate("/dashboard");
    };

    return (
        <div className="modify-container">
            <h1>Modify Employee Details</h1>
            <form className="modify-form">
                <div className="form-group">
                    <label htmlFor="employeeId">Employee ID</label>
                    <input
                        type="text"
                        id="employeeId"
                        name="employeeId"
                        value={formData.employeeId}
                        onChange={handleInputChange}
                        placeholder="Enter Employee ID"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter First Name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter Last Name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter Email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Enter Title"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <input
                        type="text"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        placeholder="Enter Department"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Photograph</label>
                    <button type="button" className="upload-button">
                        Upload Photograph
                    </button>
                </div>
                <div className="button-container">
                    <button className="exit-button" onClick={handleExit}>
                        Exit
                    </button>
                    <button
                        type="button"
                        className="save-button"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Modify;
