import React, { useState } from "react";
import styles from "./Card.module.css";

const Card = () => {
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
        <div className={styles.card__front}>Test Question</div>
        <div className={styles.card__back}>Test Answer</div>
      </div>
    </div>
  );
};

export default Card;
