import React from "react";
import styles from "../Thought/Thought.module.css";
export const Thought = () => {
  return (
    <div className={styles.main}>
      <div className={styles.thought}>
        ‘Life never becomes a habit to me. It's always a marvel.’
      </div>
      <div className={styles.name}>Katherine Mansfield</div>
    </div>
  );
};
