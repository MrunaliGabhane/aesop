import React from "react";
import styles from "../Thought/Thought.module.css";
export const Thought = () => {
  return (
    <div className={styles.main}>
      <p className={styles.thought}>
        ‘Life never becomes a habit to me. It's always a marvel.’
      </p>
      <p className={styles.name}>Katherine Mansfield</p>
    </div>
  );
};
