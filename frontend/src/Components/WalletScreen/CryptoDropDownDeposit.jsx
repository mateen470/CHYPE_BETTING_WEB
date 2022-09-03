import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { depositCurrencyValue } from "../redux/features/DepositCurrency";
import Eth from "./assets/ethereum.png";
import BTC from "./assets/btc.png";

const CryptoDropDownDeposit = () => {
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
      coinValue: "0.1",
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
      coinValue: "0.18",
    },
  ];
  const dispatch = useDispatch();
  const [selectValue, setSelecValue] = useState(options.label);
  const [CoinValue, setCoinValue] = useState(options.coinValue);

  const onChangeDepositCurrency = async (event) => {
    setSelecValue(event.label);
    setCoinValue(event.coinValue);
    dispatch(
      depositCurrencyValue({
        coin: selectValue,
        coinValue: CoinValue,
      })
    );
  };
  useEffect(() => {
    dispatch(
      depositCurrencyValue({
        coin: selectValue,
        coinValue: CoinValue,
      })
    );
  }, [selectValue, CoinValue]);

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
      zIndex: "8",
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
        onChange={onChangeDepositCurrency}
        styles={customStyles}
        options={options}
      />
    </div>
  );
};

export default CryptoDropDownDeposit;
