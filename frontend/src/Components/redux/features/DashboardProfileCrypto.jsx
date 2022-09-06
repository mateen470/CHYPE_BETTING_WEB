import { createSlice } from "@reduxjs/toolkit";
const initialStateDashboardProfile = {
  cryptoCoin: "ETH",
};

export const DashboardProfileSlice = createSlice({
  name: "DashboardProfileCryptoCoin",
  initialState: {
    value: initialStateDashboardProfile,
  },
  reducers: {
    DashboardProfileCryptoCoin: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { DashboardProfileCryptoCoin } = DashboardProfileSlice.actions;
export default DashboardProfileSlice.reducer;
