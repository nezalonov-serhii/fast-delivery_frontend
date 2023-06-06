import { useSelector } from "react-redux";

import HistoryListProducts from "./HistoryListProducts";

import { selectHistoryOrder } from "../../redux/selector/selectors";

import {
   HistoryItem,
   HistoryListStyled,
   OrderHistoryDescription,
} from "./HistoryList.styled";

const HistoryList = () => {
   const allHistoryOrder = useSelector(selectHistoryOrder);

   return (
      <HistoryListStyled>
         {allHistoryOrder.map((order) => {
            console.log(order);
            return (
               <HistoryItem key={order._id}>
                  <HistoryListProducts productsOrder={order.productsOrder} />
                  <OrderHistoryDescription>
                     <p>Person: {order.name}</p>
                     <div>
                        <p>
                           Total price:{" "}
                           {(order.totalDiscount + order.totalCost).toFixed(2)}₴
                        </p>
                        <p>Discount: {order.totalDiscount.toFixed(2)}₴</p>
                        <p>
                           Total with discount: {order.totalCost.toFixed(2)}₴
                        </p>
                     </div>
                  </OrderHistoryDescription>
               </HistoryItem>
            );
         })}
      </HistoryListStyled>
   );
};

export default HistoryList;
