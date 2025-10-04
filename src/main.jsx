import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import RootLayout from "./Layout/RootLayout";
import PlantDetails from "./Pages/PlantDetails";
import LoadingSpinner from "./Components/LoadingSpinner";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
    children: [
      {
        index: true,
        loader: () => fetch("https://openapi.programming-hero.com/api/plants"),
        Component: Home,
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "plantDetails/:id",
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/plant/${params.id}`),
        Component: PlantDetails,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
      {
        path: "cart",
        Component: Cart,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
