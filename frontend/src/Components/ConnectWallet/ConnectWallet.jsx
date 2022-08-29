import * as React from "react";
import styled from "styled-components";
import "./ConnectWallet.css";
import { useEffect, useState } from "react";
import Dropdown from "../DropDown/DropDown";

export default function Btn() {
  const Btn = styled.button`
    margin-right: 0%;
    margin-left: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    gap: 10px;
    width: 152px;
    height: 44px;
    background: linear-gradient(96.51deg, #18bbfd -4.59%, #3769fe 100%);
    box-shadow: 0px 4px 15px rgba(88, 74, 255, 0.29);
    border-radius: 10px;
    font-family: "Sf Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    &:hover {
      transform: scale(0.9);
    }

    &::after {
      content: " ";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      width: 100%;
      height: 100%;
      border-radius: 50px;
      transition: all 0.2s ease;
    }

    &:hover::after {
      padding: 0.3rem;
    }
  `;

  const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!");
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const connectWalletButton = () => {
    return <Btn onClick={connectWalletHandler}>Connect Wallet</Btn>;
  };

  const ConnectedButton = () => {
    return (
      <div className="Btn1">
        <div className="Leftdiv">
          <div className="cryptoValue_wallet">
            <p>0.011</p>
          </div>
          {/* <div className="dropdwon_navBar">
            <Dropdown />
          </div> */}
        </div>
        <div className="Rightdiv">WALLET</div>
      </div>
    );
  };

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  return (
    <span>{currentAccount ? ConnectedButton() : connectWalletButton()}</span>
  );
}
