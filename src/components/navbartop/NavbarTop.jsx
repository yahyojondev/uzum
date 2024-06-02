import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const NavbarTop = () => {
  return (
    <div className="navbartop">
      <div className="container">
        <div className="navbartop__wrapper">
          <ul className="navbartop__left">
            <li>
              <IoLocationOutline />
              <p>
                shahar: <a href="">Toshknet</a>{" "}
              </p>
            </li>
            <li>Topshirish punktlari</li>
          </ul>
          <div className="navbartop__center">
            <span>Buyurtmangzini 1 kundda bepul yetkazib beramiz!</span>
          </div>
          <ul className="navbartop__right">
            <li>Uzumda soting</li>
            <li>Savol-javoblar</li>
            <li>Buyurtmalarim</li>
            <li>O'zbekcha</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
