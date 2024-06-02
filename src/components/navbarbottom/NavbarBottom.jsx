import React from "react";
import { NavLink } from "react-router-dom";

const NavbarBottom = () => {
  return (
    <div className="navbarBottom">
      <div className="container">
        <ul className="navbar__list">
          <li>
            <NavLink>Muddatli to'lov</NavLink>
          </li>
          <li>
            <NavLink>Yozgi savdo</NavLink>
          </li>
          <li>
            <NavLink>Uyda salqinlik</NavLink>
          </li>
          <li>
            <NavLink>Hovuzlar</NavLink>
          </li>
          <li>
            <NavLink>Elektronika</NavLink>
          </li>
          <li>
            <NavLink>Maishiy texnika</NavLink>
          </li>
          <li>
            <NavLink>Kiyim</NavLink>
          </li>
          <li>
            <NavLink>Poyabzallar</NavLink>
          </li>
          <li>
            <NavLink>Aksessuarlar</NavLink>
          </li>
          <li>
            <NavLink>Go'zallik va parvarish</NavLink>
          </li>
          <li>
            <NavLink>Yana</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarBottom;
