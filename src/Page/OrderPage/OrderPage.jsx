import OrderForm from "../../components/OrderForm/OrderForm";
import OrderList from "../../components/OrderList/OrderList";
import { OrdersContainer, OrdersSection } from "./OrderPage.styled";

const OrdersPage = () => {
   return (
      <OrdersSection>
         <OrdersContainer>
            <OrderForm />
            <OrderList />
         </OrdersContainer>
      </OrdersSection>
   );
};

export default OrdersPage;
