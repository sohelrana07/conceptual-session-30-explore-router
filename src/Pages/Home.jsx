// import React, { useEffect, useState } from "react";
import PlantCard from "../Components/PlantCard";
import { useLoaderData } from "react-router";

const Home = () => {
  //   const [plants, setPlants] = useState([]);

  //   useEffect(() => {
  //     fetch("https://openapi.programming-hero.com/api/plants")
  //       .then((res) => res.json())
  //       .then((data) => setPlants(data?.plants));
  //   }, []);

  const { plants } = useLoaderData();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant}></PlantCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
