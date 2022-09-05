import React from "react";
import "./Fundings.css";
import ETH from "../Assets/ethereum 3.png";

const Fundings = () => {
  const Currency = ETH;
  const Data = [
    {
      Date: "Jan 20,2022",
      Time: "23:00 PM",
      Action: "Deposit",
      Amount: "0.0000000000",
    },
    {
      Date: "Jan 20,2022",
      Time: "23:00 PM",
      Action: "Deposit",
      Amount: "0.0000000000",
    },
  ];
  return (
    <div className="FundingsContainer">
      <div className="HistoryHeading">History</div>
      <table className="FundingsTable">
        <thead className="FundingsHeading">
          <tr>
            <td>Date</td>
            <td>Time</td>
            <td>Action</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody className="FundingsData">
          {Data.map((item) => (
            <tr>
              <td>
                <div className="DateHeading">Date</div>
                <div className="DateData">{item.Date}</div>
              </td>
              <td>
                <div className="TimeHeading">Time</div>
                <div className="TimeData">{item.Time}</div>
              </td>
              <td>
                <div className="ActionHeading">Action</div>
                <div className="ActionData">{item.Action}</div>
              </td>
              <td>
                <div className="AmountHeading">Amount</div>
                <div className="AmountData">
                  <p className="Amount">{item.Amount}</p>
                  <img className="Logo" src={Currency} alt="Ethereum"></img>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fundings;
