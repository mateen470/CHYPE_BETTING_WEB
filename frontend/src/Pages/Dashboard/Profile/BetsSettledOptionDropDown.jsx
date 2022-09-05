import React from "react";
import Select from "react-select";
const BetsSettledOptionDropDown = () => {
  const options = [
    {
      id: 0,
      label: (
        <span className="react_selct_option_root_div_dashboard">
          Not Settled
        </span>
      ),
    },
    {
      id: 1,
      label: (
        <span className="react_selct_option_root_div_dashboard">Settled</span>
      ),
    },
  ];

  const customStyles = {
    menu: () => ({
      background: "linear-gradient(90.45deg, #1CB1FD 0%, #356DFE 100%)",
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
      width: "8rem",
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
    <div className="Crypto_select_option_root_div_dashboard">
      <Select
        placeholder={
          <div className="plceholder_react_select_dashboard">SETTLED</div>
        }
        styles={customStyles}
        options={options}
      />
    </div>
  );
};

export default BetsSettledOptionDropDown;
