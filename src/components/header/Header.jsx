import React from "react";
import NavbarTop from "../navbartop/NavbarTop";
import NavbarBottom from "../navbarbottom/NavbarBottom";
import uzumlogo from "../../assets/images/uzumlogo.svg";
import { BiSolidCollection } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <NavbarTop />
      <div className="navbar__center">
        <div className="container">
          <div className="navbar__center__wrapper">
            <div className="navbar__center__left">
              <img src={uzumlogo} alt="" />
              <p>uzum market</p>
            </div>
            <div className="navbar__center__center">
              <div className="navbar__center__katolog">
                <BiSolidCollection />
                <p>katalog</p>
              </div>
              <div className="navbar__center__search">
                <input
                  placeholder="Mahsulotlar va turkumlar ishlash"
                  type="text"
                />
                <IoSearchOutline />
              </div>
            </div>
            <ul className="navbar__center__right">
              <li>
                <IoPersonSharp />
                Kirish
              </li>
              <li>
                <FaRegHeart />
                saralangnalr
              </li>
              <li>
                <BsBagCheck />
                savat
              </li>
            </ul>
          </div>
        </div>
      </div>
      <NavbarBottom />
    </div>
  );
};

export default Header;
