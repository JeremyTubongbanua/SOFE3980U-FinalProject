import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SelectFlight from "./pages/SelectFlight";
import Receipt from "./pages/Receipt";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectFlight />} />
        <Route path="/receipt" element={<Receipt />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
