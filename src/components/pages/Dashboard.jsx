import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../presentation/Dashboard.css'
function Dashboard() {
    const navigate = useNavigate();

    // State to hold employee data
    const [employeeData, setEmployeeData] = useState({
        employeeId: "",
        firstName: "",
        lastName: "",
        email: "",
        title: "",
        department: "",
        photograph: ""
    });

    // Simulate fetching data when the component mounts
    useEffect(() => {
        // Simulate a data fetch (in a real app, this could be an API call or getting from localStorage)
        const fetchedEmployeeData = {
            employeeId: "12345",
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            title: "Professor",
            department: "Science",
            photograph: "https://www.w3schools.com/w3images/avatar2.png"  // Replace with a real photo path
        };
        
        // Set the employee data into state
        setEmployeeData(fetchedEmployeeData);
    }, []); // Empty dependency array ensures this effect runs once when the component mounts

    const handleLogout = () => {
        // Any logout logic here (clear session, tokens, etc.)
        navigate("/");  // Redirect to the login page
    };

    const handleModify = () => {
        navigate("/modify");  // Redirect to the modify page
    };

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-heading">Dashboard</h1>

            <div className="dashboard-content">
                {/* Employee Details Form on the left */}
                <form className="employee-details-form">
                    <div className="form-group">
                        <label>Employee ID</label>
                        <input
                            type="text"
                            value={employeeData.employeeId}
                            disabled
                        />
                    </div>

                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            type="text"
                            value={employeeData.firstName}
                            disabled
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            type="text"
                            value={employeeData.lastName}
                            disabled
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={employeeData.email}
                            disabled
                        />
                    </div>

                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            value={employeeData.title}
                            disabled
                        />
                    </div>

                    <div className="form-group">
                        <label>Department</label>
                        <input
                            type="text"
                            value={employeeData.department}
                            disabled
                        />
                    </div>
                </form>

                {/* Photograph on the right */}
                <div className="employee-photo">
                    <img src={employeeData.photograph} alt="Employee Photograph" />
                </div>
            </div>

            {/* Modify and Logout Buttons */}
            <div className="button-container">
                <button onClick={handleModify}>Modify Details</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}

export default Dashboard;