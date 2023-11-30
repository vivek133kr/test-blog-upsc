import React from "react";
import QuestionStatus from "./QuestionStatus";
import Score from "./Score";
import SubjectDropbox from "./SubjectDropbox";
import styles from "./ReportOverview.module.css"; // Import the CSS module
import "@fontsource/roboto";

export default function ReportOverview({ data }) {
  const { name, report, subject_wise } = data;

  const total = report.correct + report.wrong + report.unattempted;

  const questionStatusData = [
    {
      number: report.correct,
      text: "Questions answered correctly",
      circleColor: "#27B446",
    },
    {
      number: report.wrong,
      text: "Questions answered incorrectly",
      circleColor: "#E00000",
    },
    {
      number: report.unattempted,
      text: "Questions unattempted",
      circleColor: "#393B3F",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.centerText}>
        <h2 className={styles.textCenter}>Good Attempt {name}</h2>
        <h2 className={styles.reportext}>Your Report Overview</h2>
        <h6 className={styles.reportname}>Test your Preparation: UPSC 2024</h6>
      </div>
      <section>
        <div className={styles.borderPy12Rounded}>
          <div className={styles.contentStyle}>
            {questionStatusData.map((data, index) => (
              <QuestionStatus
                key={index}
                number={data.number}
                text={data.text}
                circleColor={data.circleColor}
              />
            ))}
          </div>
          <Score name={name} report={report} total={total} rank={data.rank} />
        </div>
        <div style={{ background: "#FAFBFC", paddingBlock: "2%" }}>
          <h5
            className={styles.centerText}
            style={{
              padding: "3% 0",
              color: "#000",
              fontSize: "26px",
              fontFamily: "Roboto",
              fontWeight: 600,
              lineHeight: "24px",
            }}
          >
            Subject-wise Performance Analysis :
          </h5>
          <div>
            {subject_wise.map((subjectData, index) => (
              <SubjectDropbox key={index} data={subjectData} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
