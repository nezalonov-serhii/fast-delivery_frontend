import styled from "styled-components";

export const HistoryProductsListStyled = styled.ul`
   flex: 4 1 0;
   display: flex;
   flex-wrap: nowrap;
   gap: 20px;
   padding: 20px 10px;
   overflow-x: scroll;

   border-radius: 15px;

   &::-webkit-scrollbar {
      height: 15px;
   }
   &::-webkit-scrollbar-track {
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      background: grey;
   }
   &::-webkit-scrollbar-thumb {
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      background-color: rgb(255, 76, 0);
   }
`;

export const HistoryProductsItem = styled.li`
   display: flex;
   flex-shrink: 0;
   overflow: hidden;

   border-radius: 15px;
   background-color: #fff;

   & img {
      width: 300px;
      object-fit: cover;
   }
`;

export const ProductsDescrWrap = styled.div`
   width: max-content;

   padding: 20px 40px;
   border-top-right-radius: 15px;
   border-bottom-right-radius: 15px;
   border: 1px solid #000;
   border-left: none;
`;
