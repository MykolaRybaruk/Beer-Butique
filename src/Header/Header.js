import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <header>
        <div className="logo-block">
          <img src="#" alt="" />
          <div className="logo-text">
            <p className="main-text">Beer Butique</p>
            <p className="secondary-text">The beast craft beer in NY</p>
          </div>

          <nav>
            <div className="menu-text">About us</div>
            <div className="menu-text">Menu</div>
            <div className="menu-text">Friday Deal</div>
            <div className="menu-text">Blog</div>
            <div className="menu-text">Contacts</div>
          </nav>

          <div className="header-social-box">
            <div className="social-icon"></div>
            <div className="social-icon"></div>
            <div className="social-icon"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
