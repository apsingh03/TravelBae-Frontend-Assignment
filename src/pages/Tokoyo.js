import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

const Tokoyo = () => {
  return (
    <>
      <Header />

      <HeroSection
        title="Tokyo"
        subTitle="Discover the Beauty of Tokyo"
        bgColor="#FFC107"
        color="#000"
      />

      <section className="reportPage-firstContainer">
        <h2>Welcome to Tokyo!</h2>
        <p>
          Tokyo, the capital city of Japan, is a vibrant metropolis where
          modernity and tradition coexist. From futuristic skyscrapers to
          historic temples, Tokyo offers a unique blend of experiences for every
          traveler.
        </p>

        <h2>Explore Tokyo's Landmarks</h2>

        <div className="row">
          <div className="col-12 col-sm-6">
            <div>
              <div>
                <img
                  src="https://placehold.co/600x400/EFEFEF/grey?text=Shibuya"
                  width={"100%"}
                  height={"auto"}
                  alt="Sbibuya"
                />
              </div>

              <p>
                {" "}
                Visit the iconic Shibuya Crossing, one of the busiest pedestrian
                crossings in the world.{" "}
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div>
              <div>
                <img
                  src="https://placehold.co/600x400/EFEFEF/grey?text=Asakusa"
                  width={"100%"}
                  height={"auto"}
                  alt="Asakusa"
                />
              </div>

              <p>
                {" "}
                Experience the traditional side of Tokyo in Asakusa, home to the
                historic Senso-ji Temple.{" "}
              </p>
            </div>
          </div>
        </div>

        <h2>Indulge in Tokyo's Culinary Delights</h2>
        <p>
          Explore the diverse and delicious world of Japanese cuisine, from
          sushi and ramen to street food delights.
        </p>
      </section>

      <Footer />
    </>
  );
};

export default Tokoyo;
