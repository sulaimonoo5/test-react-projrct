import React, { useState, useEffect } from "react";

import Lightning from "./../../images/Lightning-428.svg";
import pizzaImg from "./../../images/pizzaImage-428.png";
import promo from "./../../images/promo-video.png";
import playBtn from "./../../images/playBtn.png";
import pizzaIcon from "./../../images/pizza-icon.svg";
import fries from "./../../images/fries.svg";

import "./header.css";

function Header() {
  // Функции под анимацию смены цвета двух кнопок
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 10 && isMenuActive) {
        setIsMenuActive(true);
      } else {
        setIsMenuActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuActive]); // важное: пустой массив!
  // Функции под анимацию смены цвета двух кнопок
  return (
    <>
      {/* Остольной код шапки */}
      <header className="mainHeader">
        <div className="header">
          {/* Текст шапки */}
          <div className="headerText">
            <h1 className="h1Header">
              THE FASTEST <br />
              PIZZA{" "}
              <span className="spanImg">
                <img src={Lightning} alt="Lightning" className="lightIcon" />
              </span>{" "}
              DELIVERY
            </h1>
            <p className="pHeader">
              We will deliver juicy pizza for your family in 30 minutes, if the
              courier is late -{" "}
              <span className="freePizza">pizza is free!</span>
            </p>
          </div>

          {/* Фото пиццы */}
          <div className="headerImg">
            <img src={pizzaImg} alt="pizzaImg" className="pizzaImg" />
            {/* Отдельный див для релеавнтого позиционирование */}
            <div className="relativeIcons">
              <img src={pizzaIcon} alt="pizzaIcon" className="pizzaIcon" />
              <img src={fries} alt="fries" className="fries" />
            </div>
          </div>
        </div>

        {/* Кнопки */}
        <div
          className={`mainBtns ${
            isMenuActive ? "menu-active" : "order-active"
          }`}>
          <div className="buttonDiv">
            <button className="orderBtn" onClick={() => setIsMenuActive(false)}>
              To order
            </button>

            <div className="menuBtn-wrapper">
              <button className="menuBtn" onClick={() => setIsMenuActive(true)}>
                Pizza-Menu
              </button>
            </div>
          </div>
        </div>

        {/* Промо видео */}
        <div className="poroVideio">
          <div>
            <div className="promoText">
              <p>Cooking process:</p>
            </div>
            <div>
              <img src={promo} alt="promo" className="promo" />
            </div>
          </div>
          <div className="postionDiv">
            <div className="playBtn">
              <img src={playBtn} alt="play" className="play" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
