import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOrderHistoryThunk } from "../../redux/thunk/orderThunk";
import { HistoryContainer, HistorySection } from "./HistoryPage.styled";
import HistoryList from "../../components/History/HistoryList";

const HistoryPage = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getOrderHistoryThunk());
   }, [dispatch]);

   console.log("1");
   return (
      <HistorySection>
         <HistoryContainer>
            <HistoryList />
         </HistoryContainer>
      </HistorySection>
   );
};

export default HistoryPage;
