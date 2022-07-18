import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Messages from "./components/Messages";
import ButtonCase from "./components/ButtonCase";
import Temp from "./components/Temp";

function App() {
  return (
    <div className="App">
      <Title />
      <Messages />
      <ButtonCase />
      <Temp />
    </div>
  );
}

export default App;
