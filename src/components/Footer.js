import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="text-center text-white "
        style={{ backgroundColor: "#343A40", padding: "20px 0" }}
      >
        <p>© [{new Date().getFullYear()}] TravelBae. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
