import React from "react";
import Navbar from "../components/Navbar";
import contact from "../components/contact";
import Footer from "../components/Footer";

function aboutus() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <contact />
      </div>
      <Footer />
    </>
  );
}

export default aboutus;
