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
import {
   selectActiveShopInCart,
   selectOrders,
} from "../../redux/selector/selectors";
import {
   handelCountProduct,
   removeProduct,
} from "../../redux/Slice/ordersSlice";
import {
   ProductPriceDiscount,
   ProductPriceNoDiscount,
} from "../MarketProducts/MarketProducts.styled";
import { toast } from "react-toastify";

const OrderList = () => {
   const orders = useSelector(selectOrders);
   const dispatch = useDispatch();
   const activeShopInCart = useSelector(selectActiveShopInCart);

   const handelCount = (_id, count, name) => {
      dispatch(handelCountProduct({ _id, count: Number(count) }));
      toast.info(`${name} quantity change to ${count}`);
   };

   const onChangeValue = (_id) => {
      const { count } = orders.find((order) => order._id === _id);
      return count;
   };

   const handelDelete = (_id, name) => {
      dispatch(removeProduct(_id));
      toast.error(`${name} remove from order`);
   };

   return (
      <OrderListStyled>
         {orders.length === 0 && (
            <h2 style={{ textAlign: "center" }}>
               Please add{" "}
               <ProductsLink to={activeShopInCart ? activeShopInCart : "/king"}>
                  Products
               </ProductsLink>{" "}
               to cart
            </h2>
         )}
         {orders.length !== 0 &&
            orders.map((order) => {
               const { price, discount, imageUrl, name, _id } = order;
               const priceDiscount = price * (1 - discount);

               return (
                  <OrderItem key={_id}>
                     <OrderImg src={imageUrl} alt={name} />
                     <OrderDescription>
                        <h2>{name}</h2>
                        {discount && (
                           <ProductPriceDiscount>
                              Price: <span>{price.toFixed(2)} ₴</span>
                              {priceDiscount.toFixed(2)} ₴
                           </ProductPriceDiscount>
                        )}
                        {!discount && (
                           <ProductPriceNoDiscount discount={discount}>
                              Price: {price.toFixed(2)} ₴
                           </ProductPriceNoDiscount>
                        )}
                        <InputWrap>
                           <LabelOrder>
                              <span>Quantity</span>
                              <InputOrder
                                 type="number"
                                 min={1}
                                 value={onChangeValue(_id)}
                                 onChange={({ target }) =>
                                    handelCount(_id, target.value, name)
                                 }
                              />
                           </LabelOrder>
                           <ButtonDelete
                              onClick={() => {
                                 handelDelete(_id, name);
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
