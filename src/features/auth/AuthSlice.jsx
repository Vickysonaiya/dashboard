import { createSlice } from "@reduxjs/toolkit";
 import { apiSlice } from "../../api/apiSlice";
 
 const initialState = {
   token: localStorage.getItem("token") || null,
   user:
     (localStorage.getItem("user") !== "undefined" &&
       JSON.parse(localStorage.getItem("user"))) ||
     null,
 };
 
 const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
     setCredentials: (state, action) => {
       const { token, user } = action.payload.data;
       state.token = token;
       state.user = user;
       localStorage.setItem("token", token);
       localStorage.setItem("user", JSON.stringify(user));
     },
     logout: (state) => {
       state.token = null;
       state.user = null;
 
       localStorage.removeItem("token");
       localStorage.removeItem("user");
     },
   },
   // extraReducers: (builder) => {
   //   builder
   //     .addMatcher(
   //       apiSlice.endpoints.login.matchFulfilled,
   //       (state, { payload }) => {
   //         state.token = payload.data.token;
   //         state.username = payload.data.username;
   //         // state.user = payload.data.username;
 
   //         localStorage.setItem("token", payload.data.token);
   //         // localStorage.setItem("user", JSON.stringify(payload.data.user));
   //         localStorage.setItem("user", JSON.stringify(payload.data.username));
   //       }
   //     )
   //     .addMatcher(
   //       apiSlice.endpoints.register.matchFulfilled,
   //       (state, { payload }) => {
   //         const { token } = payload.data;
   //         state.token = token;
   //         localStorage.setItem("token", token);
   //       }
   //     );
   // },
 });
 
 export const { setCredentials, logout } = authSlice.actions;
 export default authSlice.reducer;