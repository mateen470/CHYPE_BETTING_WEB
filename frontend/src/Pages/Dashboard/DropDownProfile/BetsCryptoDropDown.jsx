import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { DashboardProfileCryptoCoin } from "../../../Components/redux/features/DashboardProfileCrypto";
import Select from "react-select";
import Eth from "../Assets/ethereum.png";
import BTC from "../Assets/btc.png";
const BetsCryptoDropDown = () => {
  const options = [
    {
      id: 0,
      label: (
        <div style={{ display: "inline-block" }}>
          <span className="react_selct_option_root_div_dashboard">
            ETH
            <img style={{ height: "1.5vw", width: "1.5vw" }} src={Eth} />
          </span>
        </div>
      ),
      image: (
        <div style={{ display: "inline-block" }}>
          <img
            style={{ margin: "0.2rem 0.5rem", height: "2", width: "2" }}
            src={Eth}
          />
        </div>
      ),
    },
    {
      id: 1,
      label: (
        <div style={{ display: "inline-block" }}>
          <span className="react_selct_option_root_div_dashboard">
            BTC
            <img
              style={{
                height: "1.5vw",
                width: "1.5vw",
                background: "none",
                borderRadius: "50%",
              }}
              src={BTC}
            />
          </span>
        </div>
      ),
      image: (
        <div style={{ display: "inline-block" }}>
          <img
            style={{
              margin: "0.2rem 0.5rem",
              height: "2vw",
              width: "2vw",
              background: "none",
              borderRadius: "50%",
            }}
            src={BTC}
          />
        </div>
      ),
    },
  ];
  const dispatch = useDispatch();
  const [CurrencyDashboardProfile, setCurrencyDashboardProfile] = useState(
    options.image
  );
  const onChangeCryptoCoin = (event) => {
    setCurrencyDashboardProfile(event.image);
    dispatch(
      DashboardProfileCryptoCoin({
        cryptoCoin: CurrencyDashboardProfile,
      })
    );
  };
  useEffect(() => {
    dispatch(
      DashboardProfileCryptoCoin({
        cryptoCoin: CurrencyDashboardProfile,
      })
    );
  }, [CurrencyDashboardProfile]);
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
      width: "12vw",
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
          <div className="plceholder_react_select_dashboard">
            ETH <img style={{ height: "1.5vw", width: "1.5vw" }} src={Eth} />
          </div>
        }
        onChange={onChangeCryptoCoin}
        styles={customStyles}
        options={options}
      />
    </div>
  );
};

export default BetsCryptoDropDown;
