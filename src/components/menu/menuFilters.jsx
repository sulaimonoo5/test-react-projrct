import "./menuFilters.css";
import { useState } from "react";

function MenuFilters() {
  const [active, setActive] = useState(0);

  const activeStyle = {
    background: "linear-gradient(to top right, #ffa228 0%, #ff6432 100%)",
  };

  const inactiveStyle = {
    backgroundColor: "#210a01",
    boxShadow: "0px 0px 23px 0px #ff6a0008",
  };

  return (
    <section className="filterSection">
      {/* Show All */}
      <div
        className="box1"
        style={active === 0 ? activeStyle : inactiveStyle}
        onClick={() => setActive(0)}>
        <p>Show All</p>
      </div>

      <div
        className="box2"
        style={active === 1 ? activeStyle : inactiveStyle}
        onClick={() => setActive(1)}>
        <p>Meat</p>
      </div>

      <div
        className="box3"
        style={active === 2 ? activeStyle : inactiveStyle}
        onClick={() => setActive(2)}>
        <p>Vegetarian</p>
      </div>

      <div
        className="box4"
        style={active === 3 ? activeStyle : inactiveStyle}
        onClick={() => setActive(3)}>
        <p>Sea Products</p>
      </div>

      <div
        className="box5"
        style={active === 4 ? activeStyle : inactiveStyle}
        onClick={() => setActive(4)}>
        <p>Mushrums</p>
      </div>
    </section>
  );
}

export default MenuFilters;
