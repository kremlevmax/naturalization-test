import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Progress from "./components/Progress/Progress";
import StartButton from "./components/StartButton/StartButton";

const url = "http://localhost:4000/api/v1/questions/";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [askedIds, setAskedIds] = useState([]);
  const [question, setQuestion] = useState("");
  const [questionsToDelete, setQuestionsToDelete] = useState([]);

  const fetchQuestion = async () => {
    try {
      const { data } = await axios(url, {
        params: {
          askedIds: askedIds,
        },
      });
      setQuestion(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchQuestion();
  }, [askedIds]);

  if (askedIds.length === 100) {
    setAskedIds(questionsToDelete);
  }

  return (
    <div className='App'>
      <div className='container'>
        {isStarted ? (
          <>
            <Card
              question={question}
              askedIds={askedIds}
              setAskedIds={setAskedIds}
              questionsToDelete={questionsToDelete}
              setQuestionsToDelete={setQuestionsToDelete}
            />
            <Progress
              question={question}
              questionsToDelete={questionsToDelete}
            />
          </>
        ) : (
          <StartButton onClickHandler={() => setIsStarted(true)} />
        )}
      </div>
    </div>
  );
}

export default App;
//
