import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Loader from "../../components/Loader/Loader";

import {
   selectCurrentDelivery,
   selectLoading,
} from "../../redux/selector/selectors";

import { HomePageContainer, HomePageSection, Message } from "./HomePage.styled";
import { getCurrentDeliveryThunk } from "../../redux/thunk/deliveryThunk";

const HomePage = () => {
   const products = useSelector(selectCurrentDelivery);
   const isLoading = useSelector(selectLoading);

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
            {products.length === 0 && !isLoading && (
               <Message productEmpty={products.length === 0}>
                  <span>Please select a market</span>
               </Message>
            )}
            {products.length === 0 && isLoading && (
               <Message>
                  <Loader />
               </Message>
            )}
         </HomePageContainer>
      </HomePageSection>
   );
};

export default HomePage;
