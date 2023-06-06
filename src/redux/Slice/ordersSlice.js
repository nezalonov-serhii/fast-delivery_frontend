import { createSlice } from "@reduxjs/toolkit";

import { ordersInitialState } from "../initialState/orders";
import { createOrderThunk } from "../thunk/orderThunk";

const getTotalCoast = (state) => {
   state.totalCost = state.products
      .filter((product) => product.count)
      .reduce((sum, product) => {
         if (product.discount) {
            const newPrice = product.price * (1 - product.discount);
            return product.count * newPrice + sum;
         } else {
            return product.count * product.price + sum;
         }
      }, 0);
};

const getTotalDiscount = (state) => {
   state.totalDiscount = state.products
      .filter((product) => product.discount)
      .reduce((sum, product) => {
         let newPrice = (product.price * (1 - product.discount)).toFixed(2);

         return (product.price - newPrice) * product.count + sum;
      }, 0);
};

const getTotalCount = (state) => {
   state.totalCount = state.products
      .filter(({ count }) => !isNaN(count))
      .reduce((sum, { count }) => Number(count) + sum, 0);
};

const setInOrder = (state, payload) => {
   const currentProduct = state.products.find(
      (product) => product._id === payload._id
   );

   currentProduct.inOrder = payload.inOrder;
};

const handlePending = (state) => {
   state.isLoading = true;
};

const handleRejected = (state, { error }) => {
   state.error = error;
   state.isLoading = false;
};

const ordersSlice = createSlice({
   name: "orders",
   initialState: ordersInitialState,

   reducers: {
      addProductToCart: (state, { payload }) => {
         state.products = [...state.products, payload.product];

         getTotalCoast(state);
         getTotalDiscount(state);
         getTotalCount(state);
         setInOrder(state, payload);
      },
      handelCountProduct: (state, { payload }) => {
         const order = state.products.find(
            (product) => product._id === payload._id
         );
         order.count = payload.count;

         getTotalCoast(state);
         getTotalDiscount(state);
         getTotalCount(state);
      },
      removeProduct: (state, { payload }) => {
         const indexOrder = state.products.findIndex(
            (product) => product._id === payload
         );

         state.products.splice(indexOrder, 1);
         if (state.products.length === 0) state.isShopActive = "";

         getTotalCoast(state);
         getTotalDiscount(state);
         getTotalCount(state);
      },
      setActiveShopInCart: (state, { payload }) => {
         state.isShopActive = payload;
      },

      clearOrder: (state) => {
         state.products = [];
         state.totalCount = 0;
         state.totalCost = 0;
         state.totalDiscount = 0;
         state.isShopActive = "";
         state.isShopActive = "";
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(createOrderThunk.pending, handlePending)
         .addCase(createOrderThunk.fulfilled, (state, { payload }) => {
            console.log(payload);
         })
         .addCase(createOrderThunk.rejected, handleRejected);
   },
});

export const {
   addProductToCart,
   handelCountProduct,
   removeProduct,
   clearOrder,
   setActiveShopInCart,
} = ordersSlice.actions;

export const ordersReducer = ordersSlice.reducer;
