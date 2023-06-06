import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCurrentDelivery } from "../../service/apiUsers";

export const getCurrentDeliveryThunk = createAsyncThunk(
   "delivery/currentDelivery",
   async (category) => getCurrentDelivery(category)
);
