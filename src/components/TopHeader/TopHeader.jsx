import React from "react";
import "./TopHeader.css";
import logo from '../../assets/logo/logo.png';


export const TopHeader = () => {
  return (
    <nav id="navHeader">
      <span id="principalSpan">
        <span id="firstSpan"><img src={logo} width="25" height="25" id="logo"/> CacheTech.© | Corporation. </span>
        <span id="secondSpan">
          <ul id="ulHeader">
            <li class="liHeader">
              <a href="#">À Propos</a>
            </li>

            <li class="liHeader">
              <a href="#">Projets</a>
            </li>

            <li class="liHeader">
              <a href="#">Contacte</a>
            </li>
          </ul>
        </span>
      </span>
    </nav>
  );
};