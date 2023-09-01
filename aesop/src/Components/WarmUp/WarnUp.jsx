import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "../WarmUp/WarmUp.module.css";
export const WarnUp = () => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.childdiv}>
        <div className={styles.leftdiv}>
          <p>The Athenaeum</p>
          <h1>The warm-up</h1>
          <p>
            In The Athenaeum, our digital reading room: a guide to ensuring a
            healthy complexion through the warmer months.
          </p>
          <button className={styles.button}>
            Read more
            <FaArrowRight className={styles.arrowIcon} />
          </button>
        </div>
        <div className={styles.rightdiv}>
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/3GSzEbfK3uJnoXUkae2D9G/37d1916a82b754c70870cab8f85f34b0/Aesop_Article_Summer_Skin_Care_2020_Mid_1_Desktop_2560x1440px.jpg"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};
