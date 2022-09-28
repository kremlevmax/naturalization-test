import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import StartButton from "./components/StartButton/StartButton";

const url = "http://localhost:4000/api/v1/questions/";

const fetchQuestion = async () => {
  try {
    const data = await axios(url, {
      headers: { Accept: "application/json" },
      body: {
        askedIds: [
          "632fca8250c2a50234bf353f",
          "632fca8250c2a50234bf353e",
          "632fca8250c2a50234bf3540",
          "632fca8250c2a50234bf3541",
          "632fca8250c2a50234bf3542",
          "632fca8250c2a50234bf3543",
          "632fca8250c2a50234bf3544",
        ],
      },
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [askedIds, setAskedIds] = useState([]);
  const [question, setQuestion] = useState("");

  useEffect(() => {
    fetchQuestion();
  }, [askedIds]);

  return (
    <div className='App'>
      <div className='container'>
        {isStarted ? (
          <Card />
        ) : (
          <StartButton onClickHandler={() => setIsStarted(true)} />
        )}
      </div>
    </div>
  );
}

export default App;
//
