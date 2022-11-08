import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import SchedulePage from "./components/Schedule/SchedulePage";
import ManagePage from "./components/Manage/ManagePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/schedule" element={<SchedulePage />}/>
        <Route path="/settings" element={<ManagePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);