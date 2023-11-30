import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../../../styles/skills/paymentSuccess.module.css";
import SuccessImage from "./SuccessIcon.png";
import CancelIcon from "@mui/icons-material/Cancel";
import "@fontsource/roboto";
import "@fontsource/open-sans";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
function PaymentGMCSuccessPage() {
  let [data, setData] = useState();
  let [error, setError] = useState(false);
  let loadRef = useRef(false);
  let [loading, setLoading] = useState(true);
  const router = useRouter();
  const {
    razorpay_payment_id,
    razorpay_payment_link_id,
    razorpay_payment_link_reference_id,
    razorpay_payment_link_status,
    razorpay_signature,
  } = router.query;

  useEffect(() => {
    if (
      razorpay_payment_id &&
      razorpay_payment_link_id &&
      razorpay_payment_link_reference_id &&
      razorpay_payment_link_status &&
      razorpay_signature
    ) {
      fetchData();
    }
  }, [
    razorpay_payment_id,
    razorpay_payment_link_id,
    razorpay_payment_link_reference_id,
    razorpay_payment_link_status,
    razorpay_signature,
  ]);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://app.joshtalks.org/api/skill/v1/payment/gmc_success/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            razorpay_payment_id: razorpay_payment_id,
            razorpay_payment_link_id: razorpay_payment_link_id,
            razorpay_payment_link_reference_id:
              razorpay_payment_link_reference_id,
            razorpay_payment_link_status: razorpay_payment_link_status,
            razorpay_signature: razorpay_signature,
          }),
        }
      );
      if (response.ok) {
        const newdata = await response.json();

        console.log(newdata, " line 51");
        if (Object.keys(newdata).length > 0) {
          setData(newdata);
        } else {
          setError(true);
        }

        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  console.log(data, " line 87");
  return (
    <div className={styles["mainPaymentDiv"]}>
      {error == false && data && !loading ? (
        <div className={styles["childPaymentDiv"]}>
          <div className={styles["firstChildPaymentDiv"]}>
            {data.status === "paid" ? (
              <Image
                src={SuccessImage}
                alt="logo"
                style={{ height: "100px", width: "100px" }}
              />
            ) : (
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "#f7c3c3",
                  borderRadius: "360px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CancelIcon
                  style={{ color: "red", width: "50px", height: "50px" }}
                />
              </div>
            )}

            {data.status === "paid" ? (
              <p
                style={{
                  fontFamily: "Open Sans",
                  color: "#36B368",
                  fontSize: "26px",
                  marginTop: "0.5em",
                }}
              >
                {data.message}
              </p>
            ) : (
              <p
                style={{
                  fontFamily: "Open Sans",
                  color: "red",
                  fontSize: "26px",
                  marginTop: "0.5em",
                }}
              >
                {data.message}
              </p>
            )}
            <p
              style={{
                fontFamily: "Roboto",
                color: "black",
                fontSize: "39px",
                fontWeight: 600,
                marginTop: "0.2em",
              }}
            >
              {data.amount}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1em",
            }}
          >
            <p
              className={styles["childPaymentPara"]}
              style={{ fontFamily: "Roboto" }}
            >
              {data.heading}{" "}
            </p>
          </div>
          <div className={styles["linePaymentDiv"]}></div>
          <div className={styles["transactionStyle"]}>
            <div className={styles["transactionDiv"]}>
              <p
                className={styles["transactionDivP"]}
                style={{
                  fontFamily: "Open Sans",
                }}
              >
                Transaction ID :
              </p>
              <p
                className={styles["transactionDivPAns"]}
                style={{
                  fontFamily: "Roboto",
                }}
              >
                {data.order_id}
              </p>
            </div>
            {data.success_at && (
              <div className={styles["transactionDiv"]}>
                <p
                  className={styles["transactionDivP"]}
                  style={{
                    fontFamily: "Open Sans",
                  }}
                >
                  Payment Time :
                </p>
                <p
                  className={styles["transactionDivPAns"]}
                  style={{
                    fontFamily: "Roboto",
                  }}
                >
                  {data.success_at}
                </p>
              </div>
            )}
            <div className={styles["linePaymentDivDotted"]}></div>

            <div className={styles["transactionDiv"]}>
              <p
                className={styles["transactionDivP"]}
                style={{
                  fontFamily: "Open Sans",
                }}
              >
                Amount :
              </p>
              <p
                className={styles["transactionDivPAns"]}
                style={{
                  fontFamily: "Roboto",
                }}
              >
                {data.amount}
              </p>
            </div>
          </div>
        </div>
      ) : loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        error && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1>Error Occured.</h1>
          </div>
        )
      )}
    </div>
  );
}

export default PaymentGMCSuccessPage;
