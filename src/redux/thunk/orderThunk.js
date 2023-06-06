import { createAsyncThunk } from "@reduxjs/toolkit";

import { createOrder } from "../../service/apiUsers";

export const createOrderThunk = createAsyncThunk(
   "orders/addOrder",
   async (order) => createOrder(order)
);
