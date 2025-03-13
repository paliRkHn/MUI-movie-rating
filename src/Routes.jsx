import { Routes, Route } from "react-router-dom";
import Home from "./components/HomePage";
import ActionPage from "./components/ActionPage";
import AnimePage from "./components/AnimePage";
import SciFiPage from "./components/SciFiPage"; 

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/action" element={<ActionPage />} />
            <Route path="/anime" element={<AnimePage />} />
            <Route path="/scifi" element={<SciFiPage />} />
        </Routes>
    );
}

export default AppRoutes;