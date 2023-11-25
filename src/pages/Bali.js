import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

const Bali = () => {
  return (
    <>
      <Header />

      <HeroSection
        title="Bali"
        subTitle="Discover the Beauty of Bali"
        bgColor="#28A745"
        color="#fff"
      />

      <section className="reportPage-firstContainer">
        <h2>Welcome to Bali!</h2>
        <p>
          Bali, an Indonesian island known for its forested volcanic mountains,
          iconic rice paddies, beaches, and coral reefs. Immerse yourself in the
          vibrant culture, lush landscapes, and spiritual ambiance of Bali.
        </p>

        <h2>Explore Bali's Natural Wonders</h2>

        <div className="row">
          <div className="col-12 col-sm-6">
            <div>
              <div>
                <img
                  src="https://placehold.co/600x400/EFEFEF/grey?text=Ubud"
                  alt="Ubud"
                  width={"100%"}
                  height={"auto"}
                />
              </div>

              <p>
                {" "}
                Visit the cultural heart of Bali in Ubud, surrounded by lush
                rice terraces and traditional crafts.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div>
              <div>
                <img
                  src="https://placehold.co/600x400/EFEFEF/grey?text=Kuta"
                  alt="Kuta"
                  width={"100%"}
                  height={"auto"}
                />
              </div>

              <p>
                {" "}
                Experience the vibrant nightlife and famous beaches in Kuta,
                perfect for surf enthusiasts and sun-seekers.
              </p>
            </div>
          </div>
        </div>

        <h2>Immerse Yourself in Balinese Culture</h2>
        <p>
          Participate in traditional ceremonies, witness captivating dance
          performances, and savor the unique flavors of Balinese cuisine.
        </p>
      </section>

      <Footer />
    </>
  );
};

export default Bali;
