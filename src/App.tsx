import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div style={{ fontSize: "200px", color: "red" }}>temaplate-test-react</div>
    </div>
  );
}

export default App;
