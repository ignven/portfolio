import "./App.css";
import Mid from "./components/Mid/Mid";
import Skils from "./components/Skils/Skils";
import Top from "./components/Top/Top";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <div className="app__container">
      <Top />
      <Mid />
      <Skils />
      <Analytics />
    </div>
  );
}

export default App;
