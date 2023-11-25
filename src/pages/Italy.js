import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

const Italy = () => {
  return (
    <>
      <Header />

      <HeroSection
        title="Italy"
        subTitle="Explore the Beauty of Italy"
        bgColor="#17A2B8"
        color="#fff"
      />

      <section className="reportPage-firstContainer">
        <h2>Welcome to Italy!</h2>
        <p>
          Italy, a country in Southern Europe, is known for its rich history,
          art, culture, and cuisine. From the ancient ruins of Rome to the
          beautiful canals of Venice, Italy offers a diverse and enchanting
          experience for travelers.
        </p>

        <h2>Discover the Charm of Italian Cities</h2>

        <div className="row">
          <div className="col-12 col-sm-6">
            <div>
              <div>
                <img
                  src="https://placehold.co/600x400/EFEFEF/grey?text=Rome"
                  alt="Rome"
                  width={"100%"}
                  height={"auto"}
                />
              </div>

              <p>
                {" "}
                Explore the historic streets of Rome and marvel at iconic
                landmarks like the Colosseum and Vatican City.{" "}
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div>
              <div>
                <img
                  src="https://placehold.co/600x400/EFEFEF/grey?text=Venice"
                  alt="Venice"
                  width={"100%"}
                  height={"auto"}
                />
              </div>

              <p>
                {" "}
                Explore the historic streets of Rome and marvel at iconic
                landmarks like the Colosseum and Vatican City.{" "}
              </p>
            </div>
          </div>
        </div>

        <h2>Savor Italian Cuisine</h2>
        <p>
          Indulge in the delicious flavors of Italian cuisine, from authentic
          pasta and pizza to exquisite wines and gelato.
        </p>
      </section>

      <Footer />
    </>
  );
};

export default Italy;
