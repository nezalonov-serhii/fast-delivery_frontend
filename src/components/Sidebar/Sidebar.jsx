import { useSelector } from "react-redux";

import {
   selectActiveShopInCart,
   selectMarkets,
} from "../../redux/selector/selectors";

import {
   SidebarItem,
   SidebarLink,
   SidebarList,
   TitleMarket,
} from "./Sidebar.styled";

const Sidebar = () => {
   const markets = useSelector(selectMarkets);
   const activeShopInCart = useSelector(selectActiveShopInCart);

   const storeUrl = {
      king: "https://i.postimg.cc/wMbgD78T/photo-2023-06-06-01-37-40.jpg",
      fries: "https://i.postimg.cc/8z5Bdbsm/photo-2023-06-06-02-14-38.jpg",
      icecream: "https://i.postimg.cc/bJsFrhfk/photo-2023-06-06-02-29-19.jpg",
   };

   return (
      <SidebarList>
         {markets.map((market) => {
            return (
               <SidebarItem
                  key={market}
                  isActive={{ activeShopInCart, currentMarket: market }}
               >
                  {
                     <SidebarLink to={market}>
                        <img src={storeUrl[market]} alt={market} />
                        <TitleMarket>{market}</TitleMarket>
                     </SidebarLink>
                  }
               </SidebarItem>
            );
         })}
      </SidebarList>
   );
};

export default Sidebar;
