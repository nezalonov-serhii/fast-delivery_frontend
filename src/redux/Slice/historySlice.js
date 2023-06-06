import { createSlice } from "@reduxjs/toolkit";

import { getOrderHistoryThunk } from "../thunk/orderThunk";
import { ordersHistoryInitialState } from "../initialState/orderHistory";

const handlePending = (state) => {
   state.isLoading = true;
};

const handleRejected = (state, { error }) => {
   state.error = error;
   state.isLoading = false;
};

const ordersSlice = createSlice({
   name: "orders",
   initialState: ordersHistoryInitialState,

   extraReducers: (builder) => {
      builder
         .addCase(getOrderHistoryThunk.pending, handlePending)
         .addCase(getOrderHistoryThunk.fulfilled, (state, { payload }) => {
            state.totalHistoryOrder = payload;
         })
         .addCase(getOrderHistoryThunk.rejected, handleRejected);
   },
});

export const ordersHistoryReducer = ordersSlice.reducer;
