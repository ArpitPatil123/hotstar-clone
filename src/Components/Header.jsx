import React from "react";
import "../Assests/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="nav_container">
        {/* Header left */}
        <div className="header_left">
          <div className="hamburger">
            <MenuIcon />
          </div>
          <Link to="/">
            <div className="header_logo">
              <img
                src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
                alt=""
              />
            </div>
          </Link>
          <div className="header_navigation">
            <ul>
              <li>
                <p>TV</p>
                <div className="dropdown">
                  <p>Gusto Tv</p>
                  <p>Other Shows</p>
                  <p>Hotstar Specials</p>
                  <p>Quix</p>
                  <p>Star Plus</p>
                  <p>more...</p>
                </div>
              </li>
              <li>
                <p>Movies</p>
              </li>
              <li>
                <p>Shows</p>
              </li>
              <li>
                <p>Disney+</p>
              </li>
              <li>
                <p>
                  K<span>i</span>DS
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* Header left */}

        {/* header right */}
        <div className="header_right">
          <div className="header_search">
            <input type="search" placeholder="Search" />
            <div className="search_icon">
              <SearchIcon />
            </div>
          </div>
          <button>Subscribe</button>
          <div className="header_login">
            <p>Login</p>
          </div>
        </div>
        {/* header right */}
      </div>
    </div>
  );
};

export default Header;
