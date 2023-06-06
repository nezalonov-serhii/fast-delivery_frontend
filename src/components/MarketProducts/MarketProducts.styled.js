import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductList = styled.ul`
   display: flex;
   flex-wrap: wrap;
   gap: 20px;
   height: calc(100vh - 117px);
   overflow-y: auto;

   padding: 20px;
   flex: 3 1 0;

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

export const ProductItem = styled.li`
   flex-basis: calc((100% - 20px) / 2);
   overflow: hidden;

   padding-bottom: 15px;

   border-radius: 15px;
   box-shadow: rgb(150, 150, 150) 5px 5px 20px;
   background-color: #fff;
`;

export const ProductImgContainer = styled.div`
   position: relative;
   top: 0;
   right: 0;
   margin-bottom: 8px;

   overflow: hidden;

   width: 100%;
   height: 250px;
   object-fit: cover;
`;

export const ProductCategory = styled.p`
   position: absolute;
   top: 0;
   right: 0;
   padding: 5px 8px;
   min-width: 100px;

   border-bottom-left-radius: 15px;

   background-color: ${({ category }) => {
      if (category === "New") return `#e85500`;
      else if (category === "Discount") return "#4d8700";
      else if (category === "Hot") return "#c51d00";
   }};

   text-align: center;
   color: #fff;
`;

export const ProductImg = styled.img`
   width: 100%;
   height: 250px;
   object-fit: cover;
`;

export const ProductTittle = styled.p`
   margin-bottom: 5px;
   padding: 0 20px;

   font-size: 22px;
`;

export const ProductOrderContainer = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 0 20px;
`;

export const ProductPriceDiscount = styled.p`
   font-size: 28px;

   & span {
      margin-right: 10px;

      font-size: 22px;
      text-decoration: line-through;
   }
`;

export const ProductPriceNoDiscount = styled.p`
   font-size: 28px;
`;

export const ProductBtn = styled.button`
   padding: 5px 20px;
   min-width: 160px;

   border: none;
   border-radius: 10px;
   background-color: #ff4c00;

   color: #fff;
   font-size: 20px;

   transition: background-color 250ms linear;

   &:hover {
      background-color: #4d8700;
      animation: 750ms linear 0s infinite alternate bounce;
   }

   @keyframes bounce {
      from {
         transform: scale(1);
      }
      to {
         transform: scale(1.05);
      }
   }
`;

export const ProductLink = styled(Link)`
   padding: 5px 20px;

   border: none;
   border-radius: 10px;
   background-color: #4d8700;

   color: #fff;
   font-size: 20px;

   transition: background-color 250ms linear;

   &:hover {
      background-color: #ff4c00;

      animation: 750ms linear 0s infinite alternate bounce;
   }

   @keyframes bounce {
      from {
         transform: scale(1);
      }
      to {
         transform: scale(1.05);
      }
   }
`;
