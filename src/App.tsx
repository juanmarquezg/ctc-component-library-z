import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "./components/atoms/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button label="holi" />
    </div>
  );
}

export default App;
