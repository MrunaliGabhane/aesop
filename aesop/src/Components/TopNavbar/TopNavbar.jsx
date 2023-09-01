import React from "react";
import styles from "../TopNavbar/TopNavbar.module.css"
export const TopNavbar = () => {
  return (
    <div>
      <div className={styles.firstTop}>
        <p>
          Trained Aesop consultations are available to provide bespoke skin care
          advise. Book a video consultation
        </p>
      </div>
      <div className={styles.secondTop}>
        <p>
          Click and Collect is now available at Hong Kong stores. Enjoy
          complimentary shipping on orders over HK$400
        </p>
      </div>
    </div>
  );
};
