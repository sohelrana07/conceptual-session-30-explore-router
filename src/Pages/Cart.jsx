import React, { use } from "react";
import { CartContext } from "../Providers/ContextProviders";

const Cart = () => {
  const { carts, setCarts } = use(CartContext);
  console.log(carts);

  return (
    <div className="min-h-[calc(100vh-285px)] mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {carts.length === 0 ? (
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold flex justify-center items-center col-span-full">
          No Data Available here
        </h3>
      ) : (
        carts.map((cart) => (
          <div key={cart.id} className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{cart.plant.name}</h2>
              <p className="text-justify">{cart.plant.description}</p>
            </div>
            <figure className="h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={cart.plant.image}
                alt="Shoes"
              />
            </figure>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
