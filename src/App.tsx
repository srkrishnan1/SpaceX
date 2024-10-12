import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Utilities/Layout";
import HomePage from "./Pages/HomePage";
import Launches from "./Pages/Launches";
import RocketsPage from "./Pages/RocketPage";
import RocketDetailPage from "./Pages/RocketDetailPage";
import LaunchDetailPage from "./Pages/LaunchDetailPage";
import AdvanceHumanFlight from "./Pages/AdvanceHumanFlight";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/advanceHuman" element={<AdvanceHumanFlight />} />
        <Route path="/launch" element={<Launches />} />
        <Route path="/launch/:launchId" element={<LaunchDetailPage />} />
        <Route path="/rockets" element={<RocketsPage />} />
        <Route path="/rockets/:rocketId" element={<RocketDetailPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
