import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../components/Loader/Loader";
import HistoryList from "../../components/History/HistoryList";

import { getOrderHistoryThunk } from "../../redux/thunk/orderThunk";
import { selectLoadingHistory } from "../../redux/selector/selectors";

import { HistoryContainer, HistorySection } from "./HistoryPage.styled";
import { Message } from "../HomePage/HomePage.styled";

const HistoryPage = () => {
   const dispatch = useDispatch();
   const isLoading = useSelector(selectLoadingHistory);

   useEffect(() => {
      dispatch(getOrderHistoryThunk());
   }, [dispatch]);

   return (
      <HistorySection>
         <HistoryContainer>
            {!isLoading && <HistoryList />}
            {isLoading && (
               <Message>
                  <Loader />
               </Message>
            )}
         </HistoryContainer>
      </HistorySection>
   );
};

export default HistoryPage;
