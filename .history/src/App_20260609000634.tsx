import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Privacy from "./components/Common/Privacy";
import Terms from "./components/Common/Terms";
import ScrollToTop from "./components/Homepage/ScrollToTop";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
