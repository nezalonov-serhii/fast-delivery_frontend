import styled from "styled-components";

export const OrderFormFields = styled.form`
   display: flex;
   flex-direction: column;

   height: calc(100vh - 117px);
   overflow-y: auto;

   padding: 20px;
   flex: 1 1 0;

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

   & button {
      padding: 5px 20px;

      border: none;
      border-radius: 10px;
      background-color: #ff4c00;

      color: #fff;
      font-size: 20px;

      transition: background-color 250ms linear;

      &:hover {
         background-color: #4d8700;
         animation: 600ms linear 0s infinite alternate bounce;
      }

      &:disabled {
         opacity: 0.6;
         background-color: #ff4c00;
         animation: none;
      }

      @keyframes bounce {
         from {
            transform: scale(1);
         }
         to {
            transform: scale(1.02);
         }
      }
   }
`;

export const FormLabel = styled.label`
   display: flex;

   border-bottom: 2px solid #000;

   font-size: 18px;
   &:not(:last-child) {
      margin-bottom: 40px;
   }

   & span {
      margin-right: 10px;
   }

   & input {
      width: 100%;

      border: none;

      font-size: 18px;
   }
`;

export const PriceWrap = styled.div`
   display: flex;
   justify-content: space-between;
   margin-bottom: 10px;

   & p {
      font-size: 23px;
   }
`;
