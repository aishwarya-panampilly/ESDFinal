import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import '../presentation/Login.css'

function Login() {
    const [formData, setFormData] = useState({
        employeeId: "",
        email: "",
        password: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.employeeId && formData.email && formData.password) {
            console.log("Form Submitted", formData);
            alert("Login Successful!"); // Replace with actual logic
        } else {
            alert("All fields must be filled!");
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                {/* Employee ID Field */}
                <div className="form-group">
                    <label htmlFor="employeeId">Employee ID</label>
                    <input
                        type="text"
                        id="employeeId"
                        name="employeeId"
                        value={formData.employeeId}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your Employee ID"
                    />
                </div>

                {/* Email Field */}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your Email"
                    />
                </div>

                {/* Password Field */}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your Password"
                    />
                </div>

                {/* Submit Button */}
                <Link to="/dashboard">
                    <button type="submit">Login</button>
                </Link>  
            </form>
        </div>
    );
}
export default Login