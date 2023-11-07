import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer-wrapper">
      <div className="footer-container paddings innerWidth flexCenter">
        {/* left side */}
        <div className=" flexColStart footer-left">
          <img src="./logo3.png" alt="" width={120} />

          <span className="secondaryText">
            Invigorate <br /> your life with rest 
          </span>
        </div>

        <div className="footer-right flexColStart">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            Theerapath Chaicharoen <br />
            srinakharinwirot university
          </span>
          <div className="flexCenter footer-menu secondaryText">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
