import React, { useState } from 'react'
import styles from "../../../../../../styles/coachings/coachingFaq.module.css";
function FaqQuestion() {

    let [show, setShow] = useState(false)
  return (
    <div className={`${styles["faqQuestion"]} mt-3 mb-2`} onClick={()=>{
        setShow(!show)
    }}>
      <p className={styles["faqQuestionHeader"]}>
        Will I be Able to attend the Classes Through Mobile If I purchase your
        QEP Course ?
      </p>

     { show &&

      <p className={`${styles["faqQuestionAnswer"]} mt-3`}>
        Yes you would be able to View an course or test series that you
        purchased through phone, tablet pc or laptop. The only thing required is
        a decent internet connection
      </p>}
    </div>
  );
}

export default FaqQuestion