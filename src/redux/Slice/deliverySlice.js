import { createSlice } from "@reduxjs/toolkit";

import { deliveryInitialState } from "../initialState/delivery";
import { getCurrentDeliveryThunk } from "../thunk/deliveryThunk";

const handlePending = (state) => {
   state.isLoading = true;
   state.delivery = [];
};

const handleRejected = (state, { error }) => {
   state.error = error;
   state.isLoading = false;
};

const handleFulfilled = (state, { payload }) => {
   state.delivery = payload;
   state.error = null;
   state.isLoading = false;
};

const deliverySlice = createSlice({
   name: "delivery",
   initialState: deliveryInitialState,

   extraReducers: (builder) => {
      builder
         .addCase(getCurrentDeliveryThunk.pending, handlePending)
         .addCase(getCurrentDeliveryThunk.fulfilled, handleFulfilled)
         .addCase(getCurrentDeliveryThunk.rejected, handleRejected);
   },
});

export const deliveryReducer = deliverySlice.reducer;
