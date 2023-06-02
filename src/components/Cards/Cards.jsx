import React, { useState, useRef, useEffect } from "react";
import "./Cards.css";

const Cards = () => {
    const cardsRef = useRef(null);

    var $this = $(cardsRef); // targeted div
var offset = $this.offset();
var width = $this.width();
var height = $this.height();

  const handleMouseMove = (event) => {
    const cards = cardsRef.current;
    const x = event.clientX;
    const y = event.clientY;
    const middleX = offset.left + width / 2;
    const middleY = offset.top + height / 2;


    const offsetX = ((x - middleX) / middleX) * 20;
    const offsetY = ((y - middleY) / middleY) * 17.5;

    console.log(offsetX, offsetY);

    // cards.style.transform = "scale3d(1.1, 1.1, 1.1)";
    cards.style.setProperty("--rotateX", -1 * offsetX + "deg");
    cards.style.setProperty("--rotateY", -1 * offsetY + "deg");
    
  };

  const handleMouseOut = () => {
    const cards = cardsRef.current;

    // cards.style.transform = "scale3d(1, 1, 1)"; // Reset the transform properties when the mouse is out
    cards.style.setProperty("--rotateX", "0");
    cards.style.setProperty("--rotateY", "0");
    
  };
        
  return (
    <section id="card">
      <div id="cardDiv">
        <div
          className="cards" ref={cardsRef}
          onMouseMove={handleMouseMove}
          onMouseOut={handleMouseOut}>
          <div className="cardsStyle">
            <div className="cardsIn">
              <img
                src="assets/logo/logo.png"
                alt="web-developement"
                className="w-16 h-16 object-contain"
              />
              <h3>Développeur Web</h3>
            </div>
          </div>
        </div>
        <div className="cards" >
          <div className="cardsStyle">
            <div className="cardsIn">
              <img
                src="assets/logo/logo.png"
                alt="react-nativ-developement"
                className="w-16 h-16 object-contain"
              />
              <h3>Développeur React Native</h3>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="cardsStyle">
            <div className="cardsIn">
              <img
                src="assets/logo/logo.png"
                alt="web-developement"
                className="w-16 h-16 object-contain"
              />
              <h3>Développeur Backend</h3>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="cardsStyle">
            <div className="cardsIn">
              <img
                src="assets/logo/logo.png"
                alt="web-developement"
                className="w-16 h-16 object-contain"
              />
              <h3>Entrepreneurs</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
