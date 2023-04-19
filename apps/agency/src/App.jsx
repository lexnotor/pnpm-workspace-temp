import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="text-slate-800">
      <Navbar />
      <Routes>
        <Route path="home/*" element={<Home />} />
        <Route path="services/*" element={<>Services</>} />
        <Route path="about/*" element={<>À propos</>} />
        <Route path="contact/*" element={<>Contacts</>} />
        <Route path="*" element={<Navigate to="home" />} />
      </Routes>
    </div>
  );
};

export default App;
