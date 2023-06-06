import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectMarkets } from "./redux/selector/selectors";

import Layout from "./components/Layout/Layout";
import HomePage from "./Page/HomePage/HomePage";
import OrdersPage from "./Page/OrderPage/OrderPage";
import HistoryPage from "./Page/HistoryPage/HistoryPage";
import MarketProducts from "./components/MarketProducts/MarketProducts";

function App() {
   const markets = useSelector(selectMarkets);

   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />}>
               {markets.map((market) => {
                  return (
                     <Route
                        path={`/:${market}`}
                        key={market}
                        element={<MarketProducts />}
                     />
                  );
               })}
            </Route>
            <Route path="orders" element={<OrdersPage />} />
            <Route path="history" element={<HistoryPage />} />
         </Route>
         <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
   );
}

export default App;
