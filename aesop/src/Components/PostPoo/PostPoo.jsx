import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "../PostPoo/PostPoo.module.css";
export const PostPoo = () => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.childdiv}>
        <div className={styles.rightdiv}>
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/6m4yuIyUcyfXMyKT17ZYsr/9bc9ba78322632d97323d73f364113f0/Aesop_Home_2023_Post-Poo_Drops_Web_Homepage_Secondary_Mid_Desktop_2560x1540px.png"
            alt=""
            srcset=""
          />
        </div>
        <div className={styles.leftdiv}>
          <h1>Post-Poo Drops has returned</h1>
          <p>
            Here to make the malodorous melodious once again. Dispense this
            favoured formulation into the toilet bowl after flushing to
            effectively mask disagreeable odours.
          </p>
          <button className={styles.button}>
            Discover Post-Poo Drops
            <FaArrowRight className={styles.arrowIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};
