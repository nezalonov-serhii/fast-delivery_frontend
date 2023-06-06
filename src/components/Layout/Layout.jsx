import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AppBar from "../AppBar/AppBar";

import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
   return (
      <>
         <AppBar />
         <main>
            <Suspense fallback={<p>Loading</p>}>
               <Outlet />
            </Suspense>
         </main>
         <ToastContainer />
      </>
   );
};

export default Layout;
