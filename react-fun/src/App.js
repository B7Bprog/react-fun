import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Messages from "./components/Messages";
import ButtonCase from "./components/ButtonCase";
import Temp from "./components/Temp";
import { useState } from "react";
import Answer from "./components/Answer";

function App() {
  const [message, setMessage] = useState("Choose the one that applies to you:");
  const [answer, setAnswer] = useState("");
  return (
    <div className="App">
      <Title />
      <Answer answer={answer} />
      <Messages message={message} />
      <ButtonCase setMessage={setMessage} setAnswer={setAnswer} />
      <Temp />
    </div>
  );
}

export default App;
