import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import HeroSection from "../components/HeroSection";

const Destinations = () => {
  return (
    <>
      <Header />

      <HeroSection title="Explore Our Destinations" bgColor="#E9ECEF" />

      <section className="destinationPage-firstContainer">
        <div className="row mt-3">
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <Card
              title="Italy"
              image="https://placehold.co/400x300/EFEFEFF/grey?text=Italy"
              link="/italy/"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <Card
              title="Tokyo"
              image="https://placehold.co/400x300/EFEFEFF/grey?text=Tokyo"
              link="/tokoyo/"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-3 ">
            <Card
              title="Bali"
              image="https://placehold.co/400x300/EFEFEFF/grey?text=Bali"
              link="/bali/"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <Card
              title="Rome"
              image="https://placehold.co/400x300/EFEFEFF/grey?text=Rome"
              link="/rome/"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Destinations;
