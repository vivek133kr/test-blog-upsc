import React from "react";
import styles from "../../../../../../styles/coachings/coachingFaq.module.css"
import FaqQuestion from "./FaqQuestion";
function FaqComponent() {
  return (
    <div
      id="faq"
      style={{
        marginBottom: "30px",
        width: "100%",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          width: "100%",
        }}
        className={styles["FaqHead"]}
      >
        <p
          style={{
            marginLeft: "50px",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          FAQs
        </p>
      </div>
      <div
        className="mt-10 mb-20"
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FaqQuestion />
        <FaqQuestion /> <FaqQuestion /> <FaqQuestion /> <FaqQuestion />
      </div>
    </div>
  );
}

export default FaqComponent;
