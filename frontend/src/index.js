import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import WithdrawCurrencySelectorReducer from "./Components/redux/features/CryptoCurrency";
import DepositCurrencySelectorReducer from "./Components/redux/features/DepositCurrency";
import LoginReducer from "./Components/redux/features/Login";
import DashboardProfileReducer from "./Components/redux/features/DashboardProfileCrypto";

const store = configureStore({
  reducer: {
    withdrawReducer: WithdrawCurrencySelectorReducer,
    depositReducer: DepositCurrencySelectorReducer,
    loginReducer: LoginReducer,
    dashboardReducer: DashboardProfileReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
