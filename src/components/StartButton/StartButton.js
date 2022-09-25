import React from "react";
import styles from "./StartButton.module.css";

const StartButton = ({ onClickHandler }) => {
  return (
    <button className={styles.button} onClick={onClickHandler}>
      Start Test
    </button>
  );
};

export default StartButton;
