import "./App.css";
import "./index.css";
import HomePage from "./pages/HomePage";

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Destinations from "./pages/Destinations";
import Report from "./pages/Report";
import Italy from "./pages/Italy";
import Tokoyo from "./pages/Tokoyo";
import Bali from "./pages/Bali";
import Rome from "./pages/Rome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/destinations/" element={<Destinations />} />

        <Route path="/report/" element={<Report />} />

        <Route path="/italy/" element={<Italy />} />

        <Route path="/tokoyo/" element={<Tokoyo />} />

        <Route path="/bali/" element={<Bali />} />

        <Route path="/rome/" element={<Rome />} />
      </Routes>
    </>
  );
}

export default App;
