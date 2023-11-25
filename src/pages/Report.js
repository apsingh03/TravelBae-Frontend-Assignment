import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

const Report = () => {
  return (
    <>
      <Header />

      <HeroSection
        title="Travel Report"
        subTitle="Explore insights and statistics about our travel destinations."
        bgColor="#6C757D"
        color="#fff"
      />

      <section className="reportPage-firstContainer">
        <div>
          <h2>Destinations Overview</h2>
          <p>
            Here is a summary of key information about our travel destinations:
          </p>
          <ul>
            <li>
              Here is a summary of key information about our travel
              destinations:
            </li>
            <li>Most popular destination: Bali</li>
            <li>Total number of visitors: 100</li>
          </ul>
        </div>

        <div>
          <h2>Customer Feedback</h2>
          <p>
            Read what our customers have to say about their travel experiences:
          </p>

          <div className="">
            <div className="border p-3 ">
              <p style={{ fontSize: "1.25rem" }}>
                {" "}
                "I had an amazing time exploring Rome. The sights were
                breathtaking, and the people were so welcoming. Definitely a
                trip to remember!"{" "}
              </p>
              <div className="d-flex flex-row align-items-center">
                {" "}
                <p
                  style={{
                    border: "1px solid #ddd",
                    width: "30px",
                    height: "0",
                  }}
                ></p>{" "}
                <p style={{ padding: "0 0 0 5px " }}>John Doe</p>{" "}
              </div>
            </div>

            <div className="border p-3 mt-3">
              <p style={{ fontSize: "1.25rem" }}>
                "The travel arrangements were seamless, and the recommended
                activities in Bali were spot on. Thank you for a fantastic
                experience!"{" "}
              </p>
              <div className="d-flex flex-row align-items-center">
                {" "}
                <p
                  style={{
                    border: "1px solid #ddd",
                    width: "30px",
                    height: "0",
                  }}
                ></p>{" "}
                <p style={{ padding: "0 0 0 5px " }}>Jane Smith</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Report;
