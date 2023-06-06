import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCurrentDelivery } from "../../service/apiDelivery";

export const getCurrentDeliveryThunk = createAsyncThunk(
   "delivery/currentDelivery",
   async (category) => {
      if (!category) throw new Error("Please select a market");

      return getCurrentDelivery(category);
   }
);
