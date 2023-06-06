import {
   selectCurrentDelivery,
   selectOrders,
} from "../../redux/selector/selectors";
import { useDispatch, useSelector } from "react-redux";

import {
   ProductBtn,
   ProductCategory,
   ProductImg,
   ProductImgContainer,
   ProductItem,
   ProductLink,
   ProductList,
   ProductOrderContainer,
   ProductPriceDiscount,
   ProductPriceNoDiscount,
   ProductTittle,
} from "./MarketProducts.styled";
import {
   addProductToCart,
   setActiveShopInCart,
} from "../../redux/Slice/ordersSlice";

const MarketProducts = () => {
   const currentDelivery = useSelector(selectCurrentDelivery);
   const orders = useSelector(selectOrders);

   const dispatch = useDispatch();

   const addToOrder = (order) => {
      const { name, _id, price, discount, imageUrl, category, market } = order;
      const product = {
         _id,
         name,
         imageUrl,
         price,
         discount,
         category,
         count: 1,
         inOrder: true,
      };

      dispatch(addProductToCart({ product, _id }));
      dispatch(setActiveShopInCart(market));
   };

   const checkProductInOrders = (_id) =>
      orders.find((order) => order._id === _id);

   return (
      <ProductList>
         {currentDelivery.map((order) => {
            const { name, _id, price, discount, imageUrl, category } = order;
            const priceDiscount = price * (1 - discount);
            return (
               <ProductItem key={_id}>
                  <ProductImgContainer>
                     <ProductImg src={imageUrl} alt={name} />
                     <ProductCategory category={category}>
                        {category}
                     </ProductCategory>
                  </ProductImgContainer>
                  <ProductTittle>{name}</ProductTittle>
                  <ProductOrderContainer>
                     {discount && (
                        <ProductPriceDiscount>
                           <span>{price.toFixed(2)} ₴</span>
                           {priceDiscount.toFixed(2)} ₴
                        </ProductPriceDiscount>
                     )}
                     {!discount && (
                        <ProductPriceNoDiscount discount={discount}>
                           {price.toFixed(2)} ₴
                        </ProductPriceNoDiscount>
                     )}
                     {!checkProductInOrders(_id) && (
                        <ProductBtn
                           onClick={() => {
                              addToOrder(order);
                           }}
                        >
                           Add to card
                        </ProductBtn>
                     )}
                     {checkProductInOrders(_id) && (
                        <ProductLink to="/orders">To order card</ProductLink>
                     )}
                  </ProductOrderContainer>
               </ProductItem>
            );
         })}
      </ProductList>
   );
};

export default MarketProducts;
