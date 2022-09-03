import { createSlice } from "@reduxjs/toolkit";
const initialStateDepositWallet = {
  coin: "ETH",
  coinValue: "0.0",
};

export const DepositCurrencySelectorSlice = createSlice({
  name: "depositCurrency",
  initialState: {
    value: initialStateDepositWallet,
  },
  reducers: {
    depositCurrencyValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { depositCurrencyValue } = DepositCurrencySelectorSlice.actions;
export default DepositCurrencySelectorSlice.reducer;
