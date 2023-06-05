import React, { useEffect, useState } from "react";
import "./TopHeader.css";
import logo from '../../assets/logo/logo.png';


export const TopHeader = () => {
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 50) {
        setBackgroundColor("#050816"); // Changer la couleur de fond après avoir fait défiler de 200 pixels
      } else {
        setBackgroundColor("transparent"); // Revenir à la couleur de fond par défaut lorsque la position de défilement est inférieure à 200 pixels
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="navHeader" style={{ backgroundColor }}>
      <span id="principalSpan">
        <span id="firstSpan"><img src={logo} width="50" height="50" id="logo"/> <p id="cacheText"> CacheTech.© | Corporation. </p></span>
        <span id="secondSpan">
          <ul id="ulHeader">
            <li className="liHeader">
              <a href="#">À Propos</a>
            </li>

            <li className="liHeader">
              <a href="#">Projets</a>
            </li>

            <li className="liHeader">
              <a href="#">Contacte</a>
            </li>
          </ul>
        </span>
      </span>
    </nav>
  );
};
