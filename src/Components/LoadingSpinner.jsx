import { RefreshCcw } from "lucide";
import React from "react";
import { PacmanLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    // <div className="flex justify-between items-center min-h-screen">
    //   <p className="text-5xl animate-spin">
    //     <RefreshCcw></RefreshCcw>
    //   </p>
    // </div>
    <div className="flex justify-center items-center h-[calc(100vh-285px)]">
      <PacmanLoader color={'navy'}></PacmanLoader>
    </div>
  );
};

export default LoadingSpinner;
