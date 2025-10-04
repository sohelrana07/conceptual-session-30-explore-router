// import React, { useEffect, useState } from "react";
import { useContext, useState } from "react";
import { CartContext } from "../Providers/ContextProviders";
import { useLoaderData, useLocation } from "react-router";


const PlantDetails = () => {
  const { carts, setCarts } = useContext(CartContext);

  //   const { id } = useParams();

  //   const [plant, setPlant] = useState({});

  //   useEffect(() => {
  //     fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
  //       .then((res) => res.json())
  //       .then((data) => setPlant(data?.plants));
  //   }, [id]);

  //   const details = plant;

  const { plants } = useLoaderData();
  //   console.log(plants);

  const location = useLocation();
  //   console.log(location.state);

  const { name, image, description } = location?.state.plant || {};

  return (
    <div className="card bg-base-100 w-96 mx-auto my-8 shadow-sm">
      <figure className="h-48 overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => setCarts((prv) => [...prv, location?.state])}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
