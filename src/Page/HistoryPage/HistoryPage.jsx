import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderHistoryThunk } from "../../redux/thunk/orderThunk";
import { HistoryContainer, HistorySection } from "./HistoryPage.styled";
import HistoryList from "../../components/History/HistoryList";
import { selectLoadingHistory } from "../../redux/selector/selectors";
import Loader from "../../components/Loader/Loader";
import { Message } from "../HomePage/HomePage.styled";

const HistoryPage = () => {
   const dispatch = useDispatch();
   const isLoading = useSelector(selectLoadingHistory);

   useEffect(() => {
      dispatch(getOrderHistoryThunk());
   }, [dispatch]);

   console.log("1");
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
