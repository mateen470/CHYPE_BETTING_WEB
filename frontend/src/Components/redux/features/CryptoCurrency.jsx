import { createSlice } from "@reduxjs/toolkit";
// THERE WILL BE TWO SLICES, ONE FOR THE WITHDRAW
// SCREEN CURRENCY SELECTOR AND
//  ONE FOR THE DEPOSIT SCREEN CURRENCY SELECTOR
const initialStateValue = {
  currency: "ETH",
  minimumAmount: "0.00000",
  subtractedAmount: "0.0000",
  coinValue:"0.0000"
};

export const WithdrawCurrencySelectorSlice = createSlice({
  name: "withdrawCurrency",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    currencyValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { currencyValue } = WithdrawCurrencySelectorSlice.actions;

export default WithdrawCurrencySelectorSlice.reducer;
