import React, { useState } from "react";
import styles from "./Card.module.css";

const Card = ({ question, setAskedIds, askedIds }) => {
  const [cardClasses, setCardClasses] = useState(styles.card);

  const onClickHandler = () => {
    if (cardClasses === styles.card) {
      setCardClasses(`${styles.card} ${styles.flip}`);
    } else {
      setCardClasses(styles.card);
    }
  };

  return (
    <div className={cardClasses}>
      <div className={styles.card__inner} onClick={onClickHandler}>
        <div className={styles.card__front}>
          <span>{question.question.question}</span>
        </div>
        <div className={styles.card__back}>
          <span>{question.question.answer}</span>
          <div className={styles.card__none}>No</div>
          <div
            className={styles.card__yes}
            onClick={() => setAskedIds([...askedIds, question.question._id])}
          >
            Yes
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
