import { useState } from "react";

const ButtonCase = ({ setMessage, setAnswer }) => {
  const [b1Text, setB1Text] = useState("I'm stupid");
  const [b2Text, setB2Text] = useState("I'm smart");
  const handleButton1 = () => {
    console.log("hovered over");
    setB1Text("I'm stupid");
    setB2Text("I'm smart");
  };
  const handleButton2 = () => {
    console.log("hovered over");
    setB1Text("I'm smart");
    setB2Text("I'm stupid");
  };

  const handleClickB1 = () => {
    if (b1Text === "I'm stupid") {
      setMessage(`Thanks for being honest!`);
      setAnswer(`Your answer was: I'm stupid`);
    } else {
      setAnswer(`Your answer was: I'm smart`);
      setMessage("Too easy for a hacker!");
    }
  };

  const handleClickB2 = () => {
    if (b2Text === "I'm stupid") {
      setMessage(`Thanks for being honest!`);
      setAnswer(`Your answer was: I'm stupid`);
    } else {
      setAnswer(`Your answer was: I'm smart`);
      setMessage("Too easy for a hacker!");
    }
  };

  const resetMessage = () => {
    setMessage("Choose the one that applies to you:");
    setAnswer("");
  };

  return (
    <div className="buttonCase">
      <button id="b1" onMouseOver={handleButton1} onClick={handleClickB1}>
        {b1Text}
      </button>

      <button id="b2" onMouseOver={handleButton2} onClick={handleClickB2}>
        {b2Text}
      </button>
      <div>
        <button onClick={resetMessage}>Reset</button>
      </div>
    </div>
  );
};

export default ButtonCase;
