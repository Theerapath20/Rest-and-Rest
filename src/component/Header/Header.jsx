import React, { useState } from "react";
import './Header.css';
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'; 

const  Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800){
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="header-wrap">
      <div className="h-con flexCenter paddings innerWidth ">
        <img className="logo" src="\public\logo3.png" alt="logo"   />

    
         <OutsideClickHandler
         onOutsideClick={() =>{
          setMenuOpened(false)
         }}>
        <div className="flexCenter header-menu"
        style={getMenuStyles(menuOpened)}
        >
          <a href="">Residencies</a>
          <a href="">Our value</a>
          <a href="">Contact us</a>
          <a href="">get started</a>
          <button className="btn">
            <a href="">Contact</a>
          </button>
          </div>
          </OutsideClickHandler>

          <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
        <BiMenuAltRight size={30} />
      </div>
      </div>
      
    </section>
  );
}

export default Header;

 

