import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Agency from "@lexnotor/agency";
import Bill from "@lexnotor/bill";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/agency/*" element={<Agency />} />
        <Route path="/bill/*" element={<Bill />} />
        <Route path="*" element={<Navigate to="/agency" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
