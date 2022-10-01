import React from "react";
import styles from "./Progress.module.css";

const Progress = ({ question, questionsToDelete }) => {
  return (
    <div className={styles.progress}>
      <span>
        Progress: {questionsToDelete.length}/{question.total}
      </span>
    </div>
  );
};

export default Progress;
