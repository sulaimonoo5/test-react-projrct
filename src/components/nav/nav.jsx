import { useState } from "react";
import "./nav.css";
import cart from "./../../images/cart.svg";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    {/* Как эу часть назвать?? */}
      <nav className="nav">
        <span className="logo">
          <h1 className="pizzashop">pizzashop</h1>
        </span>
        <div className="imgLines">
          <div>
            <img src={cart} alt="cart" className="chart" />
          </div>
          <div
            className="mainLines"
            onClick={toggleMenu}
            style={{ cursor: "pointer" }}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </nav>

      {/* Burger Menu */}
      <div
        className={`burger-menu ${isMenuOpen ? "open" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          right: isMenuOpen ? 0 : "-400px",
          width: "300px",
          height: "100vh",
          background: "#1e0c00",
          transition: "right 0.8s ease",
          zIndex: 1000,
          padding: "20px",
        }}>
        <div style={{ marginBottom: "30px", textAlign: "right" }}>
          <button
            onClick={toggleMenu}
            style={{
              background: "none",
              border: "none",
              fontSize: "30px",
              cursor: "pointer",
              color: "#959595ff",
            }}>
            ×
          </button>
        </div>

        {/* Содержимое меню */}
        <ul className="ulStyle">
          <li>Home</li>
          <li>Menu</li>
          <li>Events</li>
          <li>About us</li>
        </ul>
        <button className="logInBtn">
          Log in
        </button>
      </div>

      {/* здесь будет Overlay */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            zIndex: 999,
            transition: "opacity 0.3s ease",
          }}
        />
      )}
    </>
  );
}

export default Nav;
