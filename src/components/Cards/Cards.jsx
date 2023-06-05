import React, { useRef, useEffect } from "react";
import "./Cards.css";
import VanillaTilt from "vanilla-tilt";
import devWeb from '../../assets/card/dev-web.png'
import reactNative from '../../assets/card/react-native.png'
import backend from '../../assets/card/backend.png'
import entrep from '../../assets/card/entrep.jpg'

const Cards = () => {
  useEffect(() => {
    const tiltElements = document.querySelectorAll("[data-tilt]");
    tiltElements.forEach((element) => {
      VanillaTilt.init(element);
    });
  }, []);

  return (
    <section id="card">
      <div id="cardDiv">
        <div className="cards" data-tilt data-tilt-scale="1.1">
          <div className="cardsStyle">
            <div className="cardsIn">
              <img
                src={devWeb}  width="64" height="64"
                alt="web-developement"
                className="w-16 h-16 object-contain"
              />
              <h3>Développeur Web</h3>
            </div>
          </div>
        </div>
        <div className="cards" data-tilt data-tilt-scale="1.1">
          <div className="cardsStyle">
            <div className="cardsIn">
              <img
                src={reactNative}  width="64" height="64"
                alt="react-nativ-developement"
                className="w-16 h-16 object-contain"
              />
              <h3>Développeur React Native</h3>
            </div>
          </div>
        </div>
        <div className="cards" data-tilt data-tilt-scale="1.1">
          <div className="cardsStyle">
            <div className="cardsIn">
              <img
               src={backend}  width="64" height="64"
                alt="web-developement"
                className="w-16 h-16 object-contain"
              />
              <h3>Développeur Backend</h3>
            </div>
          </div>
        </div>
        <div className="cards" data-tilt data-tilt-scale="1.1">
          <div className="cardsStyle">
            <div className="cardsIn">
              <img
                src={entrep}  width="64" height="64"
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
