import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Messages from "./components/Messages";
import ButtonCase from "./components/ButtonCase";
import Temp from "./components/Temp";
import { useState } from "react";
import Answer from "./components/Answer";
import InputForm from "./components/InputForm";

function App() {
  const [message, setMessage] = useState(
    "Choose the one that best describes you:"
  );
  const [answer, setAnswer] = useState("");
  const [townQuery, setTownQuery] = useState("Manchester");
  const [errorState, setErrorState] = useState(null);

  return (
    <div className="App">
      <Title />
      <Answer answer={answer} />
      <Messages message={message} />
      <ButtonCase setMessage={setMessage} setAnswer={setAnswer} />
      <Temp
        townQuery={townQuery}
        setErrorState={setErrorState}
        errorState={errorState}
        setTownQuery={setTownQuery}
      />
      <InputForm setTownQuery={setTownQuery} setErrorState={setErrorState} />
      <img src={logo} alt="logo" className="App-logo"></img>
    </div>
  );
}

export default App;
