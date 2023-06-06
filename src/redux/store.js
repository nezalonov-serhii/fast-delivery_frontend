import { configureStore } from "@reduxjs/toolkit";

import { deliveryReducer } from "./Slice/deliverySlice";
import { ordersReducer } from "./Slice/ordersSlice";

export const store = configureStore({
   reducer: {
      delivery: deliveryReducer,
      orders: ordersReducer,
   },
});
