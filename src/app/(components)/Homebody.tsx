import React from "react";
import Link from "next/link";

function Homebody() {
  return (
    <div className="flex-body  lg:flex bg-stone-50 flex-col sm:flex-col md:flex-col lg:flex-row w-screen h-full">
      <div className="text-body flex-4 p-10 text-center md:text-left sm:text-center">
        <h2 className="text-4xl mb-3 text-brand-blue">Utibu Health Ordering System</h2>
        <h2 className="text-2xl m-1 mb-2">Medication made easy</h2>
        <h4 className="text-base mb-3">
            A solution to assist patients in ordering their medication.
        </h4>
        <h4 className="text-base mb-3">
        Click Get Started to create an 
            account then login to start ordering!
        </h4>

       

        <Link href="/register">
        <button className="w-32 h-19 relative p-1 rounded-lg bg-brand-blue text-white transition-transform transform-gpu hover:translate-y-1">
            Get Started
        </button>
        </Link>


      </div>
      <div className="img-body  relative bottom-6">
        <img
          src="./lung-redone.png"
          srcSet="./utibu-picture-smallest.png 640w, ./utibu-picture-smallest.png 320w"
          alt="landing-icon"
          className=" relative right-4 m-2 h-15 w-15 w-full h-full object-cover "
        />
      </div>
    </div>
  );
}

export default Homebody;
