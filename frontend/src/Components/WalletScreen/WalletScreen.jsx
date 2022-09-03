import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { QRCodeSVG } from "qrcode.react";
import { useSelector } from "react-redux";

import Cross from "./assets/cross.png";
import clipboardIcon from "./assets/clipboard.png";
import reloadIcon from "./assets/reload.png";
import CryptoDropDown from "./CryptoDropDown";
import NetworkDropDown from "./NetworkDropDown";
import NetworkDropDownDeposit from "./NetworkDropDownDeposit";
import CryptoDropDownDeposit from "./CryptoDropDownDeposit";
import Counter from "./Counter";
import "./Wallet.css";
import { useEffect } from "react";
const HomePage = () => {
  const withdrawCurrency = useSelector((state) => state.withdrawReducer.value);
  const depositCurrency = useSelector((state) => state.depositReducer.value);
  const [toggleWithdrawScreen, setToggleWithdrawScreen] = useState("block");
  const [toggleDepositScreen, setToggleDepositScreen] = useState("none");
  const [closeWalletScreen, setcloseWalletScreen] = useState("flex");
  const [activeClassBorderWithdraw, setActiveClassBorderWithdraw] =
    useState("3px solid #356dfe");
  const [activeClassBorderDeposit, setActiveClassBorderDeposit] = useState("");
  const [BTCdepositAddress, setBTCdepositAddress] = useState("0.0000000");
  const [cryptoAdressWithdrawal, setCryptoAdressWithdrawal] = useState("");
  const [BTCcheck, setBTCcheck] = useState(true);
  const [BTCcheckDeposit, setBTCcheckDeposit] = useState(true);

  const toggleWithDrawScreenFunction = () => {
    setToggleWithdrawScreen("block");
    setToggleDepositScreen("none");
    setActiveClassBorderWithdraw("3px solid #356dfe");
    setActiveClassBorderDeposit("");
  };
  const toggleDepositScreenFunction = () => {
    setToggleWithdrawScreen("none");
    setToggleDepositScreen("block");
    setActiveClassBorderDeposit("3px solid #356dfe");
    setActiveClassBorderWithdraw("");
  };
  // THE DISPLAY OF NETWROK DROPDOWN WOUL NOT
  // BE SHOWN IF BTC IS SLECTD,
  // SO FOR THAT, I GAVE HARDCODED VALUE OF MINIMIUM WITHDRAWL
  // AMOUNT TO EACH COIN AND HERE I AM CHECKING F0R
  // MINIMUM VALUE OF BTC, SO IF THE MINIMUM VALUE IS OF
  // BTC, THAT WOUDL MEAN THAT BTC IS SELECTED, SO I WOULD
  // HIDE THE NETWROK DROP-DOWN.
  // SO WHENEVER CHANGE THE MINIMUM VALUE OF BTC, DO
  // CHANGE IT IN THIS FUNCTION AS WELL
  useEffect(() => {
    const checkForBTC = () => {
      if (withdrawCurrency.minimumAmount === "0.01765") {
        setBTCcheck(false);
        console.log(BTCcheck);
      } else setBTCcheck(true);
    };

    const checkForBTCDeposit = () => {
      if (depositCurrency.coinValue === "0.18") {
        setBTCcheckDeposit(false);
        console.log(BTCcheck);
      } else setBTCcheckDeposit(true);
    };

    checkForBTC();
    checkForBTCDeposit();
  });

  const CreateText = () => {
    setBTCdepositAddress((Math.random() * 67.908656).toString(36).substring(1));
  };

  const closeWalletScreenFunction = () => {
    setcloseWalletScreen("none");
  };
  return (
    <div style={{ display: closeWalletScreen }} className="root_div_wallet">
      <div className="main_div_wallet">
        <div className="walletH1_crossSign">
          <h1>Wallet</h1>
          <button onClick={closeWalletScreenFunction}>
            <img src={Cross} alt="CROSSICON" />
          </button>
        </div>

        <div className="navigationOfWallet">
          <button
            onClick={toggleWithDrawScreenFunction}
            style={{ borderBottom: activeClassBorderWithdraw }}
          >
            WITHDRAW
          </button>
          <button
            onClick={toggleDepositScreenFunction}
            style={{ borderBottom: activeClassBorderDeposit }}
          >
            DEPOSIT
          </button>
        </div>

        <div
          className="withdrawScreen_portion"
          style={{
            display: toggleWithdrawScreen,
          }}
        >
          <div className="dropDown_wallet_root_div">
            <div className="dropDownCrypto_div">
              <label htmlFor="dropDownCrypto">Currency</label>
              <CryptoDropDown id="dropDownCrypto" />
            </div>
            {BTCcheck && (
              <div className="dropDownNetwrok_div">
                <label htmlFor="dropDownNetwork">Network</label>
                <NetworkDropDown id="dropDownNetwork" />
              </div>
            )}
          </div>
          <div className="address_of_crypto">
            <label htmlFor="input_Crypto_address">
              {withdrawCurrency.currency}
              Address
            </label>
            <input
              id="input_Crypto_address"
              value={cryptoAdressWithdrawal}
              onChange={(e) => setCryptoAdressWithdrawal(e.target.value)}
              placeholder="Address"
            />
          </div>
          <div className="amount_Counter_root_div">
            <label htmlFor="amount_counter">Amount</label>
            <div id="amount_counter" className="counter_amount">
              <Counter props={withdrawCurrency.currency} />
            </div>
          </div>

          <div className="term_condition_text">
            <span>
              Minimum withdrawal is {withdrawCurrency.minimumAmount}
              {withdrawCurrency.currency} Your withdrawal will have
              {withdrawCurrency.subtractedAmount} {withdrawCurrency.currency}{" "}
              subtracted from your remaining balance to cover the fee required
              to process the transaction.
            </span>
          </div>

          <div className="withdraw_btn">
            <button>Withdraw</button>
          </div>
        </div>

        <div
          className="DepositScreen_portion"
          style={{ display: toggleDepositScreen }}
        >
          <div className="dropDown_wallet_root_div">
            <div className="dropDownCrypto_div">
              <label htmlFor="dropDownCrypto">Currency</label>
              <CryptoDropDownDeposit id="dropDownCrypto" />
            </div>
            {BTCcheckDeposit && (
              <div className="dropDownNetwrok_div">
                <label htmlFor="dropDownNetwork">Network</label>
                <NetworkDropDownDeposit id="dropDownNetwork" />
              </div>
            )}
          </div>
          <label
            htmlFor="btc_adres"
            className="label_for_btc_deposit_address_input"
          >
            Your {depositCurrency.coin} Deposit Address
          </label>
          <div className="btc_deposit_address">
            <div className="btc_deposit_address_input">
              <input value={BTCdepositAddress} />
              <div className="btns_inside_btc_deposit_address_input">
                <button
                  className="btn1_of_btc_address_input"
                  onClick={CreateText}
                >
                  <img src={reloadIcon} alt="reload icon" />
                </button>
                <CopyToClipboard text={BTCdepositAddress}>
                  <button className="btn2_of_btc_address_input">
                    <img src={clipboardIcon} alt="clipboard icon" />
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
          <div className="QR_code_root_div">
            <QRCodeSVG value={BTCdepositAddress} />
          </div>
          <div className="text_below_qr_code">
            Only send {depositCurrency.coin} to this address, 2 confirmation
            required
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
