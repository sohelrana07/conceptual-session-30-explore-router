import React, { use, useState } from "react";
import { CartContext } from "../Providers/ContextProviders";
import { Navigate } from "react-router";

const Cart = () => {
  const [visitHome, setVisitHome] = useState(false);
  const { carts, setCarts } = use(CartContext);

  if (visitHome) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div className="min-h-[calc(100vh-285px)] mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {carts.length === 0 ? (
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold flex justify-center items-center col-span-full">
          No Data Available Here...
        </h3>
      ) : (
        carts.map((cart) => (
          <div key={cart.id} className="card bg-base-100 shadow-sm h-fit">
            <figure className="h-48 overflow-hidden rounded-tl-xl rounded-tr-xl">
              <img
                className="w-full h-full object-cover"
                src={cart.plant.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{cart.plant.name}</h2>
              <p className="text-justify">{cart.plant.description}</p>
            </div>
            <button
              onClick={() => setVisitHome(true)}
              className="btn btn-primary mx-6 mb-5"
            >
              Go Home
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
