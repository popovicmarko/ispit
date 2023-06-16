import React from "react";
import "./Home.css";
import img from "../../images/home.png"

function Home() {
    return (
        <div className="homeContainer">
            <img src={img} className="App-logo" alt="logo" />
        </div>
    );
}
export default Home;