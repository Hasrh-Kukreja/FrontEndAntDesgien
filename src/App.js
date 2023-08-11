import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./components/Login";
import Dashboard from "./components/dashboard/dashboad";
import Register from "./components/Register/Register"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboad" element={<Dashboard />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
