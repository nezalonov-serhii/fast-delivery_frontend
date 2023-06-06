import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import {
   ButtonDelete,
   InputOrder,
   InputWrap,
   LabelOrder,
   OrderDescription,
   OrderImg,
   OrderItem,
   OrderListStyled,
   ProductsLink,
} from "./OrderList.styled";
import { selectOrders } from "../../../redux/selector/selectors";
import {
   handelCountProduct,
   removeProduct,
} from "../../../redux/Slice/ordersSlice";
import {
   ProductPriceDiscount,
   ProductPriceNoDiscount,
} from "../../MarketProducts/MarketProducts.styled";

const OrderList = () => {
   const orders = useSelector(selectOrders);
   const dispatch = useDispatch();

   const handelCount = (_id, count) => {
      dispatch(handelCountProduct({ _id, count: Number(count) }));
   };

   const onChangeValue = (_id) => {
      const { count } = orders.find((order) => order._id === _id);
      return count;
   };

   return (
      <OrderListStyled>
         {orders.length === 0 && (
            <h2 style={{ textAlign: "center" }}>
               Please add <ProductsLink to="/">Products</ProductsLink> to cart
            </h2>
         )}
         {orders.length !== 0 &&
            orders.map((order) => {
               const priceDiscount = order.price * (1 - order.discount);

               return (
                  <OrderItem key={order._id}>
                     <OrderImg src={order.imageUrl} alt={order.name} />
                     <OrderDescription>
                        <h2>{order.name}</h2>
                        {order.discount && (
                           <ProductPriceDiscount>
                              Price: <span>{order.price.toFixed(2)} ₴</span>
                              {priceDiscount.toFixed(2)} ₴
                           </ProductPriceDiscount>
                        )}
                        {!order.discount && (
                           <ProductPriceNoDiscount discount={order.discount}>
                              Price: {order.price.toFixed(2)} ₴
                           </ProductPriceNoDiscount>
                        )}
                        <InputWrap>
                           <LabelOrder>
                              <span>Quantity</span>
                              <InputOrder
                                 type="number"
                                 min={1}
                                 value={onChangeValue(order._id)}
                                 onChange={(e) =>
                                    handelCount(order._id, e.target.value)
                                 }
                              />
                           </LabelOrder>
                           <ButtonDelete
                              onClick={() => {
                                 dispatch(removeProduct(order._id));
                              }}
                           >
                              <AiOutlineDelete />
                           </ButtonDelete>
                        </InputWrap>
                     </OrderDescription>
                  </OrderItem>
               );
            })}
      </OrderListStyled>
   );
};

export default OrderList;
