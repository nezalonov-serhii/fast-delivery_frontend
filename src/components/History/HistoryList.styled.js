import styled from "styled-components";

export const HistoryListStyled = styled.ul`
   display: flex;
   flex-direction: column;
   gap: 40px;

   padding: 30px;

   height: calc(100vh - 127px);
   overflow-y: auto;

   &::-webkit-scrollbar {
      width: 15px;
   }
   &::-webkit-scrollbar-track {
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      background: grey;
   }
   &::-webkit-scrollbar-thumb {
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      background-color: rgb(255, 76, 0);
   }

   border-radius: 15px;
   box-shadow: rgb(150, 150, 150) 10px 10px 20px;
   background-color: #fff;
`;

export const HistoryItem = styled.li`
   display: flex;
   gap: 20px;

   padding: 20px;
   border-radius: 15px;
   box-shadow: rgb(150, 150, 150) 10px 10px 20px;
   background-color: #fff;
`;

export const OrderHistoryDescription = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: end;

   flex: 1 1 0;
   padding: 20px 10px 35px;

   & p:last-child {
      border-bottom: 1px solid #000;
   }
`;
