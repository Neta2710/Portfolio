import React, { useEffect, useState } from "react";
import Septre  from "./Septre/Septre";
import "./TopPresentation.css";
import Computeur from "../Canvas/Computeur"

const TopPresentation = () => {
  return (
    <section className="top-presentation">
      <div id="flexPosition">
          <Septre id="Septre"/>
          <span id="textTop">
          <h1>
            <h1 id="title">
              Hi, We are 
              <span id="cacheTech"> CacheTech</span>
            </h1>
            <p id="presentationTop">
              Nous sommes une entreprise de création de site web et
              d'application,
              <br />
              Cela grâce à nos attribus de développer FullStack
            </p>
          </h1>
          </span>
      </div>
      <Computeur/>
    </section>
  );
};

export default TopPresentation;
