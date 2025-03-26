import React from "react";

const Footer = () => {
  return (
    <nav
      className="navbar navbar-light"
      style={{ backgroundColor: "#cde2f0", display: "block" }}
    >
      <div className="navbar-brand mb-0 h1 text-center">
        Marta Gómez - &copy; {new Date().getFullYear()}{" "}
      </div>
    </nav>
  );
};

export default Footer;
