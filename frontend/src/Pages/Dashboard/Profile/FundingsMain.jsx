import React from "react";
import Logo from "../Assets/ethereum 3.png";
import "./Profile.css";
import Fundings from "./Fundings";
const FundingsMain = () => {
  return (
      <div className="ProfileBetsContainer" style={{ display: "flex" }}>
        <div style={{ width: "100%"}}>
          <div className="DepositsAndWithDraws">
            <div className="Deposits">
              <p className="DepositsHeading">Deposits</p>
              <div className="DepositAmountAndLogo">
                <p className="DepositAmount">0.0000000</p>
                <img className="Logo" src={Logo} alt="Ethereum"></img>
              </div>
            </div>
            <div className="WithDraws">
              <p className="WithDrawHeading">WithDrawls</p>
              <div className="WithdrawAmountAndLogo">
                <p className="WithdrawAmount">0.0000000</p>
                <img className="Logo" src={Logo} alt="Ethereum"></img>
              </div>
            </div>
          </div>
          <Fundings />
        </div>
      </div>
  );
};

export default FundingsMain;
