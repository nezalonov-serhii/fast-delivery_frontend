import { useSelector } from "react-redux";
import { selectHistoryOrder } from "../../redux/selector/selectors";
import {
   HistoryItem,
   HistoryListStyled,
   OrderHistoryDescription,
} from "./HistoryList.styled";
import HistoryListProducts from "./HistoryListProducts";

const HistoryList = () => {
   const allHistoryOrder = useSelector(selectHistoryOrder);

   return (
      <HistoryListStyled>
         {allHistoryOrder.map((order) => {
            return (
               <HistoryItem key={order._id}>
                  <HistoryListProducts productsOrder={order.productsOrder} />
                  <OrderHistoryDescription>
                     <p>
                        Total price:{" "}
                        {(order.totalDiscount + order.totalCost).toFixed(2)}₴
                     </p>
                     <p>Discount: {order.totalDiscount.toFixed(2)}₴</p>
                     <p>With discount: {order.totalCost.toFixed(2)}₴</p>
                  </OrderHistoryDescription>
               </HistoryItem>
            );
         })}
      </HistoryListStyled>
   );
};

export default HistoryList;
