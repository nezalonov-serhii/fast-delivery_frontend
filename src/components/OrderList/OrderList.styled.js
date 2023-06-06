import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductsLink = styled(Link)`
   color: #004e9d;
   text-decoration: underline;
`;

export const OrderListStyled = styled.ul`
   height: calc(100vh - 127px);
   overflow-y: auto;

   padding: 20px;
   flex: 2 1 0;

   border-radius: 15px;
   box-shadow: rgb(150, 150, 150) 10px 10px 20px;
   background-color: #fff;

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
`;

export const OrderItem = styled.li`
   display: flex;

   border-radius: 15px;
   overflow: hidden;

   box-shadow: rgb(150, 150, 150) 5px 5px 20px;

   &:not(:last-child) {
      margin-bottom: 15px;
   }
`;

export const OrderImg = styled.img`
   width: 45%;
   height: 170px;

   object-fit: cover;
`;

export const OrderDescription = styled.div`
   flex: 1 1 0;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;

   padding: 20px;
`;

export const InputWrap = styled.div`
   display: flex;
   justify-content: space-between;
`;

export const LabelOrder = styled.label`
   display: flex;
   align-items: self-end;
   border: none;
   border-bottom: 2px solid #000;

   font-size: 20px;
   & span {
      margin-right: 10px;
   }
`;

export const InputOrder = styled.input`
   width: 50px;
   padding-left: 10px;
   border: none;
   background-color: transparent;

   text-align: center;
   font-size: 20px;
`;

export const ButtonDelete = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 5px;

   border: none;
   border-radius: 50%;

   color: #fff;
   background-color: #bc0000;
   font-size: 30px;

   transition: background-color 250ms linear, transform 250ms linear;

   &:hover {
      transform: scale(1.1);
      background-color: #e00000;
   }
`;
