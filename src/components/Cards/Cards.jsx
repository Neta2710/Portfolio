import React from "react";
import "./Cards.css";



const Cards = () => {


  return (
    <section id="card">
      <div id="cardDiv">
        <div
          className="cards" >
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
