import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useNavigation } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";
import { CartContext } from "../Providers/ContextProviders";

const RootLayout = () => {
  const [carts, setCarts] = useState([]);
  const navigation = useNavigation();

  return (
    <CartContext.Provider value={{ carts, setCarts }}>
      <Navbar></Navbar>
      {navigation?.state === "loading" ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <main className="min-h-[calc(100vh-285px)]">
          <Outlet></Outlet>
        </main>
      )}

      <Footer></Footer>
    </CartContext.Provider>
  );
};

export default RootLayout;
