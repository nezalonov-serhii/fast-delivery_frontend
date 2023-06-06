import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
   padding: 20px;

   color: #ff4c00;
   background-color: #191919;
   box-shadow: rgb(150, 150, 150) 0px 10px 20px;

   font-size: 18px;
`;

export const HeaderContainer = styled.div`
   width: 1300px;
   margin: 0 auto;
`;

export const HeaderNav = styled.nav`
   display: flex;

   gap: 50px;
`;

export const HeaderLink = styled(Link)`
   transition: color 200ms linear;

   &:hover {
      color: #5ca000;
   }
`;

export const HeaderOrderWrap = styled.div`
   position: relative;
   top: 0;
   left: 0;
`;
export const Counter = styled.span`
   display: flex;
   justify-content: center;
   align-items: center;

   position: absolute;
   top: 0;
   right: 0;

   width: 1.6em;
   height: 1.6em;

   font-size: 16px;

   border-radius: 50%;
   background-color: #ff4c00;
   color: #fff;

   transform: translate(120%, -50%);
`;
