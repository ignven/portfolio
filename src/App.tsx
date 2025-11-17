import "./App.css";
import Mid from "./components/Mid/Mid";
import Skils from "./components/Skils/Skils";
import Top from "./components/Top/Top";

function App() {
  return (
    <div className="app__container">
      <Top />
      <Mid />
      <Skils />
    </div>
  );
}

export default App;
