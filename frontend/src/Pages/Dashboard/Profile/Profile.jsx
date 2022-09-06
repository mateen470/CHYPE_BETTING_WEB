import React from "react";
import { useSelector } from "react-redux";
import Logo from "../Assets/ethereum 3.png";
import "./Profile.css";
import Dashboard from "./Dashboard";
const ProfileDashboard = () => {
  const updatedCryptoCoin = useSelector(
    (state) => state.dashboardReducer.value
  );
  return (
    <div className="ProfileBetsContainer" style={{ display: "flex" }}>
      <div style={{ width: "100%" }}>
        <div className="DepositsAndWithDraws">
          <div className="Deposits">
            <p className="DepositsHeading">Deposits</p>
            <div className="DepositAmountAndLogo">
              <p className="DepositAmount">0.0000000</p>
              {updatedCryptoCoin.cryptoCoin}
            </div>
          </div>
          <div className="WithDraws">
            <p className="WithDrawHeading">WithDrawls</p>
            <div className="WithdrawAmountAndLogo">
              <p className="WithdrawAmount">0.0000000</p>
              {updatedCryptoCoin.cryptoCoin}
            </div>
          </div>
        </div>
        <Dashboard />
      </div>
    </div>
  );
};

export default ProfileDashboard;
