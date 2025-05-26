import react from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
    return (
        <div className={"header-container"}>
            <h1 className={"logo"}>Make for It</h1>
            <div className="header__center">
                <a href="#" className="header__link">Home</a>
                <a href="#" className="header__link">Contact</a>
                <a href="#" className="header__link">About</a>
                <a href="#" className="header__link sign">Sign Up</a>
            </div>
            <div className="header__right">
                <input type="text" className={"header__input"} />
                <AiOutlineShoppingCart />
            </div>
        </div>
    )
}

export default Header;