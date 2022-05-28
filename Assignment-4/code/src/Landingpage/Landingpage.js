import React from 'react';
import { Link } from "react-router-dom";
import './Landingpage.css';


const Landingpage = () => {
    return (
        <div className="Landingpage">
            <div className="image">
                <img className='img1' src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="image" />
            </div>
            <div className="sub-conatiner">
                <h2>
                    10x Team 04
                </h2>
                <Link to = "/Postview">
                <button id="button">
                    Enter
                </button>
                </Link>   
                </div>
        </div>
    );
};
export default Landingpage;