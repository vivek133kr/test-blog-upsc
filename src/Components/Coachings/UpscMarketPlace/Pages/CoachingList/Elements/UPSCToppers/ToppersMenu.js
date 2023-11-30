import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "../../../../../../../styles/coachings/toppersMenu.module.css";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["one", "two", "three"];
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <span>
        <KeyboardArrowDownIcon />
      </span>
    </components.DropdownIndicator>
  );
};

function ToppersMenu() {
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
    { value: "Most Popular", label: "Most Popular" },
    { value: "Toppers By Year", label: "Toppers By Year" },
    { value: "Toppers By Institute", label: "Toppers By Institute" },
    { value: "Toppers By State", label: "Toppers By State" },
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
  return navscreenWidth > 800 ? (
    <div className={styles["mainTopperClass"]}>
      <Button variant="contained" className={styles["toppers-firstInp"]}>
        Most Popular
      </Button>

      <div
        style={{
          width: "fit-content",
        }}
        className={styles["inpBox1"]}
      >
        <Select
          value={selectedOption1}
          onChange={handleChange1}
          isSearchable={false}
          options={options1}
          placeholder={"Toppers By Year"}
          components={{ DropdownIndicator }}
          styles={{
            control: (provided, state) => ({
              ...provided,
              width: 300,
              boxShadow: "none",
              height: "80px",
              cursor: "pointer",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow: "none",
              backgroundColor: state.isFocused ? "none" : "none",
              color: state.isSelected ? "white" : "black",
              border: state.hasValue
                ? "3px solid var(--secondary-primary-orange-900, #C76523)"
                : "1px solid var(--grey-grey-600, #6E7485)", // Change border color here
              outline: "none",
            }),
            singleValue: (provided, state) => ({
              ...provided,
              color:
                state.hasValue &&
                "var(--secondary-primary-orange-900, #C76523)",
            }),
            option: (provided, state) => ({
              ...provided,
              width: 300,
              cursor: "pointer",
              height: 55,
              backgroundColor: state.isSelected
                ? "var(--secondary-orange-500, #E59F36)"
                : state.isFocused
                ? "lightgray"
                : null,
              color: state.isSelected ? "white" : "black",
            }),
            dropdownIndicator: (provided, state) => ({
              ...provided,
              color: state.isFocused ? "black" : "black",

              border: "1px solid transparent",
              marginLeft: "-100%",
            }),
          }}
        />
      </div>
      <div
        style={{
          width: "fit-content",
          cursor: "pointer",
        }}
        className={styles["inpBox1"]}
      >
        <Select
          value={selectedOption2}
          onChange={handleChange2}
          isSearchable={false}
          options={options2}
          placeholder={"Toppers By Institute"}
          components={{ DropdownIndicator }}
          styles={{
            control: (provided, state) => ({
              ...provided,
              width: 300,
              boxShadow: "none",
              height: "80px",
              cursor: "pointer",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow: "none",
              backgroundColor: state.isFocused ? "none" : "none",
              color: state.isSelected ? "white" : "black",
              border: state.hasValue
                ? "3px solid var(--secondary-primary-orange-900, #C76523)"
                : "1px solid var(--grey-grey-600, #6E7485)", // Change border color here
              outline: "none",
            }),
            singleValue: (provided, state) => ({
              ...provided,
              color:
                state.hasValue &&
                "var(--secondary-primary-orange-900, #C76523)",
            }),
            option: (provided, state) => ({
              ...provided,
              width: 300,
              cursor: "pointer",
              height: 55,
              backgroundColor: state.isSelected
                ? "var(--secondary-orange-500, #E59F36)"
                : state.isFocused
                ? "lightgray"
                : null,
              color: state.isSelected ? "white" : "black",
            }),
            dropdownIndicator: (provided, state) => ({
              ...provided,
              color: state.isFocused ? "black" : "black",

              border: "none",
              outline: "none",
              marginLeft: "-100%",
            }),
          }}
        />
      </div>
      <div
        style={{
          width: "fit-content",
          cursor: "pointer",
        }}
        className={styles["inpBox1"]}
      >
        <Select
          value={selectedOption3}
          onChange={handleChange3}
          isSearchable={false}
          options={options3}
          placeholder={"Toppers By State"}
          components={{ DropdownIndicator }}
          styles={{
            control: (provided, state) => ({
              ...provided,
              width: 300,
              boxShadow: "none",
              height: "80px",
              borderRadius: "15px",
              cursor: "pointer",
              textAlign: "center",
              boxShadow: "none",
              backgroundColor: state.isFocused ? "none" : "none",
              color: state.isSelected ? "white" : "black",
              border: state.hasValue
                ? "3px solid var(--secondary-primary-orange-900, #C76523)"
                : "1px solid var(--grey-grey-600, #6E7485)", // Change border color here
              outline: "none",
            }),
            singleValue: (provided, state) => ({
              ...provided,
              color:
                state.hasValue &&
                "var(--secondary-primary-orange-900, #C76523)",
            }),
            option: (provided, state) => ({
              ...provided,
              width: 300,
              height: 55,
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
              color: state.isFocused ? "black" : "black",

              border: "1px solid transparent",
              marginLeft: "-100%",
            }),
          }}
        />
      </div>
    </div>
  ) : (
    <div style={{
   
    }}>
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
                state.hasValue &&
                "var(--secondary-primary-orange-900, #C76523)",
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
    </div>
  );
}

export default ToppersMenu;
