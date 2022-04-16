import React from "react";
import Landingpage from "./Landingpage/Landingpage";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Postview from "./Postview"
function App() {
    return (

        <div className="main">
            <Router>
                <Routes>
                    <Route path="/" element={<Landingpage/>} />
                    <Route path="/Postview" element={<Postview/>} />
                </Routes>
            </Router>
        </div>
    );
}
export default App;
