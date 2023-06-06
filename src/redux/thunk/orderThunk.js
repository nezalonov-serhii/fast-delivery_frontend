import { createAsyncThunk } from "@reduxjs/toolkit";

import { createOrder, getAllOrder } from "../../service/apiDelivery";

export const getOrderHistoryThunk = createAsyncThunk(
   "orders/getOrder",
   async () => getAllOrder()
);

export const createOrderThunk = createAsyncThunk(
   "orders/addOrder",
   async (order) => createOrder(order)
);
