import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCurrentDelivery } from "../../service/apiDelivery";

export const getCurrentDeliveryThunk = createAsyncThunk(
   "delivery/currentDelivery",
   async (category) => getCurrentDelivery(category)
);
