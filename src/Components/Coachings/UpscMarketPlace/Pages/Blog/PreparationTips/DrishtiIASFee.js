import React, {useState, useEffect} from "react";
import Image from "next/image";
import Select from "react-select";
import CoursesFeeStructure from "../../../Assets/drishti-ias-fee-structure.png";
import ComboPackageFeeStructure from "../../../Assets/drishti-ias-fee-structure-second-page.png";
import CounsellorStrategy from "../../../Assets/drishti-ias-counsellor-strategy.jpeg";
import DemoCard from "../../../Assets/drishti-ias-demo-card.jpeg";
import styles from "./blog.module.css";
import Timer from "../../../Assets/timer.png";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RecentPost from "../../RecentPost/RecentPost";

function DrishtiIASFee() {
    const options = [{value: "introduction", label: "Introduction"}, {
        value: "the-first-glimpse",
        label: "The First Glimpse"
    }, {value: "the-admission-counselling", label: "Drishti IAS Admission Counselling"}, {
        value: "drishti-ias-fee", label: "Drishti IAS Fees 2024, Fee Structure and Payment Modes",
    }, {value: "study-strategy", label: "Study Strategy"}, {
        value: "trial-experience",
        label: "Drishti IAS Trial Class Experience"
    }, {value: "my-review", label: "My Review"},];

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            height: "44px",
            width: "60%",
            borderRadius: "8px",
            borderColor: state.isFocused ? "black" : provided.borderColor,
            boxShadow: state.isFocused ? null : provided.boxShadow,
            "&:hover": {
                borderColor: "transparent",
            },
        }), menu: (provided) => ({
            ...provided, width: "60%",
        }), option: (provided, state) => ({
            ...provided,

            borderBottom: "0.4px solid lightgray",
        }),
    };

    const [activeMenuItem, setActiveMenuItem] = useState(null); // Default to 'faculty' or any other initial acti// ve item
    const [openTable, setOpenTable] = useState(true)
    const [selectedOption, setSelectedOption] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = (sectionId) => {
        setActiveMenuItem(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = element.getBoundingClientRect().top + window.scrollY - 230;
            window.scrollTo({top: offset, behavior: "smooth"});
        }
    };
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["introduction", "the-first-glimpse", "the-admission-counselling", "drishti-ias-fee", "study-strategy", "trial-experience", "my-review",];

            // Determine which section is in the viewport
            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveMenuItem(sectionId);
                        break; // Break to avoid setting activeMenuItem multiple times
                    }
                }
            }
        };

        // Add a scroll event listener to track scroll position
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        // Update screenWidth with the actual window width after component has mounted
        setScreenWidth(window.innerWidth);

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array means this effect runs only once after component mount

    return (<div className={styles["topBlogDiv"]}>
        <div
            style={{
                marginTop: "50px", display: "flex",

                flexDirection: "column", marginBottom: "50px",
            }}
            className={styles["blog-mainhead"]}
        >
            <div className={styles["new-blog-header"]}>
                <h1 className={styles["blog-tdHead"]}>
            <span style={{fontWeight: 700}}>
              Drishti IAS Fees 2024, Fee Structure and Academic Counselling Review - GS (Prelims + Mains) + Optionals
            </span>
                </h1>
                <div className={styles["blog-dateTime-head"]}>
                    <p>November 30, 2023</p>

                    <div className={styles["blog-Time-head"]}>
                        <Image width={20} height={20} src={Timer} alt="date"/>
                        <p>15 Minutes</p>
                    </div>
                </div>
                <div className={styles["mobTableOfContent"]}>
                    <Select
                        styles={customStyles}
                        isSearchable={false}
                        defaultValue={selectedOption}
                        placeholder="Table of Contents"
                        onChange={(selectedOption) => {
                            setSelectedOption(selectedOption);

                            let val = selectedOption.value;
                            setActiveMenuItem(val);
                            const element = document.getElementById(val);
                            if (element) {
                                const offset = element.getBoundingClientRect().top + window.scrollY - 230;
                                window.scrollTo({top: offset, behavior: "smooth"});
                            }
                            setMenuOpen(false);
                        }}
                        options={options}
                        menuIsOpen={menuOpen}
                        onMenuOpen={() => setMenuOpen(true)}
                    />
                </div>

                <h2 id="introduction" className={styles["blog-subHead"]}>
                    <strong style={{fontWeight: 700}}>Introduction</strong>
                </h2>
                <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              My name is Shivom Sharma and I work at Josh Talks. As a UPSC Content
                Strategist and someone who tried the UPSC exam before, I was tasked
                with reviewing the admission process and the fee structure of various
                UPSC coaching institutes in Delhi and outside. I decided to review Drishti
                IAS fees and the admission process. Even though almost all the details of
                their courses were on their website, I felt a review wouldn't be honest unless
                I experienced it myself. So, I decided to go to Drishti IAS’s Karol Bagh center
                to see how a fresh graduate, who doesn't know much about the exam, would feel on
                their first visit. In this blog, I’ll tell you about my experience at Drishti IAS.
            </span>
                </p>

                <h2
                    id="the-first-glimpse"
                    className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
                >
                    <strong style={{fontWeight: 700}}>
                        The First Glimpse
                    </strong>
                </h2>

                <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              As I walked down the lively street filled with hopefuls aspiring to become
                IAS officers, the Drishti IAS institute building stood out. Nestled in Old Rajinder Nagar,
                known as the UPSC hub, it seemed like Drishti IAS had painted the town in its colors.
                The area was full of their numerous hoardings, and even the Karol Bagh metro station
                displayed their logo. I must say that Drishti has truly made its mark. Upon entering,
                I was directed to the basement for admission-related inquiries. Before reaching the institute,
                I thought of booking a telephonic appointment. <strong>I called their official number twice but surprisingly,
                nobody answered.</strong> The building had elevators, and I used one to reach the main office. The office was
                impressive, featuring a spacious waiting area with a large sofa and tables. As soon as I stepped in,
                a staff member confirmed that it was my first visit and guided me to the waiting area. He handed me
                an inquiry form, which required basic details, including name, DOB, contact details, preferred mode of
                preparation and preferred language. After a brief wait, the staff member returned and escorted me to a
                counsellor named Lokendra Singh.

            </span>
                </p>
                <h2
                    id="the-admission-counselling"
                    className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
                >
                    <strong style={{fontWeight: 700}}>
                        Drishti IAS Admission Counselling
                    </strong>
                </h2>

                <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              To get the best idea at the counselling process, I mentioned that I was a 29-year-old
                employed in a company with flexible working hours. I explained that I was a UPSC aspirant
                who had attempted the exam once through self-preparation but couldn’t continue due to
                personal reasons. To gather detailed information about the institute's courses, I emphasised
                having only two attempts left and expressed the need for a comprehensive program covering all
                GS papers, Essay, CSAT, Optional, Mains, and Current Affairs within a limited timeframe.
                He analysed my position and recommended a course titled
                <strong> General Studies Foundation Course - Prelims and Mains.</strong>

            </span>
                </p>
                <h2
                    id="drishti-ias-fee"
                    className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
                >
                    <strong style={{fontWeight: 700}}>
                        Drishti IAS Fees 2024, Fee Structure and Payment Modes
                    </strong>
                </h2>

                <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              For the course recommended by the counsellor, the fee structure is listed below. Please note that this course does not include a CSAT course or an Essay course. Since there are various course combinations available, I'll share the Drishti IAS fee structure with you. Notably, this data has been directly taken from the hard copy of the fee structure provided to me by the counsellor.

            </span>
                </p>
                <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              Here’s the fee breakdown of the course, titled<strong> General Studies Foundation Course - Prelims and Mains</strong>, that was offered to me by the counsellor:

            </span>
                </p>

                <div
                    style={{
                        width: "100%", display: "flex", justifyContent: "center", overflow: "auto", // Add this line to enable horizontal scrolling if necessary
                        maxWidth: "100%", // Add this line to make sure the table doesn't exceed the div's width
                    }}
                >
                    <table
                        style={{
                            marginTop: "30px", width: screenWidth > 800 ? "80%" : "100%", // Set the table's width to 100% to make it fit the div
                            tableLayout: "fixed", // Set table layout to fixed to prevent column widths from expanding
                            textAlign: "center",
                        }}
                        className={`${styles["blog-p"]} ${styles["tableDes"]}}`}
                    >
                        <thead>
                            <tr className={styles["blog-td"]}>
                            <th
                                style={{
                                    backgroundColor: "#C9DAF8",
                                }}
                                className={styles["blog-td"]}
                            >
                                <p>
                                    <strong>Description</strong>
                                </p>
                            </th>
                            <th
                                style={{
                                    backgroundColor: "#C9DAF8",
                                }}
                                className={styles["blog-td"]}
                            >
                                <p>
                                    <strong>Amount</strong>
                                </p>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className={styles["blog-td"]} >
                            <td className={styles["blog-td"]}>
                                <p>
                                    Total Course Fee
                                </p>
                            </td>
                            <td className={styles["blog-td"]}>
                                <p>
                      <span style={{fontWeight: 400}}>
                        2,20,000/-
                      </span>
                                </p>
                            </td>
                        </tr>
                        <tr className={styles["blog-td"]} >
                            <td className={styles["blog-td"]}>
                                <p>
                                    One-time Payment
                                </p>
                            </td>
                            <td className={styles["blog-td"]}>
                                <p>
                      <span style={{fontWeight: 400}}>
                        1,95,000/-
                      </span>
                                </p>
                            </td>
                        </tr>
                        <tr className={styles["blog-td"]} >
                            <td className={styles["blog-td"]}>
                                <p>
                                    Installment Fee
                                </p>
                            </td>
                            <td className={styles["blog-td"]}>
                                <p>
                      <span style={{fontWeight: 400}}>
                        2,10,000/-
                      </span>
                                </p>
                            </td>
                        </tr>
                        <tr className={styles["blog-td"]} >
                            <td className={styles["blog-td"]}>
                                <p>
                                    <strong>Installment Breakdown</strong>
                                </p>
                            </td>
                            <td className={styles["blog-td"]}>
                                <p>
                      <span style={{fontWeight: 400}}>

                      </span>
                                </p>
                            </td>
                        </tr>
                        <tr className={styles["blog-td"]} >
                            <td className={styles["blog-td"]}>
                                <p>
                                    First Month
                                </p>
                            </td>
                            <td className={styles["blog-td"]}>
                                <p>
                      <span style={{fontWeight: 400}}>
                        80,000/-
                      </span>
                                </p>
                            </td>
                        </tr>
                        <tr className={styles["blog-td"]} >
                            <td className={styles["blog-td"]}>
                                <p>
                                    Second Month
                                </p>
                            </td>
                            <td className={styles["blog-td"]}>
                                <p>
                      <span style={{fontWeight: 400}}>
                        55,000/-
                      </span>
                                </p>
                            </td>
                        </tr>
                        <tr className={styles["blog-td"]} >
                            <td className={styles["blog-td"]}>
                                <p>
                                    Third Month
                                </p>
                            </td>
                            <td className={styles["blog-td"]}>
                                <p>
                      <span style={{fontWeight: 400}}>
                        40,000/-
                      </span>
                                </p>
                            </td>
                        </tr>
                        <tr className={styles["blog-td"]} >
                            <td className={styles["blog-td"]}>
                                <p>
                                    Fourth Month
                                </p>
                            </td>
                            <td className={styles["blog-td"]}>
                                <p>
                      <span style={{fontWeight: 400}}>
                        35,000/-
                      </span>
                                </p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <br/>
                    <br/>
                </div>

                <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              Drishti IAS offers a variety of courses for UPSC preparation, such as CSAT courses, Essay courses, Test Series, other Foundation courses, and optional courses. You can check the table below to find the most suitable course for you and see its corresponding fee.

            </span>
                </p>

                <div
                    style={{
                        width: "100%", display: "flex", justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            width: screenWidth > 800 ? "90%" : "100%", overflowX: "auto",
                        }}
                    >
                        <p
                            style={{
                                width: "1600px",
                                marginTop: "30px",
                                backgroundColor: "black",
                                color: "white",
                                padding: "20px",
                            }}
                        >
                            Fee Structure (Including GST) - Karol Bagh (English Medium){" "}
                            <br/> Applicable from April 1st, 2023
                        </p>
                        <table
                            style={{
                                marginTop: "0px",
                            }}
                            className={`${styles["blog-p"]} ${styles["tableDes"]}} ${styles["tableHeadStyle"]}`}
                        >
                            <thead>
                            <tr className={styles["blog-td"]} >
                                <th
                                    style={{
                                        backgroundColor: "#C9DAF8", width: screenWidth > 800 ? "600px" : "400px",
                                    }}
                                    rowSpan={2}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>Course</strong>
                                    </p>
                                </th>
                                <th
                                    style={{
                                        backgroundColor: "#C9DAF8",
                                    }}
                                    rowSpan={2}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>Total Fees</strong>
                                    </p>
                                </th>
                                <th
                                    style={{
                                        backgroundColor: "#C9DAF8",
                                    }}
                                    colSpan={2}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>Drishti IAS Student</strong>
                                    </p>
                                </th>
                                <th
                                    style={{
                                        backgroundColor: "#C9DAF8",
                                    }}
                                    colSpan={2}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>Non-Drishti Student</strong>
                                    </p>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles["blog-td"]} >
                                <td
                                    style={{
                                        backgroundColor: "#C9DAF8",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>

                                    </p>
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "#C9DAF8",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>

                                    </p>
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "#C9DAF8",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>One Time Fee</strong>
                                    </p>
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "#C9DAF8",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>Installment Fee</strong>
                                    </p>
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "#C9DAF8",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>One Time Fee</strong>
                                    </p>
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "#C9DAF8",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>Installment Fee</strong>
                                    </p>
                                </td>
                            </tr>
                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>
                                        General Studies Foundation (Prelims + Mains)
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 1,60,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 1,50,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 1,60,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 1,50,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 1,60,000</span>
                                    </p>
                                </td>
                            </tr>
                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>
                                        Civil Services Aptitude test (CSAT)
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 28,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 20,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 23,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 25,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 28,000</span>
                                    </p>
                                </td>
                            </tr>
                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>
                                        Optional
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 60,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 50,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 55,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 55,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 60,000</span>
                                    </p>
                                </td>
                            </tr>
                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>
                                        Hindi Literature (Video class + 18 Class Test)
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 55,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 47,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>-</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 50,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>-</span>
                                    </p>
                                </td>
                            </tr>
                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>
                                        Essay
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 22,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 20,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>-</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 22,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>-</span>
                                    </p>
                                </td>
                            </tr>
                            <tr className={styles["blog-td"]} >
                                <td
                                    colSpan={6}
                                    style={{
                                        backgroundColor: "black", color: "white",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>Test Series</p>
                                </td>
                            </tr>
                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>
                                        Prelims Test Series (GS + CSAT)(25 GS + 5 CSAT = 30
                                        Tests){" "}
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 10,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>-</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>-</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 10,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>-</span>
                                    </p>
                                </td>
                            </tr>
                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>
                                        Mains Test Series (General Studies)(20 Tests)
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 18,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>-</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>-</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 18,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>-</span>
                                    </p>
                                </td>
                            </tr>
                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>
                                        Test Series (Optional Subjects)(16 Tests)
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 16,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>-</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>-</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 16,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>-</span>
                                    </p>
                                </td>
                            </tr>
                            <tr className={styles["blog-td"]} >
                                <td
                                    colSpan={6}
                                    style={{
                                        backgroundColor: "black", color: "white",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>Drishti IAS Student</p>
                                </td>
                            </tr>
                            <tr className={styles["blog-td"]} >
                                <td
                                    style={{
                                        backgroundColor: "lightgray",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>Course</strong>
                                    </p>
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "lightgray",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>Installment Fee</strong>
                                    </p>
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "lightgray",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>1st Installment</strong>
                                    </p>
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "lightgray",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>2nd Installment</strong>
                                    </p>
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "lightgray",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>3rd Installment</strong>
                                    </p>
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "lightgray",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>4th Installment</strong>
                                    </p>
                                </td>
                            </tr>
                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>
                                        General Studies Foundation (Prelims + Mains)
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 1,60,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}> ₹ 60,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 50,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 30,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 20,000</span>
                                    </p>
                                </td>
                            </tr>
                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>
                                        Optional
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 55,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}> ₹ 35,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 20,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>-</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>-</span>
                                    </p>
                                </td>
                            </tr>
                            <tr className={styles["blog-td"]} >
                                <td
                                    colSpan={6}
                                    style={{
                                        backgroundColor: "black", color: "white",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>Non-Drishti Student</p>
                                </td>
                            </tr>
                            <tr className={styles["blog-td"]} >
                                <td
                                    style={{
                                        backgroundColor: "lightgray",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>Course</strong>
                                    </p>
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "lightgray",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>Installment Fee</strong>
                                    </p>
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "lightgray",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>1st Installment</strong>
                                    </p>
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "lightgray",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>2nd Installment</strong>
                                    </p>
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "lightgray",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>3rd Installment</strong>
                                    </p>
                                </td>
                                <td
                                    style={{
                                        backgroundColor: "lightgray",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>4th Installment</strong>
                                    </p>
                                </td>
                            </tr>
                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>
                                        Optional
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 60,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 40,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>₹ 20,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>-</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>-</span>
                                    </p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              Additionally, the institute provides combo courses that bring together different aspects of UPSC preparation. You can check the table below to learn more about these combined courses.

            </span>
                </p>

                <div style={{
                    display: "flex", justifyContent: "center", width: "100%"
                }}>
                    <div
                        style={{
                            width: screenWidth > 800 ? "90%" : "100%", overflowX: "auto",
                        }}
                    >
                        <table
                            className={`${styles["blog-p"]} ${styles["tableDes"]}} ${styles["tableHeadStyle"]}`}
                        >
                            <thead>
                                <tr className={styles["blog-td"]} >
                                <th
                                    style={{
                                        backgroundColor: "#C9DAF8", width: screenWidth > 800 ? "700px" : "400px",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>Combo Packages</strong>
                                    </p>
                                </th>
                                <th
                                    style={{
                                        backgroundColor: "#C9DAF8",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>Total Fee</strong>
                                    </p>
                                </th>
                                <th
                                    style={{
                                        backgroundColor: "#C9DAF8",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>One Time Fee</strong>
                                    </p>
                                </th>
                                <th
                                    style={{
                                        backgroundColor: "#C9DAF8",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>Installment Fee</strong>
                                    </p>
                                </th>
                                <th
                                    style={{
                                        backgroundColor: "#C9DAF8",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>
                                            1<sup>st</sup> Installment
                                        </strong>
                                    </p>
                                </th>
                                <th
                                    style={{
                                        backgroundColor: "#C9DAF8",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>
                                            2<sup>nd</sup> Installment
                                        </strong>
                                    </p>
                                </th>
                                <th
                                    style={{
                                        backgroundColor: "#C9DAF8",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>
                                            3<sup>rd</sup> Installment
                                        </strong>
                                    </p>
                                </th>
                                <th
                                    style={{
                                        backgroundColor: "#C9DAF8",
                                    }}
                                    className={styles["blog-td"]}
                                >
                                    <p>
                                        <strong>
                                            4<sup>th</sup> Installment
                                        </strong>
                                    </p>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>GS (P+M) + CSAT</p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>1,88,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>1,70,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>1,80,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>70,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>50,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>35,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>25,000</span>
                                    </p>
                                </td>
                            </tr>

                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>GS (P+M) + Essay</p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>1,82,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>1,70,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>1,80,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>70,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>50,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>35,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>25,000</span>
                                    </p>
                                </td>
                            </tr>

                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>GS (P+M) + TS (Pre) + TS-GS (Mains)</p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>1,88,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>1,70,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>1,80,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>70,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>45,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>40,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>25,000</span>
                                    </p>
                                </td>
                            </tr>
                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>GS (P+M) + CSAT + TS (Pre)</p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>1,98,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>1,75,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>1,85,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>70,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>50,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>40,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>25,000</span>
                                    </p>
                                </td>
                            </tr>

                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>GS (P+M) + CSAT + Essay</p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>2,10,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>1,90,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>2,00,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>80,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>50,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>40,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>30,000</span>
                                    </p>
                                </td>
                            </tr>

                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>GS (P+M) + Essay + TS (Pre) + TS-GS (Mains)</p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>2,10,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>1,90,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>2,00,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>80,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>50,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>40,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>30,000</span>
                                    </p>
                                </td>
                            </tr>

                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>GS (P+M) + CSAT + Essay + TS (Pre) + TS-GS (Mains)</p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>2,38,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>2,15,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>2,25,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>85,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>60,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>45,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>35,000</span>
                                    </p>
                                </td>
                            </tr>

                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>GS (P+M) + Hindi Literature</p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>2,15,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>1,90,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>2,00,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>80,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>50,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>40,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>30,000</span>
                                    </p>
                                </td>
                            </tr>

                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>GS (P+M) + Optional</p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>2,20,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>1,95,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>2,10,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>80,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>55,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>40,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>35,000</span>
                                    </p>
                                </td>
                            </tr>

                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>GS (P+M) + SAT + Essay + Hindi Literature</p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>2,65,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>2,30,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>2,45,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>85,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>65,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>50,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>45,000</span>
                                    </p>
                                </td>
                            </tr>

                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>GS (P+M) + CSAT + Essay + Optional</p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>2,70,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>2,35,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>2,50,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>85,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>65,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>55,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>45,000</span>
                                    </p>
                                </td>
                            </tr>

                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>
                                        GS (P+M) + CSAT + Essay + Hindi Literature + TS (Pre) +
                                        TS-GS (Mains)
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>2,93,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>2,55,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>2,65,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>90,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>70,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>60,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>45,000</span>
                                    </p>
                                </td>
                            </tr>

                            <tr className={styles["blog-td"]} >
                                <td className={styles["blog-td"]}>
                                    <p>
                                        GS (P+M) + Optional + CSAT + Essay + TS (Pre) + TS-GS
                                        (Mains)
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>2,98,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>2,65,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>2,80,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>90,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>75,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>60,000</span>
                                    </p>
                                </td>
                                <td className={styles["blog-td"]}>
                                    <p>
                                        <span style={{fontWeight: 400}}>55,000</span>
                                    </p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <br/>
                        <br/>
                    </div>
                </div>
                <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              On asking, the counsellor agreed that he can get the installment deadline extended by
                5 days but not more than that. <strong> It's important to note that if a student fails to pay
                the installment on specified time, they won't be allowed in the classroom,
                and they'll lose access to the online portal.</strong>

            </span>
                </p>
                <p className={`${styles["referencePara"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              I'll also include<strong> pictures of the Drishti IAS fee structure hard copies</strong> at the end of this blog for your reference. Those copies were provided to me by the counsellor.
            </span>
                </p>
                <h3
                    id="id_3"
                    className={`${styles["blog-childSubHead"]} ${styles["addMargin1"]}`}
                >
                    <strong style={{fontWeight: 600}}>
                        Drishti IAS Fee Payment Modes
                    </strong>
                </h3>
                <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              Drishti IAS fees can be paid through multiple channels, including<br></br>
            </span>
                </p>

                <ul
                    style={{
                        listStyleType: "disc", listStylePosition: "inside",
                    }}
                >
                    <li
                        key="1"
                        style={{fontWeight: 400}}
                        className={`${styles["blog-p"]} ${styles["addMargin"]}`}
                    >
              <span style={{fontWeight: 400}}>
                  <strong>Credit/Debit Card.</strong>
              </span>
                    </li>
                    <li
                        key="2"
                        style={{fontWeight: 400}}
                        className={`${styles["blog-p"]} ${styles["addMargin"]}`}
                    >
              <span style={{fontWeight: 400}}>
                <strong>Cheque.</strong>
              </span>
                    </li>
                    <li
                        key="3"
                        style={{fontWeight: 400}}
                        className={`${styles["blog-p"]} ${styles["addMargin"]}`}
                    >
              <span style={{fontWeight: 400}}>
                  <strong>Demand Draft.</strong>
              </span>
                    </li>
                    <li
                        key="4"
                        style={{fontWeight: 400}}
                        className={`${styles["blog-p"]} ${styles["addMargin"]}`}
                    >
              <span style={{fontWeight: 400}}>
                  <strong>Net Banking.</strong>
              </span>
                    </li>
                    <li
                        key="5"
                        style={{fontWeight: 400}}
                        className={`${styles["blog-p"]} ${styles["addMargin"]}`}
                    >
              <span style={{fontWeight: 400}}>
                  <strong>UPI</strong>
              </span>
                    </li>
                </ul>
                <h3
                    id="id_3"
                    className={`${styles["blog-childSubHead"]} ${styles["addMargin1"]}`}
                >
                    <strong style={{fontWeight: 600}}>
                        Drishti IAS Fee Discounts and other Details
                    </strong>
                </h3>
                <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
             The institute doesn't have a tie-up with external installment providers,
                but it does offer installment options for students, allowing them to pay
                the fee over the first four months of preparation, as shown in the table
                and pictures above.

            </span>
                </p>
                <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{fontWeight: 400}}>
              In terms of discounts, there was a straightforward discount of 10,000/- in
                Drishti IAS fees, clearly visible in the fee structure printout. Furthermore,
                opting for a one-time payment entailed an additional discount of 15,000/-.

            </span>
                </p>
                <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{fontWeight: 400}}>
              I got home and tried asking the counsellor for a better deal, but he said no extra discounts were allowed, just the ones mentioned in the fee details.

            </span>
                </p>
                <h2
                    id="study-strategy"
                    className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
                >
                    <strong style={{fontWeight: 700}}>
                        Study Strategy
                    </strong>
                </h2>

                <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              Listening to my situation, the counsellor, who was also an aspirant, suggested a coaching strategy tailored for me.
            </span>
                </p>
                <ul
                    style={{
                        listStyleType: "disc", listStylePosition: "inside",
                    }}
                >
                    <li
                        key="6"
                        style={{fontWeight: 400}}
                        className={`${styles["blog-p"]} ${styles["addMargin"]}`}
                    >
              <span style={{fontWeight: 400}}>
                He recommended enrolling in their <strong> General Studies Foundation Course for Prelims and Mains</strong>, curating an
                  <strong> 18-month plan. </strong>
              </span>
                    </li>
                    <li
                        key="7"
                        style={{fontWeight: 400}}
                        className={`${styles["blog-p"]} ${styles["addMargin"]}`}
                    >
              <span style={{fontWeight: 400}}>
                  According to his plan, I could join the latest batch of Drishti IAS <strong> General Studies Foundation
                      Course - Prelims and Mains</strong>, starting on November 29, 2023, with classes scheduled from Monday to
                      Saturday, 6 pm to 8:30 pm.
              </span>
                    </li>
                    <li
                        key="8"
                        style={{fontWeight: 400}}
                        className={`${styles["blog-p"]} ${styles["addMargin"]}`}
                    >
              <span style={{fontWeight: 400}}>
                <strong>Hybrid Course:</strong>
              </span>
                    </li>
                    <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              The counsellor highlighted that the course included live classroom lectures and the option to attend
                remotely if needed. He emphasised that recorded lectures, with unlimited viewing, would be accessible
                until December 2025.

            </span>
                    </p>
                    <li
                        key="9"
                        style={{fontWeight: 400}}
                        className={`${styles["blog-p"]} ${styles["addMargin"]}`}
                    >
              <span style={{fontWeight: 400}}>
                  <strong>His Strategy:</strong> His plan involved starting GS preparation immediately, joining the next
                  Optional Batch, and continuing both prelims and mains coaching for six months. The next six months would
                  focus on GS coaching, allowing ample time for optional revision and preliminary exam preparation.

              </span>
                    </li>
                    <li
                        key="10"
                        style={{fontWeight: 400}}
                        className={`${styles["blog-p"]} ${styles["addMargin"]}`}
                    >
              <span style={{fontWeight: 400}}>
                  <strong>CSAT preparation</strong> was recommended after the Prelims of 2024 for a better understanding
                  of the paper. Essay classes, comprising 12 lectures, were all advised for later.

              </span>
                    </li>
                    <li
                        key="11"
                        style={{fontWeight: 400}}
                        className={`${styles["blog-p"]} ${styles["addMargin"]}`}
                    >
              <span style={{fontWeight: 400}}>
                  <strong>Mentorship:</strong> Throughout the course, dedicated mentors with a minimum of 3 UPSC Mains
                  exams under their belt would guide and assess regularly through weekly tasks, clearing doubts, and
                  providing guidance via Whatsapp, voice calls, and Zoom sessions.
              </span>
                    </li>
                    <li
                        key="12"
                        style={{fontWeight: 400}}
                        className={`${styles["blog-p"]} ${styles["addMargin"]}`}
                    >
              <span style={{fontWeight: 400}}>
                  <strong>Course Timeline:</strong> The counsellor assured that batches, designed for 12-15 months,
                  generally finish on time. Even if there are delays, essential subjects are covered first to avoid
                  complications for the students in prelims. Subjects like Ethics, Essay, and International Relations,
                  exclusive to the mains syllabus, are covered later.

              </span>
                    </li>
                    <li
                        key="13"
                        style={{fontWeight: 400}}
                        className={`${styles["blog-p"]} ${styles["addMargin"]}`}
                    >
              <span style={{fontWeight: 400}}>
                  <strong>Other Inclusions:</strong>
              </span>
                    </li>
                    <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              The course features 29 subject modules, 7 books of Previous Year Questions (Prelims Practice Series),
                5 books (Mains Capsule Series) covering the entire Mains syllabus, two 3-year current affairs crash
                courses for prelims and mains, weekly current affairs classes, and a monthly magazine, Drishti Current
                Affairs Today. The course also offers answer writing guidance and doubt sessions.

            </span>
                    </p>
                </ul>
                <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{fontWeight: 400}}>
              Towards the end of the session, <strong>I asked him about Dr Vikas Divyakirti’s role in the course and the counsellor told me that he will be the one teaching Ethics in this course.</strong>


            </span>
                </p>
                <div style={{marginTop: 36}}>
                    <Image
                        src={CounsellorStrategy}
                        style={{
                            height: screenWidth < 800 ? "100%" : "481.5px",
                            width: screenWidth < 800 ? "100%" : "856px",
                        }}
                        alt="Preparation and Coaching Strategy prepared by Drishti IAS Counsellor"
                    />
                    <p style={{textAlign: "center"}}>Preparation and Coaching Strategy prepared by Drishti IAS Counsellor</p>
                </div>
                <h2
                    id="trial-experience"
                    className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
                >
                    <strong style={{fontWeight: 700}}>
                        Drishti IAS Trial Class Experience
                    </strong>
                </h2>

                <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              The counsellor gave me a chance to attend a live class to get a feel for their teaching style. It was
                10:45 am, and the class was set for 11:30. I entered the room, choosing a seat in the front row.
            </span>
                </p>
                <ul
                    style={{
                        listStyleType: "disc", listStylePosition: "inside",
                    }}
                >
                    <li
                        key="14"
                        style={{fontWeight: 400}}
                        className={`${styles["blog-p"]} ${styles["addMargin"]}`}
                    >
              <span style={{fontWeight: 400}}>
                  The room was big, having a capacity of around <strong>250 people </strong>, with screens for those in the back.
              </span>
                    </li>
                    <li
                        key="15"
                        style={{fontWeight: 400}}
                        className={`${styles["blog-p"]} ${styles["addMargin"]}`}
                    >
              <span style={{fontWeight: 400}}>
                  The teacher, Mr. Sanjay Moga, had <strong>a digital whiteboard with two large screens</strong> on each side for better visibility.

              </span>
                    </li>
                    <li
                        key="16"
                        style={{fontWeight: 400}}
                        className={`${styles["blog-p"]} ${styles["addMargin"]}`}
                    >
              <span style={{fontWeight: 400}}>
                It was an Indian Economy class, and even though you can't judge teaching quality in one session, I found the 150-minute class satisfying. Mr. Moga entered with a smile, <strong> addressing all the doubts before starting.</strong> Some students asked directly by raising their hands, while others had written their questions on paper and placed them on his desk. He announced that he’ll start the class only after all the doubts have been addressed.

              </span>
                    </li>
                    <li
                        key="17"
                        style={{fontWeight: 400}}
                        className={`${styles["blog-p"]} ${styles["addMargin"]}`}
                    >
              <span style={{fontWeight: 400}}>
                He not only cleared doubts on economics but also on <strong> time management</strong> and other concerns. One student had asked that she was feeling demotivated while preparing. Mr Moga recommended several ways to get rid of that feeling, like meeting the people who motivate her or include some hobbies into the study schedule. He also told her to meet him after the class for a few minutes. Although I am unsure if he knew someone was there for a demo, he shared<strong> useful tips for effective UPSC preparation after the doubts were cleared.</strong>

              </span>
                    </li>
                    <li
                        key="18"
                        style={{fontWeight: 400}}
                        className={`${styles["blog-p"]} ${styles["addMargin"]}`}
                    >
              <span style={{fontWeight: 400}}>
                  The topic was Income Tax in India, and he covered all the important points, not allowing writing while
                  explaining. He recited class notes and had students write down a few important things, including
                  several abbreviations that had appeared in the news recently.

              </span>
                    </li>
                    <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              Overall, I liked the teaching method, but it's worth noting that students didn't receive any printed
                material or handouts after the class. The chairs were comfortable, with bag holders at the bottom, a
                thoughtful touch that avoided the hassle of placing bags on laps, something I had noticed in crowded
                classes. Kudos for that.

            </span>
                    </p>
                </ul>
                <div style={{marginTop: 36}}>
                    <Image
                        src={DemoCard}
                        style={{
                            height: screenWidth < 800 ? "100%" : "481.5px",
                            width: screenWidth < 800 ? "100%" : "856px",
                        }}
                        alt="Drishti IAS Demo Card for Trial Class"
                    />
                    <p style={{textAlign: "center"}}>Drishti IAS Demo Card for Trial Class</p>
                </div>
                <h2
                    id="my-review"
                    className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
                >
                    <strong style={{fontWeight: 700}}>
                        My Review
                    </strong>
                </h2>

                <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              As a UPSC aspirant seeking counselling and admission, I had a smooth and well-planned experience at Drishti IAS. The infrastructure, including the waiting area, counselling section, building, washrooms, and classrooms, was nice. I appreciated that the counsellor understood my position and didn't push for a more expensive combo course, which included CSAT or Essay, even though batches with those combinations were available at this point. This decision felt like a positive aspect of their approach.

            </span>
                </p>
                <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              I found Drishti IAS fees to be competitive, aligning with other top UPSC coaching centres but they prioritise student experience and make sure it remains great.

            </span>
                </p>
                <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              However, with a batch strength of 250, the classrooms can get crowded when full, limiting opportunities for students to stand up, ask questions, and engage interactively with teachers. This can defeat the whole purpose of the traditional offline classes. To enhance the classroom experience, Drishti IAS could consider increasing the number of batches and reducing batch sizes, providing students with a more interactive and personalised learning environment.

            </span>
                </p>
                <hr style={{margin: 16}}></hr>
                <p className={`${styles["referencePara"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              Reference pictures showing the hard copies of Drishti IAS fee structure
            </span>
                </p>
                <div style={{marginTop: 36}}>
                    <Image
                        src={CoursesFeeStructure}
                        style={{
                            height: screenWidth < 800 ? "100%" : "481.5px",
                            width: screenWidth < 800 ? "100%" : "856px",
                        }}
                        alt="Drishti IAS Fee Structure for Courses"
                    />
                    <p style={{textAlign: "center"}}>Drishti IAS Fee Structure (Courses)</p>
                </div>
                <div style={{marginTop: 36}}>
                    <Image
                        src={ComboPackageFeeStructure}
                        style={{
                            height: screenWidth < 800 ? "100%" : "481.5px",
                            width: screenWidth < 800 ? "100%" : "856px",
                        }}
                        alt="Drishti IAS Fee Structure for Combo Packages"
                    />
                    <p style={{textAlign: "center"}}>Drishti IAS Fee Structure (Combo Packages)</p>
                </div>
            </div>
            <div className={styles["blog-index-head"]}>
                <div style={{width: "100%"}}>
                    <div
                        onClick={() => {
                            setOpenTable(!openTable);
                        }}
                        className={styles["blog-table-content"]}
                    >
                        <p>Table of Content</p>
                        {openTable ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/>}
                    </div>

                    {openTable && (<div>
                        <p
                            onClick={() => {
                                handleMenuClick("introduction");
                            }}
                            className={styles["blog-table-index-p"]}
                        >
                            Introduction
                        </p>
                        <p
                            onClick={() => {
                                handleMenuClick("the-first-glimpse");
                            }}
                            className={styles["blog-table-index-p"]}
                        >
                            The First Glimpse
                        </p>{" "}
                        <p
                            onClick={() => {
                                handleMenuClick("the-admission-counselling");
                            }}
                            className={styles["blog-table-index-p"]}
                        >
                            Drishti IAS Admission Counselling
                        </p>{" "}
                        <p
                            onClick={() => {
                                handleMenuClick("drishti-ias-fee");
                            }}
                            className={styles["blog-table-index-p"]}
                        >
                            Drishti IAS Fees 2024, Fee Structure and Payment Modes
                        </p>
                        <p
                            onClick={() => {
                                handleMenuClick("study-strategy");
                            }}
                            className={styles["blog-table-index-p"]}
                        >
                            Study Strategy
                        </p>
                        <p
                            onClick={() => {
                                handleMenuClick("trial-experience");
                            }}
                            className={styles["blog-table-index-p"]}
                        >
                            Drishti IAS Trial Class Experience
                        </p>
                        <p
                            onClick={() => {
                                handleMenuClick("my-review");
                            }}
                            className={styles["blog-table-index-p"]}
                        >
                            My Review
                        </p>
                    </div>)}
                </div>
                <div>
             <RecentPost/>
              </div>
            </div>
        </div>
    </div>);
}

export default DrishtiIASFee;