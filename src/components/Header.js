/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
function Header() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
        {/* logo */}
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest </span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns </span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your </span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartRoundedIcon />
            <span className="header__optionLineTwo header_basketCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
