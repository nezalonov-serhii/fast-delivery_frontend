import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";

import { selectCurrentDelivery } from "../../redux/selector/selectors";

import { HomePageContainer, HomePageSection, Message } from "./HomePage.styled";
import { useEffect } from "react";
import { getCurrentDeliveryThunk } from "../../redux/thunk/deliveryThunk";
import Sidebar from "../../components/Sidebar/Sidebar";

const HomePage = () => {
   const products = useSelector(selectCurrentDelivery);

   const market = useParams();
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getCurrentDeliveryThunk(market.king));
   }, [dispatch, market]);

   return (
      <HomePageSection>
         <HomePageContainer>
            <Sidebar />
            {products.length !== 0 && <Outlet />}
            {products.length === 0 && <Message>Please select a market</Message>}
         </HomePageContainer>
      </HomePageSection>
   );
};

export default HomePage;
