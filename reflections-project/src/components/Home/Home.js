import React from "react";
import Graphic from "./Graphic/Graphic.js";
import WelcomeText from "./WelcomeText/Welcometext.js";
import { Link } from "react-router-dom";

function Home({ session }) {
  return (
    <div>
      <WelcomeText />
      <div>
        <Graphic />
        <Link to="/assessment" className="beginButtonContainer">
          <button className="beginButton">Begin</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
