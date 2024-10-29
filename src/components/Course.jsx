import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-red-800"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Our collection features iconic models like the Kawasaki Ninja
            ZX-10R, Yamaha YZF-R1, and Harley-Davidson Road King, showcasing
            cutting-edge technology and striking designs. Each motorcycle is
            meticulously chosen to ensure the best performance and safety for
            our customers.
          </p>
          <Link to="/">
            <button className="mt-6 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-800 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
