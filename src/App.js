
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Modify from "./components/pages/Modify";
import Navbar from './components/presentation/Navbar';

function App() {
    return (
        <Router>
            <div>
                {/* Permanent Header */}
                <Navbar />

                {/* Define Routes */}
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/modify" element={<Modify />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;


