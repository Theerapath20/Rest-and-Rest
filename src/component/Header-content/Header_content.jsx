import React from "react";
import "./Header_content.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countUp";
import {motion} from 'framer-motion'
function Header_content() {
  return (
    <section className=" h-content-wrap">
      <div className="paddings flexCenter innerWidth h-content">
        {/* left side */}
        <div className="flexColStart h-content-left">
          <div className="h-title">
            <motion.h1
            initial={{y:"2rem",opacity:0 }}
            animate={{y:0,opacity:1}}
            translation={{
              duration: 2,
              type : "spring" 
            }}
            >
              Invigorate <br /> your life with rest
            </motion.h1>
          </div>

          <div className=" flexColStart h-description">
            <span>
            We've gathered together 5-star quality seaside resort  hotel here to give you 
            </span>
            <span>
            the answers you need to recharge and be ready to take on upcoming obstacles 
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
            <div className="flexColCenter  stat ">
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
          <motion.div
          initial={{x:"7rem",opacity: 0}} 
          animate={{x: 0,opacity: 1}} 
          translation={{
            duration: 2,
            type : "spring" 
          }}
          className="img-content">
            <img src="./sea-right.jpg" alt="sea" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Header_content;
