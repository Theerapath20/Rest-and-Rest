import React from "react";
import './Header.css';

function Header() {
  return (
    <section className="header-wrap">
      <div className="h-con flexCenter paddings innerWidth ">
        <img className="logo" src="\public\logo3.png" alt="logo"   />

        <div className="flexCenter header-menu">
          <a href="">Residencies</a>
          <a href="">Our value</a>
          <a href="">Contact us</a>
          <a href="">get started</a>
          <button className="btn">
            <a href="">Contact</a>
          </button>
          
        </div>
      </div>
    </section>
  );
}

export default Header;
