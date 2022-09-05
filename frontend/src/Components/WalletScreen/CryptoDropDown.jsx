import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { currencyValue } from "../redux/features/CryptoCurrency";
import Eth from "./assets/ethereum.png";
import BTC from "./assets/btc.png";
const CryptoDropDown = () => {
  const options = [
    {
      id: 0,
      label: (
        <div style={{ display: "inline-block" }}>
          <span className="react_selct_option_root_div">
            ETH
            <img
              style={{
                padding: "0rem 0.3rem",
                height: "1.5rem",
                width: "2rem",
              }}
              src={Eth}
            />
          </span>
        </div>
      ),
      minimumValue: "0.012",
      subtractedValue: "1.0321",
      coinValue: (
        <div style={{ display: "inline-block" }}>
          <span className="react_selct_option_root_div">
            12345
            <img
              style={{
                padding: "0rem 0.3rem",
                height: "1.5rem",
                width: "2rem",
              }}
              src={Eth}
            />
          </span>
        </div>
      ),
      coinImage: (
        <div style={{ display: "inline-block", padding: "0rem" }}>
          <img src={Eth} />
        </div>
      ),
    },
    {
      id: 1,
      label: (
        <div style={{ display: "inline-block" }}>
          <span className="react_selct_option_root_div">
            BTC
            <img
              style={{
                height: "1.5rem",
                width: "2rem",
                padding: "0rem 0.2rem",
                background: "none",
                borderRadius: "50%",
              }}
              src={BTC}
            />
          </span>
        </div>
      ),
      minimumValue: "0.01765",
      subtractedValue: "1.0",
      coinValue: (
        <div style={{ display: "inline-block" }}>
          <span className="react_selct_option_root_div">
            54321
            <img
              style={{
                height: "1.5rem",
                width: "2rem",
                padding: "0rem 0.2rem",
                background: "none",
                borderRadius: "50%",
              }}
              src={BTC}
            />
          </span>
        </div>
      ),
      coinImage: (
        <div>
          <img
            src={BTC}
            style={{
              display: "inline-block",
              padding: "0rem",
              width: "1.5rem",
              height: "1.5rem",
              borderRadius: "50%",
            }}
          />
        </div>
      ),
    },
  ];
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState(options.label);
  const [minimumValue, setMinimumValue] = useState(options.minimumValue);
  const [cryptoCoinValue, setCoinValue] = useState(options.coinValue);
  const [coinImage, setCoinImage] = useState(options.coinImage);
  const [subtractedValue, setSubtractedValue] = useState(
    options.subtractedValue
  );

  const onChangeCurrency = async (event) => {
    setSelectedValue(event.label);
    setMinimumValue(event.minimumValue);
    setSubtractedValue(event.subtractedValue);
    setCoinValue(event.coinValue);
    setCoinImage(event.coinImage);
    dispatch(
      currencyValue({
        currency: selectedValue,
        minimumAmount: minimumValue,
        subtractedAmount: subtractedValue,
        coinValue: cryptoCoinValue,
        coinImage: coinImage,
      })
    );
  };
  useEffect(() => {
    dispatch(
      currencyValue({
        currency: selectedValue,
        minimumAmount: minimumValue,
        subtractedAmount: subtractedValue,
        coinValue: cryptoCoinValue,
        coinImage: coinImage,
      })
    );
  }, [
    selectedValue,
    minimumValue,
    subtractedValue,
    cryptoCoinValue,
    coinImage,
  ]);

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
    <div className="Crypto_select_option_root_div">
      <Select
        placeholder={
          <div className="plceholder_react_select">
            0.0000 <img style={{ height: "1rem", width: "1rem" }} src={Eth} />
          </div>
        }
        onChange={onChangeCurrency}
        styles={customStyles}
        options={options}
      />
    </div>
  );
};

export default CryptoDropDown;
