import React from "react";
import Select from "react-select";
import Vector from "./assets/Vector.png";
const customStyles = {
  control: () => ({
    // none of react-select's styles are passed to <Control />
  }),
  menu: () => ({
    borderRadius: "2rem",
    marginTop: "19rem",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? "#11131C" : "#212134",
  }),
  indicatorSeparator: (provided, state) => null,
  dropdownIndicator: (provided, state) => null,
};

const techCompanies = [
  {
    label: (
      <img
        height="40px"
        width="35px"
        style={{ borderRadius: "50%", marginTop: "1.7rem" }}
        src="https://i.postimg.cc/YS05SdwQ/Ethereum.png"
      />
    ),
    value: 1,
  },
  {
    label: (
      <img
        height="40px"
        width="35px"
        style={{ borderRadius: "50%" }}
        src="https://i.postimg.cc/9XYFrPgz/Bitcoin.png"
        alt="#"
      />
    ),
    value: 2,
  },
  {
    label: (
      <img
        height="40px"
        width="35px"
        style={{ borderRadius: "50%" }}
        src="https://i.postimg.cc/J4TrQrLL/Cent.png"
        alt="#"
      />
    ),
    value: 3,
  },
  {
    label: (
      <img
        height="40px"
        width="35px"
        style={{ borderRadius: "50%" }}
        src="https://i.postimg.cc/fyCwpZSY/Average-Price-1.png"
        alt="#"
      />
    ),
    value: 4,
  },
  {
    label: (
      <img
        height="40px"
        width="35px"
        style={{ borderRadius: "50%" }}
        src="https://i.postimg.cc/YS05SdwQ/Ethereum.png"
        alt="#"
      />
    ),
    value: 5,
  },
  {
    label: (
      <img
        height="40px"
        width="35px"
        style={{ borderRadius: "50%" }}
        src="https://i.postimg.cc/YS05SdwQ/Ethereum.png"
        alt="#"
      />
    ),
    value: 6,
  },
];

const Dropdown = () => {
  return (
    <Select
      styles={customStyles}
      placeholder={null}
      clearable={false}
      options={techCompanies}
    />
  );
};

export default Dropdown;
