import React from "react";
import "./NavBar.scss";
import { MdLogin } from "react-icons/md";

const NavBar = () => {
    return (
      <div className="Bar">
        <h1>ApeShit</h1>
        <input type="checkbox" id="nav-check" />
        <div className="nav-btn">
        <MdLogin className="loginIcon" size={25} />
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
  
        <div className="nav-links">
          <a href="#Kategori1">Kategori #1</a>
          <a href="#Kategori2">Kategori #2</a>
          <a href="#Kategori3">Kategori #3</a>
          <a href="#Kategori4">Kategori #4</a>
          <a href="#Kategori5">Kategori #5</a>
        </div>
      </div>
    );
  };
  
  export default NavBar;