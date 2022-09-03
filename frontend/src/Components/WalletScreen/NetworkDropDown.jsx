import React from "react";
import Select from "react-select";
const Netwrokoptions = [
  {
    value: "BSC",
    label: <div className="react_selct_option_root_div">BSC</div>,
  },
];
const NetworkDropDown = () => {
  const customStyles = {
    menu: () => ({
      background: "black",
      borderRadius: "0.3rem",
      marginTop: "0.5rem",
      position: "absolute",
    }),
    option: () => ({
      background: "none",
      cursor: "pointer",
      borderRadius: "0.4rem",
      padding: "0.5rem",
      zIndex: "10",
    }),
    control: () => ({
      background: "linear-gradient(90.62deg, #212121 1.53%, #141315 120.08%)",
      borderRadius: "30px",
      display: "flex",
      width: "6.5rem",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: () => ({
      display: "flex",
      color: "#787878",
      paddingRight: "0.5rem",
    }),
  };
  return (
    <div className="Crypto_select_option_root_div">
      <Select
        placeholder={<div className="plceholder_react_select">BSC</div>}
        styles={customStyles}
        options={Netwrokoptions}
      />
    </div>
  );
};
export default NetworkDropDown;
