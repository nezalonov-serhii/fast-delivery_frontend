export const selectCurrentDelivery = ({ delivery }) => delivery.delivery;
export const selectMarkets = ({ delivery }) => delivery.markets;
export const selectLoading = ({ delivery }) => delivery.isLoading;

export const selectOrders = ({ orders }) => orders.products;
export const selectTotalCost = ({ orders }) => orders.totalCost;
export const selectTotalDiscount = ({ orders }) => orders.totalDiscount;
export const selectTotalCount = ({ orders }) => orders.totalCount;
export const selectActiveShopInCart = ({ orders }) => orders.isShopActive;

export const selectHistoryOrder = ({ ordersHistory }) =>
   ordersHistory.totalHistoryOrder;
