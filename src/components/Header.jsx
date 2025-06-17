import react from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";

const Header = () => {
    return (
        <div className="header-container sticky top-0 z-50 bg-white shadow-md">
            <h1 className={"logo"}>SURF ROOTS</h1>
            
            
            <div className="header--right">
                <input type="text" className={"header--input"} />
                <AiOutlineShoppingCart />
                <RiAccountCircleLine />
            </div>
        </div>
        
    )
}

export default Header;