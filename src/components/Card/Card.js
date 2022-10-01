import React, { useState } from "react";
import styles from "./Card.module.css";

const Card = ({
  question,
  setAskedIds,
  askedIds,
  questionsToDelete,
  setQuestionsToDelete,
}) => {
  const [cardClasses, setCardClasses] = useState(styles.card);

  const onClickHandler = () => {
    if (cardClasses === styles.card) {
      setCardClasses(`${styles.card} ${styles.flip}`);
    } else {
      setCardClasses(styles.card);
    }
  };

  const yesHandler = () => {
    setAskedIds([...askedIds, question.question._id]);
    setQuestionsToDelete([...questionsToDelete, question.question._id]);
  };

  const noHandler = () => {
    setAskedIds([...askedIds, question.question._id]);
  };

  const answer =
    question.question.answer.length > 1 ? (
      <ul>
        {question.question.answer.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    ) : (
      <span>{question.question.answer}</span>
    );

  return (
    <div className={cardClasses}>
      <div className={styles.card__inner} onClick={onClickHandler}>
        <div className={styles.card__front}>
          <div className={styles.card__question}>
            <span>{question.question.question}</span>
          </div>
        </div>
        <div className={styles.card__back}>
          <div className={styles.card__answer}>{answer}</div>
          <div className={styles.card__none} onClick={noHandler}>
            No
          </div>
          <div className={styles.card__yes} onClick={yesHandler}>
            Yes
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
