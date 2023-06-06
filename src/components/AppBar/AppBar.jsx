import { useSelector } from "react-redux";

import {
   selectActiveShopInCart,
   selectTotalCount,
} from "../../redux/selector/selectors";

import {
   Counter,
   Header,
   HeaderContainer,
   HeaderLink,
   HeaderNav,
   HeaderOrderWrap,
} from "./AppBar.styled";

const AppBar = () => {
   const totalCount = useSelector(selectTotalCount);
   const activeShopInCart = useSelector(selectActiveShopInCart);

   return (
      <Header>
         <HeaderContainer>
            <HeaderNav>
               <HeaderLink to={activeShopInCart ? activeShopInCart : "/king"}>
                  Home
               </HeaderLink>
               <HeaderOrderWrap>
                  <HeaderLink to="/orders">Orders card</HeaderLink>
                  {totalCount !== 0 && <Counter>{totalCount}</Counter>}
               </HeaderOrderWrap>
               <HeaderLink to="/history">History</HeaderLink>
            </HeaderNav>
         </HeaderContainer>
      </Header>
   );
};

export default AppBar;
