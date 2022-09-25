import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import StartButton from "./components/StartButton/StartButton";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  console.log(isStarted);

  return (
    <div className='App'>
      <div className='container'>
        {!isStarted && (
          <StartButton onClickHandler={() => setIsStarted(true)} />
        )}
        {isStarted && <Card />}
      </div>
    </div>
  );
}

export default App;
