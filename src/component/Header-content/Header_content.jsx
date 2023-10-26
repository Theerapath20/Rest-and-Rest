import React from "react";
import "./Header_content.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countUp";

function Header_content() {
  return (
    <section className=" h-content-wrap">
      <div className="paddings flexCenter innerWidth h-content">
        {/* left side */}
        <div className="flexColStart h-content-left">
          <div className="h-title">
            <h1>
              Invigorate <br /> your life with rest
            </h1>
          </div>

          <div className=" flexColStart h-description">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          <div className=" flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="btn">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat ">
              <span>
                <CountUp start={8000} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat ">
              <span>
                <CountUp start={1970} end={2500} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText" >Happy Customer</span>
            </div>
            <div className="flexColCenter stat ">
              <span>
                <CountUp start={5} end={15} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>
        
        
        {/* right side */}
        <div className="flexCenter h-content-right">
          <div className="img-content">
            <img src="\public\sea-right.jpg" alt="sea" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header_content;
