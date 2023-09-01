// src/components/TopImage.js
import React from 'react';
import styles from '../TopImage/TopImage.module.css';
import { FaArrowRight } from 'react-icons/fa';

const TopImage = () => {
    return (
      <div className={styles.topImage}>
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/AGQGWYrTapcQI1NrPvsYU/11e99769c1767531dd3c12b6fce85f37/Aesop_Bar_Soaps_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_2880x1044px.jpg"
          alt="Aesop Bar Soaps"
          className={styles.image}
        />
        <div className={styles.content}>
          <div className={styles.left}>
            <h1>Aesop</h1>
          </div>
          <div className={styles.right}>
            <p>Bar Soaps</p>
            <h1>A body care classic, reimagined</h1>
            <p className={styles.description}>
              Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits.
            </p>
            <button className={styles.button}>
              Discover bar Soaps
              <FaArrowRight className={styles.arrowIcon} />
            </button>
          </div>
          <div className={styles.extra}>
            <h1>Aesop</h1>
            <button className={styles.extraButton}>
              Discover bar Soaps
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default TopImage;