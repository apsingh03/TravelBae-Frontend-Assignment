import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

const Rome = () => {
  return (
    <>
      <Header />

      <HeroSection
        title="Rome"
        subTitle="Discover the Beauty of Rome"
        bgColor="#DC3545"
        color="#fff"
      />

      <section className="reportPage-firstContainer">
        <h2>Welcome to Rome!</h2>
        <p>
          Rome, the capital city of Italy, is a treasure trove of history, art,
          and culture. From ancient wonders like the Colosseum to the splendor
          of the Vatican City, Rome is a destination that captivates visitors
          with its timeless beauty.
        </p>

        <h2>Explore the Rich History</h2>

        <div className="row">
          <div className="col-12 col-sm-6">
            <div>
              <div>
                <img
                  src="https://placehold.co/600x400/EFEFEF/grey?text=Colosseum"
                  width={"100%"}
                  height={"auto"}
                  alt="Colosseum"
                />
              </div>

              <p>
                {" "}
                Step back in time as you visit the iconic Colosseum, a symbol of
                ancient Roman engineering and entertainment.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div>
              <div>
                <img
                  src="https://placehold.co/600x400/EFEFEF/grey?text=RomanForum"
                  width={"100%"}
                  height={"auto"}
                  alt="Roman"
                />
              </div>

              <p>
                {" "}
                Explore the ruins of the Roman Forum, where political,
                religious, and commercial activities once thrived.
              </p>
            </div>
          </div>
        </div>

        <h2>Experience Vatican City </h2>
        <p>
          Discover the artistic and spiritual treasures of Vatican City,
          including St. Peter's Basilica and the Sistine Chapel.
        </p>
      </section>

      <Footer />
    </>
  );
};

export default Rome;
