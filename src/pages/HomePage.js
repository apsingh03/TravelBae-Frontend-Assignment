import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  return (
    <>
      <Header />

      <HeroSection
        title="Welcome to TravelBae"
        subTitle="Explore exciting destinations with us!"
        bgColor="#E9ECEF"
      />

      <section className="homePage-sectionOne">
        <h2 className="text-center">Featured Destinations</h2>

        <div className="row mt-3">
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <Card
              title="Italy"
              image="https://placehold.co/400x300/EFEFEFF/grey?text=Italy"
              link="/italy/"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-3 ">
            <Card
              title="Tokyo"
              image="https://placehold.co/400x300/EFEFEFF/grey?text=Tokyo"
              link="/tokoyo/"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <Card
              title="Destination 1"
              image="https://placehold.co/400x300/EFEFEFF/grey?text=Bali"
            />
          </div>
        </div>
      </section>

      <section className="text-center mb-4">
        <h2>Discover More</h2>

        <p>
          Explore our handpicked destinations and create memories that last a
          lifetime.
        </p>

        <div>
          <Link to="/destinations/" className="btn btn-primary btn-md">
            View All Destinations
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
