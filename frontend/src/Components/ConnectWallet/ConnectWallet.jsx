import * as React from "react";
import styled from "styled-components";
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
  const Btn1 = styled.div`
    display: inline-block;
    background: rgba(64, 64, 64, 0.36);
    border: 1px solid rgba(216, 216, 216, 0.68);
    border-radius: 4px;
    color: white;
    gap: 10px;
    width: auto;
    height: 48px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    line-height: 24px;
    position: relative;
  `;

  const Rightdiv = styled.div`
    width: auto;
    float: right;
    display: inline-block;
  `;
  const Leftdiv = styled.div`
    display: inline-block;
    min-width: 0%;
    color: black;
    float: left;
    font-family: Poppins;
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
      <Btn1>
        <Leftdiv>
          {/* <img src="https://i.postimg.cc/YS05SdwQ/Ethereum.png" /> */}
          <div style={{ float: "left", color: "white" }}>
            <p
              style={{
                marginTop: "0.7rem",
                fontSize: "17px",
                fontWeight: "600",
              }}
            >
              0.011
            </p>
          </div>
          <div
            style={{
              marginTop: "0.15rem",
              marginLeft: "2.2rem",
              marginRight: "0.5rem",
            }}
          >
            <Dropdown />
          </div>
        </Leftdiv>
        <Rightdiv>
          <img
            style={{
              backgroundColor: "#6966FF",
              marginTop: "0.3rem",
              borderRadius: "5px",
              padding: "0.2rem",
            }}
            src="https://i.postimg.cc/X7x1y9LL/Coin-Wallet.png"
            alt="#"
          />
        </Rightdiv>
      </Btn1>
    );
  };

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  return (
    <span>{currentAccount ? ConnectedButton() : connectWalletButton()}</span>
  );
}
