import { useState } from "react";
import { FormLabel, OrderFormFields, PriceWrap } from "./OrderForm.styled";
import { useDispatch, useSelector } from "react-redux";
import {
   selectOrders,
   selectTotalCost,
   selectTotalDiscount,
} from "../../../redux/selector/selectors";
import { createOrderThunk } from "../../../redux/thunk/orderThunk";
import { clearOrder } from "../../../redux/Slice/ordersSlice";

const OrderForm = () => {
   const totalCost = useSelector(selectTotalCost);
   const totalDiscount = useSelector(selectTotalDiscount);
   const productsOrder = useSelector(selectOrders);

   const dispatch = useDispatch();

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [address, setAddress] = useState("");

   const handlerSubmit = (e) => {
      e.preventDefault();

      const newOrder = {
         name,
         email,
         phone,
         address,
         totalCost,
         totalDiscount,
         productsOrder,
      };

      dispatch(createOrderThunk(newOrder));
      dispatch(clearOrder());

      console.log(productsOrder);
      resetForm();
   };

   const resetForm = () => {
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
   };

   return (
      <OrderFormFields onSubmit={handlerSubmit}>
         <FormLabel>
            <span>Name:*</span>
            <input
               type="text"
               required
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
         </FormLabel>
         <FormLabel>
            <span>Email:*</span>
            <input
               type="email"
               required
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
         </FormLabel>
         <FormLabel>
            <span>Phone:*</span>
            <input
               type="tel"
               required
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
            />
         </FormLabel>
         <FormLabel>
            <span>Address:*</span>
            <input
               type="text"
               required
               value={address}
               onChange={(e) => setAddress(e.target.value)}
            />
         </FormLabel>
         <PriceWrap>
            <p>Price: {totalCost.toFixed(2)} ₴</p>
            <p>Discount: {totalDiscount.toFixed(2)} ₴</p>
         </PriceWrap>
         <button type="submit" disabled={productsOrder.length === 0}>
            Order delivery
         </button>
      </OrderFormFields>
   );
};

export default OrderForm;
