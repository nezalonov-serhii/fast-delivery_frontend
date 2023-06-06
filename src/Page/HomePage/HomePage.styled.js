import styled from "styled-components";

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
   height: calc(100vh - 127px);
   display: flex;
   justify-content: center;
   padding: 20px;
   flex: 3 1 0;
   font-size: 30px;
   font-weight: 500;

   border-radius: 15px;
   box-shadow: rgb(150, 150, 150) 10px 10px 20px;
   background-color: #fff;
`;
