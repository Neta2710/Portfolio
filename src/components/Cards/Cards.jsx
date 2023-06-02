import React, { useRef } from "react";
import "./Cards.css";

const Cards = () => {
  const cardsRef = useRef(null);

  const handleMouseMove = (event) => {
    const cards = cardsRef.current;
    const x = (event.clientX * 100) / window.innerWidth + "%";
    const y = (event.clientY * 100) / window.innerWidth + "%";

    cards.style.transition = "0s";
    cards.style.left = x;
    cards.style.top = y;
  };

  const handleMouseOut = () => {
    const cards = cardsRef.current;

    cards.style.transition = "0.7s";
    cards.style.left = "50%";
    cards.style.top = "50%";
  };

  return (
    <section id="card">
      <div id="cardDiv">
        <div
          id="cards"
          className="cards"
          ref={cardsRef}
          onMouseMove={handleMouseMove}
          onMouseOut={handleMouseOut}
        >
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
        <div className="cards">
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
