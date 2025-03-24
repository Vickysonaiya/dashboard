import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 
 const baseQuery = fetchBaseQuery({
   baseUrl: process.env.REACT_APP_API_BASE_URL,
   prepareHeaders: (headers, { getState }) => {
     const { token } = getState().auth;
     if (token) {
       headers.set("Authorization", `Bearer ${token}`);
     }
 
     return headers;
   },
 });
 
 export const apiSlice = createApi({
   reducerPath: "api",
   baseQuery: baseQuery,
   endpoints: (builder) => ({
    fetchHostInvites: builder.query({
        query: () => ({
          url: "/invitationDetails/1234567890", //end point
          method: "GET",
        }),
      }),
   }),
 });
 
 export const {
   useFetchHostInvitesQuery,
 } = apiSlice;