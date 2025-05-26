import react from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";

const Header = () => {
    return (
        <div className={"header-container"}>
            <h1 className={"logo"}>SURF ROOTS</h1>
            <div className="header--center">
                <a href="#" className="header--link">Contact</a>
                <a href="#" className="header--link">About</a>
                <a href="#" className="header--link sign">Sign Up</a>
            </div>
            <div className="header--right">
                <input type="text" className={"header--input"} />
                <AiOutlineShoppingCart />
                <RiAccountCircleLine />
            </div>
        </div>
    )
}

export default Header;