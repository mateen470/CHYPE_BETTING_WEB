import { createSlice } from "@reduxjs/toolkit";
const LoginStatus = {
  login: false,
};

export const LoginSlice = createSlice({
  name: "Login",
  initialState: {
    value: LoginStatus,
  },
  reducers: {
    LoginStatusCheck: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { LoginStatusCheck } = LoginSlice.actions;
export default LoginSlice.reducer;
