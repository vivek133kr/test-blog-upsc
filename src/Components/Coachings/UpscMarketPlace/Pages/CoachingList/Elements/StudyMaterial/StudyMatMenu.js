import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "../../../../../../../styles/coachings/toppersMenu.module.css";
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <span>
        <KeyboardArrowDownIcon />
      </span>
    </components.DropdownIndicator>
  );
};

function StudyMatMenu() {
  const [navscreenWidth, setNavScreenWidth] = useState(0);

  useEffect(() => {
    // Update screenWidth with the actual window width after component has mounted
    setNavScreenWidth(window.innerWidth);

    const handleResize = () => {
      setNavScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once after component mount

  const options1 = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const options2 = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const options3 = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const options4 = [
    { value: "Syllabus", label: "Syllabus" },
    { value: "Notes & Blogs", label: "Notes & Blogs" },
  ];
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(options4[0]);

  const handleChange1 = (option) => {
    setSelectedOption1(option);
  };
  const handleChange2 = (option) => {
    setSelectedOption2(option);
  };
  const handleChange3 = (option) => {
    setSelectedOption3(option);
  };
  const handleChange4 = (option) => {
    setSelectedOption4(option);
  };
  return <div style={{}}>
    <div
      style={{
        width: "fit-content",
        cursor: "pointer",
      }}
      className={styles["inpBox1"]}
    >
      <Select
        value={selectedOption4}
        onChange={handleChange4}
        isSearchable={false}
        options={options4}
        styles={{
          control: (provided, state) => ({
            ...provided,
            width: "fit-content",

            boxShadow: "none",
            color: "var(--secondary-primary-orange-900, #C76523)",

            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 600,

            borderRadius: "15px",
            cursor: "pointer",
            textAlign: "center",
            boxShadow: "none",
            border: "none",
            backgroundColor: state.isFocused ? "none" : "none",
            color: state.isSelected ? "white" : "black",

            outline: "none",
          }),
          singleValue: (provided, state) => ({
            ...provided,
            color:
              state.hasValue && "var(--secondary-primary-orange-900, #C76523)",
          }),
          option: (provided, state) => ({
            ...provided,
            width: "100%",

            cursor: "pointer",
            backgroundColor: state.isSelected
              ? "var(--secondary-orange-500, #E59F36)"
              : state.isFocused
              ? "lightgray"
              : null,
            color: state.isSelected ? "white" : "black",
          }),
          dropdownIndicator: (provided, state) => ({
            ...provided,
            color: "var(--secondary-orange-500, #E59F36)",
          }),
        }}
      />
    </div>
  </div>;
}

export default StudyMatMenu;
