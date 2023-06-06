import styled from "styled-components";
import bg from "../../img/bg-order.jpg";

export const HomePageSection = styled.section`
   padding: 30px 0;
`;

export const HomePageContainer = styled.div`
   display: flex;

   gap: 30px;

   width: 1300px;
   margin: 0 auto;
`;

export const Message = styled.div`
   position: relative;
   height: calc(100vh - 127px);
   display: flex;
   justify-content: center;
   padding: 20px;
   flex: 3 1 0;

   overflow: hidden;

   border-radius: 15px;
   box-shadow: rgb(150, 150, 150) 10px 10px 20px;
   background-color: #fff;

   & span {
      position: relative;
      font-size: 30px;
      font-weight: 500;
      color: #343434;
   }

   ${({ productEmpty }) => {
      if (productEmpty)
         return `&::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${bg});
      background-size: cover;
      background-position: center;
      `;
   }};
`;
