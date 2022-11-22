import React from "react";
import Graphic from "./Graphic/Graphic.js";
import WelcomeText from "./WelcomeText/Welcometext.js";

function Home() {
  return (
    <div>
      <WelcomeText />
      <Graphic />
      <button
        classname="begin"
        onClick={() => {
          console.log(onclick);
        }}
      >
        Begin
      </button>
    </div>
  );
}

export default Home;
