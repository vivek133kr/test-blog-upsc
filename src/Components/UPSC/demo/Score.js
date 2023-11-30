import React from "react";
import ChartComponent from "./ChartComponent";
import styles from "./score.module.css"; // Import the CSS module

const Score = ({ name, report, total, rank }) => {
  return (
    <div className={styles.scoreContainer}>
      <div className={styles.scoreTextContainer}>
        <div className={styles.scoreTextContent}>
          <div className={styles.normalText}>
            Dear {name}, You have scored
          </div>
          <div className={styles.highlightedText}>
            {report && report.correct}/{report && total}
          </div>
         {rank && <div className={styles.rankText}>Your Rank: {rank}</div>}
        </div>
      </div>
      <div className={styles.chartContainer}>
        <div className={styles.chartContent}>
          <ChartComponent report={report} />
        </div>
      </div>
    </div>
  );
};

export default Score;
