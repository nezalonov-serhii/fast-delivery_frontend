import { createSlice } from "@reduxjs/toolkit";

import { deliveryInitialState } from "../initialState/delivery";
import { getCurrentDeliveryThunk } from "../thunk/deliveryThunk";

const handlePending = (state) => {
   state.isLoading = true;
};

const handleRejected = (state, { error }) => {
   state.error = error;
   state.isLoading = false;
};

const deliverySlice = createSlice({
   name: "delivery",
   initialState: deliveryInitialState,

   extraReducers: (builder) => {
      builder
         .addCase(getCurrentDeliveryThunk.pending, handlePending)
         .addCase(getCurrentDeliveryThunk.fulfilled, (state, { payload }) => {
            state.delivery = payload;
         })
         .addCase(getCurrentDeliveryThunk.rejected, handleRejected);
   },
});

export const deliveryReducer = deliverySlice.reducer;
