import React from "react";
import "./Nav.scss";
import "./ResponsiveNav.scss"

import { AiOutlineHome } from "react-icons/ai";
import { RiFlashlightLine, RiUser3Line } from "react-icons/ri";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { RiNotification2Line } from "react-icons/ri";
import { MdChatBubbleOutline } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";

import { BiMoon } from "react-icons/bi";
import logo from "../../assets/Photos/facebook logo And favicon/latterlogo.svg";
import profle from "../../assets/Photos/Profile/profile.jpg";
const Nav = () => {
  return (
    <div className="nav-wraper">
      <div className="container-flued">
        <div className="nav">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          <div className="searchber-menu">
            <form action="#">
              <input type="text" placeholder="Type to search" />
              <span className="search-icons">
                <FiSearch />
              </span>
            </form>

            <div className="menu">
              <a href="/">
                <AiOutlineHome className="menu-icons" />
              </a>

              <a href="/">
                <RiFlashlightLine className="menu-icons" />
              </a>

              <a href="/">
                <BsFillCameraVideoFill className="menu-icons" />
              </a>

              <a href="/">
                <RiUser3Line className="menu-icons" />
              </a>

              <a href="/">
                <FiShoppingBag className="menu-icons" />
              </a>
            </div>
          </div>

          <div className="content">
            <a href="/">
              <RiNotification2Line className="icon" />
            </a>
            <a href="/">
              <MdChatBubbleOutline className="icon" />
            </a>
            <a href="/">
              <BiMoon className="icon" />
            </a>
            <a href="/">
              <img className="profile" src={profle} alt="" />
            </a>
          </div>
          <div className="responsiveVew">
            <span><MdChatBubbleOutline /></span>
            <span><BsFillCameraVideoFill /></span>
            <span><FiSearch /></span>
            <small><BiMenuAltRight /></small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
