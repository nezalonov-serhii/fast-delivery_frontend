import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SidebarList = styled.ul`
   padding: 20px;
   flex: 1 1 0;
   height: calc(100vh - 117px);
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

export const SidebarItem = styled.li`
   border-radius: 10px;
   overflow: hidden;

   opacity: ${({ isActive }) => {
      if (isActive.activeShopInCart === "") return "1";
      if (isActive.activeShopInCart === isActive.currentMarket) {
         return `1`;
      } else return "0.5";
   }};

   pointer-events: ${({ isActive }) => {
      if (isActive.activeShopInCart === "") return "1";
      if (isActive.activeShopInCart === isActive.currentMarket) {
         return `all`;
      } else return "none";
   }};

   &:not(:last-child) {
      margin-bottom: 20px;
   }
`;

export const SidebarLink = styled(NavLink)`
   position: relative;
   top: 0;
   left: 0;

   & img {
      width: 100%;
      height: 250px;
      object-fit: cover;
   }

   &.active p {
      background-color: rgb(0 176 50 / 70%);
   }
   &:hover p {
      background-color: rgb(0 176 50 / 70%);
   }
`;

export const TitleMarket = styled.p`
   position: absolute;
   bottom: 0;
   left: 50%;
   width: 100%;
   transform: translateX(-50%);

   background-color: rgb(255 76 5 / 60%);

   color: #fff;
   font-size: 25px;
   text-align: center;
   text-transform: uppercase;

   transition: background-color 250ms linear;
`;
