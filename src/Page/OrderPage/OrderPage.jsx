import OrderForm from "../../components/OrderCard/OrderForm/OrderForm";
import OrderList from "../../components/OrderCard/OrderList/OrderList";
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
