import React from "react";
import Landingpage from "./Landingpage";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Postview from "../Postview";
import Formpage from "./Formpage";

function App() {
    return (

        <div className="main">
            <Router>
                <Routes>
                    <Route path="/" element={<Landingpage/>} />
                    <Route path="/Postview" element={<Postview/>} />
                    <Route path="/Formpage" element={<Formpage/>} />
                </Routes>
            </Router>
        </div>
    );
}
export default App;
