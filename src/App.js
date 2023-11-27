import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import PrivatePage from "./Pages/PrivatePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} /> {/* 👈 Renders at /app/ */}
      <Route path="/private-route" element={<PrivatePage />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}

export default App;
