import React from 'react'
import { Link } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./Header.css";

function Header() {

  return (
    <div className="header">

    <Link to="/">
    <img classname="header__logo" style={{
        width: "100px",
        marginTop: "18px",
        marginLeft: "20px",
        marginRight: "20px",
        objectFit: "contain"
    }} src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='' />
    </Link>

    <div className="header__search">
    <input type="text" className="header__searchInput"></input>
    <SearchIcon className="header__searchIcon" />
    </div>

    <div className="header__nav">
    <Link to="/login" className="header__link">
        <div className="header__option">
            <span className="header__optionLineOne">Hello User</span>
            <span className="header__optionLineTwo">Sign in</span>
        </div>
    </Link>

    <Link to="/" className="header__link">
        <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
        </div>
    </Link>

    <Link to="/" className="header__link">
        <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
        </div>
    </Link>
   
    <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
        <ShoppingBasketIcon />
        <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
    </Link>
    </div>
    </div>
  )
}

export default Header